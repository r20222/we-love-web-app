<script>
    import SecondParallax from '../components/secondParallax.svelte'

    export let data 
</script>

<section>
    <h2>Kies een blog:</h2>
    {#each data.dataHygraph.weLoveWebBlogs.slice(0, 3) as blog}
            <a href="/{blog.slug}">{blog.title}</a>
    {/each}
    <SecondParallax />
    {#each data.dataHygraph.weLoveWebBlogs.slice(3) as blog}
            <a href="/{blog.slug}">{blog.title}</a>
    {/each}
</section>

<style>
    section{
        position:relative;
        background-color: var(--pink);
        padding:1rem 5vw;
        height: auto;
    }
    h2{
        margin-top:0;
        margin-left:1rem;
    }
    a{
        display:block;
        text-decoration: none;
        font-size:1.5rem;
        color: black;
        background-color: var(--emerald);
        padding:2rem 1rem;
        margin: 1.5rem auto;
        border: 3px solid black;
    }
</style>