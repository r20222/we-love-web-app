import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  
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
        blog {
          raw
        }
      }
    }
    `
   
    const dataHygraph = await hygraph.request(query) 
    console.log(dataHygraph)
    return {dataHygraph}
    
    
  }