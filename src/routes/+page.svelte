<section class="parallax-container">
    <header>
        <div class="first-img"></div>
        <div class="second-img"></div>
        <div class="third-img"> <img src="/black-code-cat-large-outlined-good.svg" alt="A cat coding behind a computer."></div>

    </header>
    <article>
        <h1>hoi!</h1>
        <p>Blablalblablalba</p>
    </article>
</section>

<style>
    :global(body){
        margin: 0rem;
    }
/* yt bron https://www.youtube.com/watch?v=mxHoPYFsTuk */
/* verwijderen bg: https://www.remove.bg/ & inkscape */
    .parallax-container{
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
        z-index: -1;
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
        transform: translateZ(-10px) scale(2);
    }
    .third-img{
        height:100vh;
        background: url('/black-code-cat-large-outlined-good.svg');
        background-position: center;
        background-size: 100%;
        z-index: 100;
    }

    article{
        height:60vh;
        background-color: black;
    }
    h1{
        margin-top:0;
    }
    /* bron paralax: https://blog.logrocket.com/create-parallax-scrolling-css/ */

</style>