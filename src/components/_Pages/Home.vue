<template>
 <div class="row" id="top-page">
  <div class="col-md-12">
    <div class="card">
      
      <div class="header">
        <!-- Carousel [START] -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li :class="{ active: currentSlide === 1 }"></li>
            <li :class="{ active: currentSlide === 2 }"></li>
            <li :class="{ active: currentSlide === 3 }"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item" :key="divSlide1" :class="{ active: currentSlide === 1 }">
              <img class="first-slide" src="static/img/basketball1.jpg" alt="First slide">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Edmonton's Premiere Filipino Basketball League</h1>
                  <p>
                    Providing the Filipino Community with an entertaining and competitive basketball league since 2006. 
                  </p>
                </div>
              </div>
            </div>
            <div class="item" :key="divSlide2" :class="{ active: currentSlide === 2 }">
              <img class="second-slide" src="static/img/basketball2.jpg" alt="Second slide">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Keeping the Passion in Sports for the Filipino</h1>
                  <p>
                    Every Filipino loves basketball. This is the sport we grew up and continue to play in.
                  </p>
                </div>
              </div>
            </div>
            <div class="item" :key="divSlide3" :class="{ active: currentSlide === 3 }">
              <img class="third-slide" src="static/img/basketball3.jpg" alt="Third slide">
              <div class="container">
                <div class="carousel-caption">
                  <h1>Building Trust and Friendship through Basketball</h1>
                  <p>
                    We play competitive but at the end of each game, we are all Filipino - one team and one community!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a class="left carousel-control" role="button" data-slide="prev" @click="carouselPreviousClicked">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" role="button" data-slide="next" @click="carouselNextClicked">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- Carousel [END] -->

        <h1>Welcome to Philippine Sports Association - Edmonton</h1>
        <p class="category">
        </p>
      </div>

      <hr />

      <div class="content">
        <div class="container-fluid">
          <h3>
            What's Happening
          </h3>
          <p>
            The latest news and info about the league
          </p>

          <div class="col-md-4 col-sm-12">
            <div class="alert alert-success" data-notify="container">
              <!-- <span data-notify="icon" class="ti-pie-chart"></span> -->
              <h4>Open Gym on October 1, 2017</h4>
              <p><small>Posted on Sept. 29, 2017</small></p>
              <span data-notify="message">
                In preparation for the upcoming PSA 2017 Fall/Winter Season, PSA is providing open gym access for all teams and players, 
                as well as those individuals who wants to participate in the league.
              </span>
              
              <div class="text-right">
                <router-link class="btn btn-info" :to="{path:'/news?article=open-gym-oct-1'}">More...</router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="alert alert-success" data-notify="container">
              <!-- <span data-notify="icon" class="ti-pie-chart"></span> -->
              <h4>PSA Official Facebook Page</h4>
              <p><small>Posted on Sept. 26, 2017</small></p>
              <span data-notify="message">
                In line with the recent elections of new association officials, the Philippine Sports Association is proud to announce 
                the new and official Facebook page for the organization.
              </span>
              
              <div class="text-right">
                <router-link class="btn btn-info" :to="{path:'/news?article=official-facebook'}">More...</router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="alert alert-success" data-notify="container">
              <!-- <span data-notify="icon" class="ti-pie-chart"></span> -->
              <h4>New PSA Officials</h4>
              <p><small>Posted on Aug. 1, 2017</small></p>
              <span data-notify="message">
                To continue with the growth and purpose of providing the best Filipino basketball league in Edmonton, 
                the Philippine Sports Association held a meeting last July 2, 2017 to elect the new set of officers 
                to manage the association.
              </span>
              
              <div class="text-right">
                <router-link class="btn btn-info" :to="{path:'/news?article=new-psa-officials'}">More...</router-link>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="container-fluid">
          <h3>
            Upcoming Schedules
          </h3>
          <p>
            Games schedule this coming week
          </p>

          <div class="col-md-12">
            <div class="alert alert-warning">
              <span>
                No Upcoming Game Schedule...
              </span>
            </div>
          </div>
        </div>

        <hr />

        <!-- Latest Results -->
        <div class="container-fluid">
          <h3>
            Latest Results
          </h3>
          <p>
            Results of Most Recent Games 
          </p>

          <div class="col-md-12">
            <div class="alert alert-danger">
              <span>
                League will start on October 14, 2017
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        divSlide1: 'slide-1',
        divSlide2: 'slide-2',
        divSlide3: 'slide-3',
        slidesCount: 3,
        currentSlide: 1,
        slide1Active: false
      }
    },

    methods: {
      carouselPreviousClicked () {
        var a = this
        var newSlide = (a.currentSlide - 1)

        if (newSlide === 0) {
          a.currentSlide = a.slidesCount
        } else {
          a.currentSlide = newSlide
        }
      },

      carouselNextClicked () {
        var a = this
        var newSlide = (a.currentSlide + 1)

        if (newSlide > a.slidesCount) {
          a.currentSlide = 1
        } else {
          a.currentSlide = newSlide
        }
      }
    },

    mounted: function () {
      this.$nextTick(function () {
        var element = document.getElementById('navbar-header')
        if (element) {
          element.scrollIntoView(true)
        }
      })
    }
  }

</script>

<style>
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */

  /* Carousel base class */
  .carousel {
    height: 500px;
    margin-bottom: 60px;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    z-index: 10;
  }

  /* Declare heights because of positioning of img element */
  .carousel .item {
    height: 500px;
    background-color: #777;
  }
  .carousel-inner > .item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 500px;
  }

  /* MARKETING CONTENT
  -------------------------------------------------- */

  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 20px;
    text-align: center;
  }
  .marketing h2 {
    font-weight: normal;
  }
  .marketing .col-lg-4 p {
    margin-right: 10px;
    margin-left: 10px;
  }
</style>
