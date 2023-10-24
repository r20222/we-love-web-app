<script>
    export let data
    console.log(data)
    // console.log(data.blog.raw.children[0].type)
</script>

<section class="main">
    <article>
        <h2>{data.title}</h2>
        <p>{data.speaker}</p>
        <p>{data.date}</p>
        <div> 
            <img src="{data.image.url}" alt="{data.imageAlt}">
        </div>

        <!-- Blog text and lists -->
        {#if data.blog.raw.children}     
          {#each data.blog.raw.children as section}

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
      <!-- desktop -->
      <section class="desktop-image-background">
        <section class="desktop-image">
            <img src="{data.image.url}" alt="{data.imageAlt}" width="100">
        </section>
      </section>
  
</section>



<style>
 .main{
        width:100vw;
        height: auto;
        background-color: var(--pink);
        position: relative;
        margin-top:-.5rem;
        padding-top:0;
        color:black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main h2{
        margin-left:5vw;
        margin-top:0rem;
        padding-top:1rem;
    }
    .main p{
        margin-left:5vw;
        margin-right:5vw;
    }
    article{
        width:90vw;
        height:auto;
        background-color: var(--emerald);
        border: 3px solid black;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    div{
        width:80vw;
        height:28vh;
        margin-left:5vw;
        border: 3px solid black;
    }
    img {
        width:100%;
        height:100%;
        object-fit: cover;
    }
    .desktop-image{
        display:none;
    }

    @media screen and (min-width: 1000px){
        .main{
            width:100vw;
            height: auto;
            background-color: var(--pink);
            position: relative;
            margin-top:-.5rem;
            padding-top:0;
            color:black;
            display: grid; /* Change from "flex" to "grid" */
            grid-template-columns: 1fr 1fr; /* Two equal columns */
            justify-content: center;
            align-items: center;
        }
        article{
            width:40vw;
            height:auto;
            background-color: var(--emerald);
            border: 3px solid black;
            margin: 2rem;
        }
        div{
                display: none;
            }
        .desktop-image{
            display: block;
            width:100%;
            /* height:100%; */
            display: flex;
            justify-content: center;
        }
        .desktop-image-background{
            width:100%;
            height:100%;
            display: flex;
            align-items: center;
            background-image: 
            linear-gradient(
            to top right in oklab, 
            #34D8AE 0%, var(--pink) 0% 20%, #34D8AE 0% 40%, var(--pink) 0% 60%, #34D8AE 0% 80%, var(--pink) 0% 100%
            );
            border-left:3px solid black;
        }
        img{
            width:30vw;
            border: 3px solid black;
        }
    }
</style>