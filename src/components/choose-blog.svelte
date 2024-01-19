<script>
    import SecondParallax from '../components/secondParallax.svelte'

    export let data 
    console.log(data)
</script>

<section>
    <div>
        {#each data.dataHygraph.weLoveWebBlogs.slice(0, 4) as blog}
        <!-- Inline css style om de image uit cms als achtergrond te geven -->
                <a href="/{blog.slug}" style="background-image: url({blog.image.url})">{blog.title}</a>  
        {/each}
    </div>
    </section>
    <SecondParallax />
    <section>
        <div>
            {#each data.dataHygraph.weLoveWebBlogs.slice(4) as blog}
                <a href="/{blog.slug}" style="background-image: url({blog.image.url})">{blog.title}</a>
            {/each}
        </div>
    </section>
    


<style>
    section{
        position:relative;
        background-color: var(--pink);
        padding:1rem 5vw;
        height: auto;
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
        background-size:contain;
        background-blend-mode: saturation;
    }

    @media screen and (min-width: 1000px){
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
        div{
            display: grid;
            grid-template-columns: repeat(4,1fr) ;
            
        }
     
        a{
            width:10rem;
            height:10rem;
            font-size:1.5rem;
            padding:1rem 1rem;
            margin: 1.5rem 1rem;
            background-size:cover;
            justify-self: start;
            transition:.1s;

        }
        a:hover{
            scale:1.1;
            transition:.1s;
        }
    }
</style>