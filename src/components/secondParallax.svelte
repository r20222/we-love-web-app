<script>
    let scroll
 </script>
 
 <svelte:window bind:scrollY={scroll} />
 

<section class="second-parallax">
    <div class="second-parallax-first-img" style:transform={`translate3d(0, ${scroll * -0.5}px,0)`}></div>
    <div class="second-parallax-second-img" style:transform={`translate3d(0, ${scroll * -0.3}px,0)`}></div>
    <div class="second-parallax-third-img"></div>
</section>

<style>
    .second-parallax{
        width:100vw;
        height:100vh;
        background-image: url('/cow.jpg');
        background-size: 100%;
        overflow: hidden;
    }
</style>