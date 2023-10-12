<script>
    export let data
    // console.log(data)
</script>

<section>
    <article>
        <h2>{data.title}</h2>
        <p>{data.speaker}</p>
        <p>{data.date}</p>
        <div> 
            <img src="{data.image.url}" alt="Laptop in the jungle.">
        </div>
        <p>{data.blog.raw.children[0].children[0].text}</p>

    </article> 
</section>



<style>
 section{
        width:100vw;
        height: auto;
        background-color: var(--pink);
        position: relative;
        margin-top:0;
        padding-top:0;
        color:black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section h2{
        margin-left:5vw;
        margin-top:0rem;
        padding-top:1rem;
    }
    section p{
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


</style>