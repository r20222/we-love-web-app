<script>
    import Navigation from '../../components/navigation.svelte'

    export let data;
    console.log(data)
    // console.log(data.blog.raw.children[0].type)
</script>

<Navigation />
<section>
    <img src="{data.blog.image.url}" alt="{data.blog.imageAlt}">
    <h1>{data.blog.title}</h1>
    <h2>{data.blog.speaker}</h2>
    <h3>Datum: {data.blog.date}</h3>
    <article>
    <!-- Blog text and lists -->
    {#if data.blog.blog.raw.children}     
    {#each data.blog.blog.raw.children as section}

      <!-- paragraph -->
      {#if section.type === "paragraph"}
          <p>{section.children[0].text}</p>
      {/if}

      <!-- list -->
      {#if section.type === "bulleted-list"}
          <ul>
              {#each section.children as listItem}
                  <li>{listItem.children[0].children[0].text}</li>
              {/each}
          </ul>
      {/if}

    {/each}
  {/if}

    </article>


</section>

<style>
 section{
        width:100vw;
        height: auto;
        background-color: var(--emerald);
        position: relative;
        padding-top:0;
        color:black;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
    /* section{
        width:100vw;
    } */
    img{
        width:80vw;
        margin:auto;
    }
</style>

<!-- bron om slugs te maken: https://stackoverflow.com/questions/65930303/sveltekit-how-do-i-do-slug-based-dynamic-routing -->