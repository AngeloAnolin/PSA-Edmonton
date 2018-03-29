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
        <!-- News -->
        <div class="container-fluid">
          <h3>
            What's Happening
          </h3>
          <p>
            The latest news and info about the league
          </p>

          <div class="col-md-4 col-sm-12" v-for="hn in filterNewsItem(homeNews)" :key="hn.id">
            <div class="alert alert-success" data-notify="container">
              <h4>{{ hn.title }}</h4>
              <p><small>Posted on {{ hn.postDate}}</small></p>
              <span data-notify="message">
                {{ hn.blurb }}
              </span>
              
              <div class="text-right">
                <router-link class="btn btn-info" :to="'' + hn.link">More...</router-link>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <!-- Upcoming Schedules -->
        <div class="container-fluid">
          <h3>
            Upcoming Games
            &nbsp;
            <i class="fa fa-spinner fa-spin fa-fw" v-if="dataLoading"></i>
          </h3>
          <p>
            Games scheduled this coming weekend
          </p>

          <div class="row" v-if="false">
            <div class="alert alert-danger">
              <span>
                Schedules will be posted as soon as they are available...
              </span>
            </div>
          </div>

          <div class="row" v-for="ugd in upcomingGameDates" :key="ugd.GameDateId">
            <h4>{{ convertDateStringToWord(ugd.ScheduleDate.substring(0,10)) }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in filterGamesByGameDate(ugd.GameDateId)" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.Bracket.BracketName }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-danger"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h6>{{ u.HomeTeam.TeamName }} - ({{ u.HomeTeamScore }})</h6>
                      vs
                      <h6>{{ u.AwayTeam.TeamName }} - ({{ u.AwayTeamScore }})</h6>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    <strong>{{ u.ScheduleTime }} at {{ u.Gym.GymName }}</strong>
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
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
            Results of Most Recent Games including all other previous games can be viewed in the <a href="#/results">RESULTS</a> page.
          </p>
        </div>

      </div>
    </div>
  </div>
 </div>
</template>

<!-- <div class="alert alert-danger">
  <span>
    Schedules will be posted as soon as they are available...
  </span>
</div> -->

<script>
  import axios from 'axios'
  import config from 'src/config'

  export default {
    data () {
      return {
        dataLoading: false,
        divSlide1: 'slide-1',
        divSlide2: 'slide-2',
        divSlide3: 'slide-3',
        slidesCount: 3,
        currentSlide: 1,
        slide1Active: false,
        gameApiUrl: null,
        gameDateApiUrl: null,
        bracketApiUrl: null,
        gymApiUrl: null,
        teamApiUrl: null,
        homeNews: [
          { id: 18, isShown: true, title: 'PSA 2018 Spring/Summer Season', postDate: 'Feb. 27, 2018', blurb: 'PSA ushers to 2018 with the Winter/Spring Season', link: '/news?article=psa-spring-summer-2018' },
          { id: 17, isShown: false, title: 'Week 7 Game Schedules Posted', postDate: 'Nov. 22, 2017', blurb: 'Seventh week schedules for the PSA-Edmonton basketball league has been posted', link: '/news?article=week-7-games' },
          { id: 16, isShown: false, title: 'Player Of The Week (Nov. 18 & 19, 2017)', postDate: 'Nov. 22, 2017', blurb: 'Player of the week in PSA-Edmonton\'s 6th week goes to Eagle\'s Jasprit Sanghera...', link: '/news?article=player-of-the-week-6' },
          { id: 15, isShown: false, title: 'Week 6 Game Results Posted', postDate: 'Nov. 22, 2017', blurb: 'Results of the 6th weekend of games have now been posted. Head over to the results page...', link: '/news?article=week-6-games-results' },
          { id: 14, isShown: false, title: 'Week 4 Game Schedules Posted', postDate: 'Nov. 01, 2017', blurb: 'Fourth week schedules for the PSA-Edmonton basketball league has been posted', link: '/news?article=week-4-games' },
          { id: 13, isShown: false, title: 'Player Of The Week (Oct. 28&29, 2017)', postDate: 'Nov. 01, 2017', blurb: 'Player of the week in PSA-Edmonton\'s 3rd week goes to Eswar\'s Deoel Villamor...', link: '/news?article=player-of-the-week-3' },
          { id: 12, isShown: false, title: 'Week 3 Game Results Posted', postDate: 'Nov. 01, 2017', blurb: 'Results of the 2nd weekend of games have now been posted. Head over to the results page...', link: '/news?article=week-3-games-results' },
          { id: 11, isShown: false, title: 'Player Of The Week (Oct. 21&22, 2017)', postDate: 'Oct. 24, 2017', blurb: 'Player of the week in PSA-Edmonton\'s 2nd week goes to Knights\' Virson Orquez...', link: '/news?article=player-of-the-week-2' },
          { id: 10, isShown: false, title: 'Week 3 Game Schedules Posted', postDate: 'Oct. 24, 2017', blurb: 'Third  week schedules for the PSA-Edmonton basketball league has been posted.', link: '/news?article=week-3-games' },
          { id: 9, isShown: false, title: 'Week 2 Game Results Posted', postDate: 'Oct. 24, 2017', blurb: 'Results of the 2nd weekend of games have now been posted. Head over to the results page...', link: '/news?article=week-2-games-results' },
          { id: 8, isShown: false, title: 'Week 2 Games Posted', postDate: 'Oct. 17, 2017', blurb: 'Second week schedules for the PSA-Edmonton basketball league has been posted.', link: '/news?article=week-2-games' },
          { id: 7, isShown: false, title: 'Player Of The Week (Oct. 14&15, 2017)', postDate: 'Oct. 16, 2017', blurb: 'Player of the week in PSA-Edmonton\'s inaugural week goes to Akatsuki\'s Nico Yola...', link: '/news?article=player-of-the-week-1' },
          { id: 6, isShown: false, title: 'Successful League Opening Weekend', postDate: 'Oct. 16, 2017', blurb: 'PSA-Edmonton started the Fall/Winter Season with a bang by fielding 22 games over the weekend...', link: '/news?article=league-opening-weekend-2017' }
        ],
        upcomingGameDates: [],
        upcomingGames: [],
        gameDates: []
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
      },

      getApiUrl () {
        var a = this
        a.dataLoading = true
        a.gameApiUrl = config.gameApiUrl()
        a.gameDateApiUrl = config.gameDateApiUrl()
        a.bracketApiUrl = config.bracketApiUrl()
        a.gymApiUrl = config.gymApiUrl()
        a.teamApiUrl = config.teamApiUrl()
      },

      getUpcomingGameDates () {
        var a = this
        axios.get(a.gameDateApiUrl + '/upcominggamedates').then((response) => {
          a.upcomingGameDates = response.data
        }, (err) => {
          console.log(err)
        })
      },

      getUpcomingGames () {
        var a = this
        axios.get(a.gameApiUrl + '/upcominggames').then((response) => {
          a.upcomingGames = response.data
          a.dataLoading = false
        }, (err) => {
          console.log(err)
        })
      },

      filterGamesByGameDate (gdId) {
        var a = this
        return a.upcomingGames.filter(function (upcomingGame) {
          return upcomingGame.GameDateId === gdId
        })
      },

      filterNewsItem (newsItems) {
        return newsItems.filter(function (newsItem) {
          return newsItem.isShown
        })
      },

      convertDateStringToWord (datestring) {
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        var d = new Date(datestring)
        var dayName = days[d.getDay()]

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var tempDate = datestring.split('-')
        return dayName + ', ' + tempDate[2] + ' ' + months[Number(tempDate[1]) - 1] + ' ' + tempDate[0]
      }
    },

    mounted () {
      var a = this
      a.getApiUrl()
      a.getUpcomingGameDates()
      a.getUpcomingGames()

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
