<script>
    import Navigation from '../../components/navigation.svelte'
    import Footer from '../../components/footer.svelte'


    export let data;
    console.log(data)
    // console.log(data.blog.raw.children[0].type)
</script>
<svelte:head>
    <title>WE LOVE WEB</title>
    <meta name="description" content="We Love Web Blog">
</svelte:head>
<Navigation />
<section class="complete-article">
    <img src="{data.blog.image.url}" alt="{data.blog.imageAlt}">
    <section class="article-intro">
        <h1>{data.blog.title}</h1>
        <h2>Spreker: {data.blog.speaker}</h2>
        <h3>Datum: {data.blog.date}</h3>
    </section>
    
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

<Footer />

<style>
 .complete-article{
        width:100vw;
        height: auto;
        background-image: 
        linear-gradient(0deg, #34d8ae 0%, #f739c2 100%);
        position: relative;
        padding-top:0;
        color:black;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    img{
        width:80vw;
        margin-top:2rem;
        border:3px solid black;
    }
    h1{
        font-size:1.7rem;
    }
    article{
        width:80vw;
        background-color: var(--emerald);
        padding:1rem;
        border: 3px solid black;
        margin-bottom:4rem;
    }
</style>

<!-- bron om slugs te maken: https://stackoverflow.com/questions/65930303/sveltekit-how-do-i-do-slug-based-dynamic-routing -->