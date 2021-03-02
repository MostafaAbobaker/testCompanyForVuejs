<template>
  <!--start Slide-->
    <section class="main-slider"> 
      <div class="carousel slide" id="carouselExampleCaptions" data-ride="carousel">
        <ol class="carousel-indicators">
          <li class="active" data-target="#carouselExampleCaptions" data-slide-to="0"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            
            <img class="d-block w-100" src="../assets/imgs/Rectangle 2.png" alt="...">
            <div class="carousel-caption">
              <div class="box-info">
                <h5 class=" wow animate__fadeInUp" data-wow-duration="2s" data-wow-offset="100">We are growing fast do you see.</h5>
                <p class=" wow animate__fadeInUp" data-wow-duration="2s" data-wow-offset="100">Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. </p>
                <a class=" wow animate__fadeInUp btn-more" data-wow-duration="2s" data-wow-offset="100" href="">Learn more</a>
              </div>
            </div>
          </div>
          <div class="carousel-item" v-for="(obj, key) in mainSliderJSON" :key="key">
            <img class="d-block w-100" src="../assets/imgs/slide2.png" alt="...">
            <div class="carousel-caption">
              <div class="box-info">
                <h5 class=" wow animate__fadeInUp" data-wow-duration="2s" data-wow-offset="100">{{  obj.title }}</h5>
                <p class=" wow animate__fadeInUp" data-wow-duration="2s" data-wow-offset="100">{{  obj.pragraph }} </p>
                <a class=" wow animate__fadeInUp btn-more" data-wow-duration="2s" data-wow-offset="100" href="">Learn more</a>
              </div>
            </div>
          </div>
          
        </div><a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"> <i class="fas fa-angle-up"></i></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-angle-down"></i></span><span class="sr-only">Next</span></a>
      </div>
    </section>
    <!--End Slide-->
</template>

<script>
export default {
  data: () => ({
    mainSliderJSON: [
      
      {
        img: '../assets/imgs/slide2.png',
        title: 'We are growing fast do you see.',
        pragraph: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. '
      },
      {
        img: '../assets/imgs/Rectangle 2.png',
        title: 'We are growing fast do you see.',
        pragraph: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. '
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
