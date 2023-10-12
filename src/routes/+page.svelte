<script>
    import Blog from '../components/blog.svelte'
    import Header from '../components/header.svelte'
    import SecondParallax from '../components/secondParallax.svelte'

    export let data
    let scroll
</script>

<svelte:head>
    <title>WE LOVE WEB</title>
    <meta name="description" content="We Love Web Blog">
</svelte:head>

<Header />

<main>
    <Blog data={data.dataHygraph.weLoveWebBlogs[0]} />
    <SecondParallax />
    <Blog data={data.dataHygraph.weLoveWebBlogs[1]} />
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
        height:200vh;
        overflow-y: auto;
        overflow-x: hidden;
        font-family: 'Geologica', sans-serif;
    }

    


    /* .second-parallax-first-img{
        background: url('/cow.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh; */
        /* background-color: cyan; */
        

    /* } */
    /* .parallax-container{
        height:100vh;
        overflow-y: auto;
        overflow-x: hidden;
        perspective:10px;
    }
    header{
        position: relative;
        display:flex;
        justify-content: center;
        align-items:center;
        height:100%;
        transform-style: preserve-3d;
        z-index: -1;
    }
    .first-img, .second-img, .third-img{
        position: absolute;
        height:150%;
        width:100%;
        object-fit: cover;
        /* om tekst zichtbaar te maken */
        /* z-index: -1;
    }
    .first-img{
        height:100vh;
        width: 100vw;
        background: url('/sky.jpg');
        background-position: center;
        background-size: 100%;
        transform: translateZ(-15px) scale(2.5);

    }
    .second-img{
        height:100vh;
        background: url('/buildings.png');
        background-position: center;
        background-size: 100%;
        /* z-index: 100; */
        /* transform: translateZ(-10px) scale(2);
    }
    .third-img{
        height:100vh;
        background: url('/black-code-cat-large-outlined-good.svg');
        background-position: center;
        background-size: 100%;
        z-index: 100;
    }   */


</style>