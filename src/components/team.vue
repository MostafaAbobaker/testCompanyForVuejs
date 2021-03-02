<template>
  <!--Start Our Team-->
    <section class="our-team"> 
      <h2 class="text-center">Executives Officers</h2>
      <div class="container"> 
        <div class="row"> 
          <div class="col-lg-6">
            <div class="card wow animate__fadeInRight" id="mater-card" data-wow-duration="2s" data-wow-offset="100">
              <div class="image"><img class="w-100" src="../assets/imgs/team1.png" alt=""></div>
              <div class="card-body"> 
                <h4 class="heading">Hazem Darwiesh</h4><small class="title">Chief Executive Officer</small>
                <p>Calling nothing end fertile for venture way boy, Esteem spirit temper too say adieus who direct esteem. It esteems luckily mr or picture placing drawing no. Apartments frequently or motionless on reasonable projecting expression. Way mrs end gave tall walk fact bed.</p>
                <div class="social-media">
                  <ul class="list-unstyled"> 
                    <li class="list-item"> <a class="link-item" href=""> <i class="fab fa-facebook-f fa-fw"></i></a></li>
                    <li class="list-item"> <a class="link-item" href=""> <i class="fab fa-twitter fa-fw"></i></a></li>
                    <li class="list-item"> <a class="link-item" href=""> <i class="fab fa-linkedin-in fa-fw"></i></a></li>
                    <li class="list-item"> <a class="link-item" href=""> <i class="fab fa-pinterest fa-fw"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6"> 
            <div class="row">
              
              <div class="col-lg-6" v-for="(obj, key) in teamJSON" :key="key">
                <div class=" card card-left text-center wow animate__fadeInUp" data-wow-duration="2s" data-wow-offset="100">
                  <div class="image">
                    <img class="w-100" v-bind:src="obj.img" alt="" v-bind:data-src="obj.dataSrc">
                    </div>
                  <div class="card-body"> 
                    <h5 class="heading">{{  obj.heading }}</h5>
                    <small class="title">{{  obj.title }}      </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Our Team-->
</template>

<script>

export default {
  data: () => ({
    teamJSON: [
      
      {
        img: "https://ik.imagekit.io/mostafaabobakr/team5_OOeGIlKJKB.png",
        dataSrc:'https://ik.imagekit.io/mostafaabobakr/team55_MVnDd8kaBivp.png',
        heading: 'Dr. Alaa AlGoweini',
        title: ''
      },
      {
        img: "https://ik.imagekit.io/mostafaabobakr/team4_jWLQANMRiatf.png",
        heading: 'Dr. Walaa Kadry',
        title: ''
      },
      {
        img: "https://ik.imagekit.io/mostafaabobakr/team3_29DX1Iqt1.png",
        heading: 'Mr. AbdelHakim GamalElDin',
        title: 'Chief Executive Officer'
      },
      {
        img: "https://ik.imagekit.io/mostafaabobakr/team2_Gc6UdEgLTH3C.png",
        heading: 'Hazem Darwiesh',
        title: 'Chief Executive Officer'
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
