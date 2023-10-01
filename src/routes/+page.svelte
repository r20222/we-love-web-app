<script>
    let scroll
</script>

<svelte:window bind:scrollY={scroll} />

<!-- <h1>{scroll}</h1> -->
<header>
    <div class="first-img" style:transform={`translate3d(0, ${scroll * -0.5}px,0)`}></div>
    <div class="second-img" style:transform={`translate3d(0, ${scroll * -0.3}px,0)`}></div>
    <div class="third-img"></div>
</header>
<!-- <main>
<section>
    <h1>Welcome to my We Love Web Blog!</h1>
</section>
</main> -->




<!-- svelte paralax bron https://www.youtube.com/watch?v=K3CM7j9GIxk -->
<style>
    :global(body){
        margin: 0rem;
        height:200vh;
        overflow-y: auto;
        overflow-x: hidden;
    }
    /* h1{
        color:blue;

    } */
    /* .parallax-container{
        height:100vh;
        overflow-y: auto;
        overflow-x: hidden;
        perspective:10px;
    } */

    .first-img, .second-img, .third-img{
        position: absolute;
        height:100%;
        width:100%;
        object-fit: cover;
        /* om tekst zichtbaar te maken */
        z-index: -1;
    }
    .first-img{
        height:100vh;
        width: 100vw;
        background: url('/sky.jpg');
        background-position: center;
        background-size: 100%;
        /* transform: translateZ(-15px) scale(2.5); */

    }
    .second-img{
        height:100vh;
        background: url('/buildings.png');
        background-position: center;
        background-size: 100%;
        top:10rem;
        /* z-index: 100; */
        /* transform: translateZ(-10px) scale(2); */
    }

    .third-img{
        height:100vh;
        background: url('/black-code-cat-large-outlined-good.svg');
        background-position: center;
        background-size: 100%;
        z-index: 100;
    }   
    /* section{
        width:100vw;
        height:100vh;
        background-color: black;
        position: relative;
        top: 100vh;
        margin-top:0;
        padding-top:0;
    } */

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