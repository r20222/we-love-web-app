<script>
    import Header from '../components/header.svelte'
    import ChooseBlog from '../components/choose-blog.svelte'
    import Footer from '../components/footer-homepage.svelte'


    export let data
    let scroll

</script>

<svelte:head>
    <title>WE LOVE WEB</title>
    <meta name="description" content="We Love Web Blog">
</svelte:head>

<Header />
<ChooseBlog data={data} />
<Footer />


<main>
    <!-- <Blog data={data.dataHygraph.weLoveWebBlogs[0]} />
    <SecondParallax />
    <Blog data={data.dataHygraph.weLoveWebBlogs[1]} /> -->
<!-- 
    {#each data.dataHygraph.weLoveWebBlogs.slice(2) as blog (blog.id)}
        <Blog data={blog} />
    {/each} -->
<!-- <a href="/blog">Blog</a> -->
</main>



<!-- svelte paralax bron https://www.youtube.com/watch?v=K3CM7j9GIxk -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@400;800&display=swap');
 
    :root{
        --emerald: #34D8AE;
        --pink: #F739C2;
    }

    :global(html){
        scroll-behavior: smooth;  
    }
    :global(body){
        margin: 0rem;
        /* height:200vh; */
        overflow-y: auto;
        overflow-x: hidden;
        font-family: 'Geologica', sans-serif;
    }

</style>