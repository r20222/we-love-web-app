import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load({ params }) {
  try {
    let query = gql`
      query WeLoveWebBlogs {
        weLoveWebBlogs {
          id
          title
          speaker
          date
          slug
          image {
            url
          }
          imageAlt
          blog {
            raw
          }
        }
      }
    `;

    const dataHygraph = await hygraph.request(query);
    
    // Zoek het specifieke blog op basis van de slug
    const blog = dataHygraph.weLoveWebBlogs.find(blog => blog.slug === params.slug);
    // console.log(blog)
    return {
      blog // voeg het individuele blog toe aan de data
    };
  } catch (error) {
    console.error("Error loading blog data:", error);
    return { error: "Error loading blog data" };
  }
}
