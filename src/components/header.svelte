<script>
   let scroll
</script>

<svelte:window bind:scrollY={scroll} />


<header>
    <h1>WE LOVE WEB</h1>

    <div class="first-img" style:transform={`translate3d(0, ${scroll * -0.5}px,0)`}>
        <!-- <img src="/sky.jpg" alt="sky" width="100%" height="100%"> -->
    </div>

    <div class="second-img" style:transform={`translate3d(0, ${scroll * -0.3}px,0)`}>
        <!-- <img src="/buildings-smaller.jpg" alt="sky" width="100%" height="100%"> -->
    </div>

    <div class="third-img">
        <!-- <img src="/black-code-cat-smaller.jpg" alt="sky" width="100%" height="100%"> -->

    </div>


    <section class="intro-message">
        <p>Welkom op mijn We love Web blog! Scroll naar onderen om de blogposts te lezen.</p>
    </section>
    <section class="scroll-down" >
            <p>scroll down</p>
            <p>&#8675;</p>
    </section>
</header>

<style>
    header{
        width:100vw;
        height:100vh;
        background-color: black;
        overflow: hidden;
    }
    header h1{
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


    /* Zoek uit hoe je voor performance het beste de img kan weergeven
    onderstaande wordt niet door veel brouwsers ondersteunt,
    dus misschien toch beter in HTML doen met srcset etc. */
    .first-img{
        background-image: url('/sky-smaller.jpg');
        /* background-image: image-set(
            url('/sky-smaller-mobile.webp') 1x,
            url('/sky-smaller.webp') 2x
        ); */
        background-image: image-set(
            url('/cow.jpg') 1x,
            url('/sky-smaller.webp') 2x
        );
        
        
        
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        /* top: -1rem; */
        /* transform: translateZ(-15px) scale(2.5); */

    }
    .second-img{
        /* height:110vh; */
        background-image: url('/buildings-latest.webp');
        /* background-image: image-set(
            url('/sky-smaller-mobile.webp') 1x,
            url('/sky-smaller.webp') 2x
        ); */
        background-repeat: no-repeat;
        background-position: center;
        background-size: 203vh;
        top:8rem;
        overflow: hidden;
        /* z-index: 100; */
        /* transform: translateZ(-10px) scale(2); */
    }

    .third-img{
        /* height:110vh; */
        background-image: url('/black-code-cat-latest.webp');
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
        background-color: var(--emerald);
        width:90vw;
        height: 10rem;
        border: 3px solid black;
    }
    .intro-message p{
        margin:1rem;
    }
    section.scroll-down{
        position: absolute;
        top:85vh;
        width:90vw;
        margin-left: 5vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:2.5rem;
        color:var(--emerald);
        -webkit-text-stroke: 1px black;
        /* background:transparent; */
        /* border:none; */
    }
    .scroll-down p{
        margin: 0rem;
        background-color: rgba(0, 0, 0, .9);

    }

    @media screen and (min-width:1000px){
          /* intro message */
    .intro-message{
        position: absolute;
        top:20vh;
        right:5vw;
        margin-left: 5vw;
        z-index: 200;
        color:black;
        background-color: var(--emerald);
        width:30vw;
        height: 50vh;
        border: 3px solid black;
    }
    .intro-message p{
        margin:1rem;
    }
    }

</style>