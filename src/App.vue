<template>
  <div id="app">
    <!--Start Nav Bar-->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div class="container"><a class="navbar-brand" href="index.html"> <img src="../src/assets/imgs/logo.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li>
            <li class="nav-item drop"><a class="nav-link" id="navbarDropdown">About us</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Our Company</a><a class="dropdown-item" href="#">Partners & Accreditations</a><a class="dropdown-item" href="#">Corporate Structure</a></div>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">Business Units  </a></li>
            <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Partners</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Media&Events</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Careers</a></li>
            <li class="nav-item search"><a class="nav-link" href="#"> <i class="fas fa-search fa-fw fa-lg"></i></a>
              <div class="search-box"> 
                <div class="input-group mb-3">
                  <input class="form-control" type="search" placeholder="Search">
                  <div class="input-group-append"><span class="input-group-text" id="basic-addon2"> <i class="fas fa-search"></i></span></div>
                </div>
              </div>
            </li>
            <li class="nav-item lang"><a class="nav-link" href="#"> <img src="../src/assets/imgs/lang.png" alt="Lang"></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!--End Nav Bar-->
    <mainSlider></mainSlider>
    
    <services></services>
    <!--Start Over View-->
    <section class="overview"> 
      <div class="container"> 
        <div class="row"> 
          <div class="col-lg-12"> 
            <div class="overview-info">
              <h2 class="text-center">OverView </h2>
              <p class="text-center wow animate__flipInX" data-wow-duration="2s" data-wow-offset="100">Andalusia is one of the leading regional players in the healthcare provision space in the Middle East. With a network of general hospitals, specialized medical centers, and polyclinics across Egypt and Saudi Arabia, Andalusia has built a unique footprint both in service spectrum and geographically. Andalusia Group for Medical Services was founded in 1984 by the entrepreneur Dr. Darweesh Zagzoug as a single hospital in Jeddah, Saudi Arabia; and grown over 30 years to own and manage several healthcare facilities in both Saudi and Egypt. The second generation family owner Dr. Hazem Zagzoug, the current CEO has made it possible for a renowned financial institution like the IFC to join forces to serve more than 7 million patients in the last 10 years with amicable quality, and creating 2000 new jobs. We are proud of our origin, our progress, as well as our partners. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Over View-->
    <team></team>
    <!--Start statistics-->
    <section class="statistics">
      <h2 class="text-center">statistics</h2>
      <div class="container"> 
        <div class="row"> 
          <div class="col-lg-3">  
            <div class=" card text-center wow animate__zoomIn" data-wow-duration="2s" data-wow-offset="100">
              <div class="image"> <i class="fas fa-walking fa-fw fa-3x"></i></div>
              <div class="card-body"> 
                <h4 class="heading count"> 3,21570</h4>
                <p>Clients Serviced</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">  
            <div class=" card text-center wow animate__zoomIn" data-wow-duration="2s" data-wow-offset="100">
              <div class="image"> <i class="fas fa-cog fa-fw fa-3x"></i></div>
              <div class="card-body"> 
                <h4 class="heading count"> 5140</h4>
                <p>Machienes</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">  
            <div class=" card text-center wow animate__zoomIn" data-wow-duration="2s" data-wow-offset="100">
              <div class="image"> <i class="fas fa-user-friends fa-fw fa-3x"></i></div>
              <div class="card-body"> 
                <h4 class="heading count"> 61473</h4>
                <p>Qulified Staff</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">  
            <div class=" card text-center wow animate__zoomIn" data-wow-duration="2s" data-wow-offset="100">
              <div class="image"> <i class="fas fa-map-marker-alt fa-fw fa-3x"></i></div>
              <div class="card-body"> 
                <h4 class="heading count"> 126</h4>
                <p>Sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End statistics-->
    <!--Start News-->
    <section class="News"> 
      <h2 class="text-center">RECENT NEWS</h2>
      <div class="container"> 
        <div class="row"> 
          <div class="col-lg-4"> 
            <div class=" card text-center wow animate__flipInX" data-wow-duration="2s" data-wow-offset="100"> 
              <div class="image"> <img class="w-100" src="assets/imgs/blog1.png" alt=""></div>
              <div class="card-body"> 
                <h5 class="heading">How to Improve Your Sales Volume</h5><small class="date">23 AUG, 2018</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.</p><a class="btn-more" href=""> Read more</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class=" card text-center wow animate__flipInX" data-wow-duration="2s" data-wow-offset="100"> 
              <div class="image"> <img class="w-100" src="assets/imgs/blog2.png" alt=""></div>
              <div class="card-body"> 
                <h5 class="heading">How to Improve Your Sales Volume</h5><small class="date">23 AUG, 2018</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.</p><a class="btn-more" href=""> Read more</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class=" card text-center wow animate__flipInX" data-wow-duration="2s" data-wow-offset="100"> 
              <div class="image"> <img class="w-100" src="assets/imgs/blog3.png" alt=""></div>
              <div class="card-body"> 
                <h5 class="heading">How to Improve Your Sales Volume</h5><small class="date">23 AUG, 2018</small>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.</p><a class="btn-more" href=""> Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End News-->
    <!--Start  partners-->
    <section class="partners">
      <h2 class="text-center">GREAT partners</h2>
      <div class="container"> 
        <div class="owl-carousel">
          <div> <img class="w-100" src="assets/imgs/partners1.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners2.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners3.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners4.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners5.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners3.png" alt=""></div>
          <div> <img class="w-100" src="assets/imgs/partners1.png" alt=""></div>
        </div>
      </div>
    </section>
    <!--End  partners-->
    <!--Start Footer-->
    <footer class="footer"> 
      <div class="container"> 
        <h4>Explore More</h4>
        <div class="row"> 
          <div class="col-lg-3">
            <h5>Quick links</h5>
            <ul class="list-unstyled"> 
              <li> <a href="">Home</a></li>
              <li> <a href="">about us</a></li>
              <li> <a href="">careers</a></li>
              <li> <a href="">events</a></li>
              <li> <a href="">NEWS</a></li>
              <li> <a href="">contact</a></li>
              <li> <a href="">Careers</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h5>OUR HOSPITALS</h5>
            <ul class="list-unstyled"> 
              <li> <a href="">Al Shalalat</a></li>
              <li> <a href="">semouha</a></li>
              <li> <a href="">antoniades</a></li>
              <li> <a href="">maadi</a></li>
              <li> <a href="">hai el jamaa</a></li>
              <li> </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <h5>OUR HOSPITALS</h5>
            <div class="input-group mb-3">
              <input class="form-control" type="email" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append"><span class="input-group-text" id="basic-addon2">subscribe now</span></div>
            </div>
            <div class="copy-right"> 
              <p>Copyright © 2018 - ANDALUSIA GROUP</p>
              <div class="social-media"><a href=""> <i class="fab fa-facebook-f fa-fw"></i></a><a href=""> <i class="fab fa-twitter fa-fw"></i></a><a href=""> <i class="fab fa-google-plus-g fa-fw"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--End Footer-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mainSlider from './components/mainSlider'
import Services from './components/Services.vue'
import team from './components/team'
import Team from './components/team.vue'
export default {
  name: 'App',
  components: {
    mainSlider,
    Services,
    team,
    Team
  }
}
</script>

<style>
#app {
  
}
</style>
