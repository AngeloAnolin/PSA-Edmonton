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

          <div class="col-md-4 col-sm-12" v-for="hn in homeNews" :key="hn.id">
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
            Upcoming Schedules
          </h3>
          <p>
            Games schedule this coming weekend
          </p>

          <div class="row" v-if="false">
            <div class="alert alert-danger">
              <span>
                Schedules will be posted as soon as they are available...
              </span>
            </div>
          </div>

          <div class="row">
            <h4>Saturday, October 21, 2017 @ Father Troy</h4>
            <div class="col-md-4 col-sm-12" v-for="u in upcomingSatGames" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-danger"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>{{ u.homeTeam }}</h5>
                      vs
                      <h5>{{ u.awayTeam }}</h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameTime}} at {{ u.gymShortName }}
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <h4>Sunday, October 15, 2017 @ Oscar Romero</h4>
            <div class="col-md-4 col-sm-12" v-for="u in upcomingSunGames1" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-danger"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>{{ u.homeTeam }}</h5>
                      vs
                      <h5>{{ u.awayTeam }}</h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameTime}} at {{ u.gymShortName }}
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <h4>Sunday, October 15, 2017 @ Holy Trinity</h4>
            <div class="col-md-4 col-sm-12" v-for="u in upcomingSunGames2" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-danger"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>{{ u.homeTeam }}</h5>
                      vs
                      <h5>{{ u.awayTeam }}</h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameTime}} at {{ u.gymShortName }}
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
            Results of Most Recent Games 
          </p>

          <div class="container-fluid">
            <h4>Saturday, October 14, 2017 @ Father Troy</h4>
            <div class="col-md-4 col-sm-12" v-for="u in satGameResults" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-success"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>
                        {{ u.homeTeam }} - {{ u.homeTeamScore }}
                        <span v-if="u.homeTeamWin">(W)</span>
                        <span v-if="u.awayTeamWin">(L)</span>
                      </h5>
                      vs
                      <h5>
                        {{ u.awayTeam }} - {{ u.awayTeamScore }}
                        <span v-if="u.awayTeamWin">(W)</span>
                        <span v-if="u.homeTeamWin">(L)</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameNotes }}
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <div class="container-fluid">
            <h4>Sunday, October 15, 2017 @ Oscar Romero</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunGameResults1" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-success"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>
                        {{ u.homeTeam }} - {{ u.homeTeamScore }}
                        <span v-if="u.homeTeamWin">(W)</span>
                        <span v-if="u.awayTeamWin">(L)</span>
                      </h5>
                      vs
                      <h5>
                        {{ u.awayTeam }} - {{ u.awayTeamScore }}
                        <span v-if="u.awayTeamWin">(W)</span>
                        <span v-if="u.homeTeamWin">(L)</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameNotes }}
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          <div class="container-fluid">
            <h4>Sunday, October 15, 2017 @ Trinity</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunGameResults2" :key="u.id">
              <div class="card">
                <div class="header">
                  {{ u.division }}
                </div>
                <div class="content">
                  <div class="row">
                    <div class="col-xs-4">
                      <div class="icon-big text-center icon-success"><i class="fa fa-dribbble"></i></div>
                    </div>
                    <div class="col-xs-8">
                      <h5>
                        {{ u.homeTeam }} - {{ u.homeTeamScore }}
                        <span v-if="u.homeTeamWin">(W)</span>
                        <span v-if="u.awayTeamWin">(L)</span>
                      </h5>
                      vs
                      <h5>
                        {{ u.awayTeam }} - {{ u.awayTeamScore }}
                        <span v-if="u.awayTeamWin">(W)</span>
                        <span v-if="u.homeTeamWin">(L)</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="footer text-right">
                  <hr> 
                  <div class="stats">
                    {{ u.gameNotes }}
                    &nbsp; &nbsp;
                  </div>
                </div>
              </div>
            </div>

            
          </div>
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
  export default {
    data () {
      return {
        divSlide1: 'slide-1',
        divSlide2: 'slide-2',
        divSlide3: 'slide-3',
        slidesCount: 3,
        currentSlide: 1,
        slide1Active: false,
        homeNews: [
          { id: 8, title: 'Week 2 Games Posted', postDate: 'Oct. 17, 2017', blurb: 'Second week schedules for the PSA-Edmonton basketball league has been posted.', link: '/news?article=week-2-games' },
          { id: 7, title: 'Player Of The Week (Oct. 14&15, 2017)', postDate: 'Oct. 16, 2017', blurb: 'Player of the week in PSA-Edmonton\'s inaugural week goes to Akatsuki\'s Nico Yola...', link: '/news?article=player-of-the-week-1' },
          { id: 6, title: 'Successful League Opening Weekend', postDate: 'Oct. 16, 2017', blurb: 'PSA-Edmonton started the Fall/Winter Season with a bang by fielding 22 games over the weekend...', link: '/news?article=league-opening-weekend-2017' }
        ],

        satGameResults: [
          {
            id: 1, gameDate: '2017-10-14', gameTime: '8:00 AM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Big Ballers', homeTeamScore: 103, homeTeamWin: true, awayTeam: 'Leduc Warriors', awayTeamScore: 98, awayTeamWin: false, isGameDone: true, gymShortName: 'Troy', gameNotes: 'Player of the Game: Raf Guce with 34 pts.'
          },
          {
            id: 2, gameDate: '2017-10-14', gameTime: '9:20 AM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Hotshots', homeTeamScore: 61, homeTeamWin: false, awayTeam: 'Changes For Hope', awayTeamScore: 104, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Mikee Canasa paced Changes for Hope with 24 pts.'
          },
          {
            id: 3, gameDate: '2017-10-14', gameTime: '10:40 AM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'AMDG', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Gallery Dental', awayTeamScore: 85, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'James Paroginog lead a balanced attack for Gallery Dental with 15pts.'
          },
          {
            id: 4, gameDate: '2017-10-14', gameTime: '12:00 PM', gameDay: 'Saturday', division: 'Open Division II-C', homeTeam: 'Huskies', homeTeamScore: 82, homeTeamWin: false, awayTeam: 'Spectrum G-Dios', awayTeamScore: 93, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'J. Marantan lead Spectrum with 25 pts.'
          },
          {
            id: 5, gameDate: '2017-10-14', gameTime: '1:20 PM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'SBP', homeTeamScore: 67, homeTeamWin: false, awayTeam: 'Barako', awayTeamScore: 74, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Marlon lead Barako with 37 pts on 8 made 3pt FGs.'
          },
          {
            id: 6, gameDate: '2017-10-14', gameTime: '2:40 PM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Eswar', homeTeamScore: 94, homeTeamWin: false, awayTeam: 'Akatsuki', awayTeamScore: 96, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Nico Yola had a season high 55 pts to lead Akatsuki'
          },
          {
            id: 7, gameDate: '2017-10-14', gameTime: '4:00 PM', gameDay: 'Saturday', division: 'Master Division A', homeTeam: 'First Canadian', homeTeamScore: 69, homeTeamWin: false, awayTeam: 'Amirax Wolverines', awayTeamScore: 106, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'MJ  Daquioag 32pts with 7 3pt FGs made'
          },
          {
            id: 8, gameDate: '2017-10-14', gameTime: '5:20 PM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Batangas Pride', homeTeamScore: 63, homeTeamWin: false, awayTeam: 'Team Rolly', awayTeamScore: 68, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Player #7 of Team Rolly with 29 points.'
          }
        ],

        sunGameResults1: [
          {
            id: 9, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Pinoy Auto Loans', homeTeamScore: 82, homeTeamWin: true, awayTeam: 'Millwoods Warriors', awayTeamScore: 79, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Bembot Musa lead Pinoy Auto Loans with 24 pts.'
          },
          {
            id: 10, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Crosstown Auto', homeTeamScore: 76, homeTeamWin: false, awayTeam: 'Luzviminda', awayTeamScore: 77, awayTeamWin: true, isGameDone: false, gymShortName: 'Romero', gameNotes: 'J. Roguel scored 20 pts.'
          },
          {
            id: 11, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Edmonton Eagles', homeTeamScore: 68, homeTeamWin: false, awayTeam: 'H & B', awayTeamScore: 74, awayTeamWin: true, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Floyd Eyao topscored for the H & B with 31 pts.'
          },
          {
            id: 12, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'La Derma', homeTeamScore: 67, homeTeamWin: true, awayTeam: 'Bolero', awayTeamScore: 62, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Alvin Corpuz lead a balanced attack for La Derma with 12 pts.'
          },
          {
            id: 13, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Barako Boba Island', homeTeamScore: 67, homeTeamWin: true, awayTeam: 'Hanjan', awayTeamScore: 63, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Jayson Castillo topscored for Boba Island with 17 pts.'
          },
          {
            id: 14, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Cancom', homeTeamScore: 69, homeTeamWin: true, awayTeam: 'Industrial Athlete', awayTeamScore: 65, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Ron Montealegre lead Cancom with 19 pts.'
          },
          {
            id: 15, gameDate: '2017-10-15', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'H & B Master', homeTeamScore: 89, homeTeamWin: true, awayTeam: 'Team Manash', awayTeamScore: 82, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'OT win for H&B lead by #9\'s 25 pts.'
          }
        ],

        sunGameResults2: [
          {
            id: 15, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Team Pahirapan', homeTeamScore: 79, homeTeamWin: false, awayTeam: 'CLG Display', awayTeamScore: 80, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Jeff Dalit of CLG Display pumped 24 pts in tight match'
          },
          {
            id: 16, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'PSA Free Agents', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Cameron Homes', awayTeamScore: 123, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Cameron Heights blow-out win was lead by Ivan Balala\'s 21 pts.'
          },
          {
            id: 17, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Prestige Vision', homeTeamScore: 75, homeTeamWin: true, awayTeam: 'Golden Bucks', awayTeamScore: 62, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Joe Simon paced Prestige Vision with 23 pts.'
          },
          {
            id: 18, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Phenoms', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Team Morinville', awayTeamScore: 86, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Player #21 from Team Morinville scored 21 pts.'
          },
          {
            id: 19, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Amirax Terror Squad', homeTeamScore: 86, homeTeamWin: true, awayTeam: 'Full Force', awayTeamScore: 65, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Dondon Tagufa lead Amirax with 24 pts.'
          },
          {
            id: 20, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Akatsuki', homeTeamScore: 67, homeTeamWin: false, awayTeam: 'Alberta Medical Supplies', awayTeamScore: 77, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Samson King lead Alberta Medical Supplies (Genesis) with 19 pts.'
          },
          {
            id: 21, gameDate: '2017-10-15', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Open Division I', homeTeam: 'Knights', homeTeamScore: 90, homeTeamWin: true, awayTeam: 'Crooks', awayTeamScore: 71, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Virson Orquez lead Knights with 31 pts.'
          }
        ],

        upcomingSatGames: [
          {
            id: 1,
            gameDate: '2017-10-21',
            gameTime: '8:00 AM',
            gameDay: 'Saturday',
            division: 'Master Div A',
            homeTeam: 'Luzviminda',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'First Canadian',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 2,
            gameDate: '2017-10-21',
            gameTime: '9:20 AM',
            gameDay: 'Saturday',
            division: 'Open Division II-C',
            homeTeam: 'Spectrum G-Dios',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Bolero',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 3,
            gameDate: '2017-10-21',
            gameTime: '10:40 AM',
            gameDay: 'Saturday',
            division: 'Master Div B',
            homeTeam: 'SBP',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'AMDG',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 4,
            gameDate: '2017-10-21',
            gameTime: '12:00 PM',
            gameDay: 'Saturday',
            division: 'Open Division II-A',
            homeTeam: 'Edmonton Eagles',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Eswar',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 5,
            gameDate: '2017-10-21',
            gameTime: '1:20 PM',
            gameDay: 'Saturday',
            division: 'Open Division II-A',
            homeTeam: 'H & B Open',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Leduc Warriors',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 7,
            gameDate: '2017-10-21',
            gameTime: '2:40 PM',
            gameDay: 'Saturday',
            division: 'Open Division II-B',
            homeTeam: 'Changes for Hope',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Industrial Athlete',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 8,
            gameDate: '2017-10-21',
            gameTime: '4:00 PM',
            gameDay: 'Saturday',
            division: 'Open Division I',
            homeTeam: 'Pinoy Auto Loans',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Crooks',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 9,
            gameDate: '2017-10-21',
            gameTime: '5:20 PM',
            gameDay: 'Saturday',
            division: 'Open Division I',
            homeTeam: 'PSA',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Knights',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          },
          {
            id: 10,
            gameDate: '2017-10-21',
            gameTime: '6:40 PM',
            gameDay: 'Saturday',
            division: 'Open Division II-B',
            homeTeam: 'Batangas Pride',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Hanjan',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Troy',
            gameNotes: ''
          }
        ],

        upcomingSunGames1: [
          {
            id: 11,
            gameDate: '2017-10-22',
            gameTime: '8:00 AM',
            gameDay: 'Sunday',
            division: 'Master Division B',
            homeTeam: 'Pinoy Auto Loans',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'CLG Display',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 12,
            gameDate: '2017-10-22',
            gameTime: '9:20 AM',
            gameDay: 'Sunday',
            division: 'Master Division A',
            homeTeam: 'Crosstown Auto',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Amirax Wolverines',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 13,
            gameDate: '2017-10-22',
            gameTime: '10:40 AM',
            gameDay: 'Sunday',
            division: 'Open Division II-A',
            homeTeam: 'Edmonton Eagles',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Full Force',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 14,
            gameDate: '2017-10-22',
            gameTime: '12:00 PM',
            gameDay: 'Sunday',
            division: 'Master Division A',
            homeTeam: 'Golden Bucks',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'H & B Master',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 15,
            gameDate: '2017-10-22',
            gameTime: '1:20 PM',
            gameDay: 'Sunday',
            division: 'Open Division II-B',
            homeTeam: 'Team Rolly',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Cancom',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 16,
            gameDate: '2017-10-22',
            gameTime: '2:40 PM',
            gameDay: 'Sunday',
            division: 'Master Division B',
            homeTeam: 'Team Pahirapan',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Gallery Dental',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          },
          {
            id: 17,
            gameDate: '2017-10-22',
            gameTime: '4:00 PM',
            gameDay: 'Sunday',
            division: 'Open Division II-A',
            homeTeam: 'Big Baller',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Akatsuki',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Romero',
            gameNotes: ''
          }
        ],

        upcomingSunGames2: [
          {
            id: 18,
            gameDate: '2017-10-22',
            gameTime: '8:00 AM',
            gameDay: 'Sunday',
            division: 'Open Division II-C',
            homeTeam: 'Huskies',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'PSA Free Agents',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 19,
            gameDate: '2017-10-22',
            gameTime: '9:20 AM',
            gameDay: 'Sunday',
            division: 'Master Division B',
            homeTeam: 'Millwoods Warriors',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Barako',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 20,
            gameDate: '2017-10-22',
            gameTime: '10:40 AM',
            gameDay: 'Sunday',
            division: 'Open Division II-C',
            homeTeam: 'Cameron Homes',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Team Morinville',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 21,
            gameDate: '2017-10-22',
            gameTime: '12:00 PM',
            gameDay: 'Sunday',
            division: 'Master Division A',
            homeTeam: 'Team Manash',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Prestige Vision',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 22,
            gameDate: '2017-10-22',
            gameTime: '1:20 PM',
            gameDay: 'Sunday',
            division: 'Open Division II-B',
            homeTeam: 'Barako Boba Island',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Hotshots',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 23,
            gameDate: '2017-10-22',
            gameTime: '2:40 PM',
            gameDay: 'Sunday',
            division: 'Open Division II-C',
            homeTeam: 'Phenoms',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'La Derma',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          },
          {
            id: 24,
            gameDate: '2017-10-22',
            gameTime: '4:00 PM',
            gameDay: 'Sunday',
            division: 'Open Division II-A',
            homeTeam: 'Amirax Terror Squad',
            homeTeamScore: null,
            homeTeamWin: false,
            awayTeam: 'Alberta Medical Supplies',
            awayTeamScore: null,
            awayTeamWin: false,
            gymShortName: 'Trinity',
            gameNotes: ''
          }
        ]
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
