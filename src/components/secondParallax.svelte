<script>
    let scroll
 </script>
 
 <svelte:window bind:scrollY={scroll} />
 

<section>
    <img src="/space-landscape.jpg" alt="Space landscape" class="background">
    <img src="/single-cow.png" alt="cow" class="cow" style:transform={`translate3d(${scroll * 0.3}px, 0, 0)`}>
</section>



<style>
    section{
        overflow: hidden;
        width:100%;
        height:auto;
        object-fit: cover;
        background-repeat: no-repeat;
    }
    .background{
        width: 100%;
        position: relative;
    }
    .cow{
       width: 100%;
       position: absolute;
       left:-110%;
    }
    @media screen and (min-width: 600px){
        .cow{
            left:-80%;
        }
    }
  
</style>