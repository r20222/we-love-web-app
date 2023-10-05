<script>
    let scroll
</script>

<svelte:head>
    <title>WE LOVE WEB</title>
</svelte:head>

<svelte:window bind:scrollY={scroll} />

<!-- <h1>{scroll}</h1> -->
<header class="first-parallax">
    <h1>WE LOVE WEB</h1>
    <div class="first-img" style:transform={`translate3d(0, ${scroll * -0.5}px,0)`}></div>
    <div class="second-img" style:transform={`translate3d(0, ${scroll * -0.3}px,0)`}></div>
    <div class="third-img"></div>
    <section class="intro-message">
        <p>Welkom op mijn We love Web blog! Scroll naar onderen om de blogposts te lezen.</p>
    </section>
    <a href="#first-blog" class="scroll-down" >
        <p>scroll down</p>
        <p>&#8675;</p>
    </a>
</header>

<main>
    <section id="first-blog" class="first-blog">
        <h3>Welcome to my We Love Web Blog!</h3>
    </section>
    <section class="second-parallax">
        <div class="second-parallax-first-img" style:transform={`translate3d(0, ${scroll * -0.5}px,0)`}></div>
        <div class="second-parallax-second-img" style:transform={`translate3d(0, ${scroll * -0.3}px,0)`}></div>
        <div class="second-parallax-third-img"></div>
    </section>

</main>




<!-- svelte paralax bron https://www.youtube.com/watch?v=K3CM7j9GIxk -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Geologica:wght@400;800&display=swap');

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

    .first-parallax, .second-parallax{
        width:100vw;
        height:100vh;
        background-color: black;
        overflow: hidden;
    }
    .first-parallax h1{
        color:white;
        position: absolute;
        z-index: 100;
        -webkit-text-stroke: 1px black;
        font-size:3rem;
        margin: 1rem 5vw;
    }
    .first-img, .second-img, .third-img{
        position: absolute;
        height:100%;
        width:100%;
        object-fit:cover;
        /* om tekst zichtbaar te maken */
        /* z-index: -1; */
    }


    
    .first-img{
        /* height:100vh; */
        /* width: 100vw; */
        background: url('/sky.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        /* top: -1rem; */
        /* transform: translateZ(-15px) scale(2.5); */

    }
    .second-img{
        /* height:110vh; */
        background: url('/buildings.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        top:10rem;
        /* z-index: 100; */
        /* transform: translateZ(-10px) scale(2); */
    }

    .third-img{
        /* height:110vh; */
        background: url('/black-code-cat-large-outlined-good.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        /* z-index: 100; */
    }   
  
    /* intro message */
    .intro-message{
        position: absolute;
        top:60vh;
        margin-left: 5vw;
        z-index: 200;
        color:black;
        background-color: #34D8AE;
        width:90vw;
        height: 10rem;
        border: 3px solid black;
    }
    .intro-message p{
        margin:1rem;
    }
    a.scroll-down{
        position: absolute;
        top:85vh;
        width:90vw;
        margin-left: 5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:2.5rem;
        color:white;
        -webkit-text-stroke: .1px black;
        /* background:transparent; */
        /* border:none; */
    }
    a.scroll-down:hover{
        color:#34D8AE;
    }
    .scroll-down p{
        margin: 0rem;
    }

    /* second part */
    .first-blog{
        width:100vw;
        height:100vh;
        background-color: black;
        position: relative;
        margin-top:0;
        padding-top:0;
        color:white;
    }
    .first-blog h3{
        margin-left:5vw;
        margin-top:0rem;
        padding-top:1rem;
    }


    /* second parallax */

    .second-parallax-first-img{
        background: url('/cow.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        

    }
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