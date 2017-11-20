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


          <!--
          <div class="row">
            <h4>{{ satSchedule.title }} {{ satSchedule.subTitle }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in satSchedule.data" :key="u.id">
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
            <h4>{{ sunSchedule1.title }} {{ sunSchedule1.subTitle }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunSchedule1.data" :key="u.id">
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
            <h4>{{ sunSchedule2.title }} {{ sunSchedule2.subTitle }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunSchedule2.data" :key="u.id">
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
          -->

        </div>

        <hr />

        <!-- Latest Results -->
        <div class="container-fluid">
          <h3>
            Latest Results
          </h3>
          <p>
            Results of Most Recent Games. Click <a href="#/results">here</a> to view all other game results.
          </p>

          <!--

          <div class="container-fluid">
            <h4>{{ satGameResults.title }} {{ satGameResults.subTitle}}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in satGameResults.data" :key="u.id">
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
            <h4>{{ sunGameResults1.title }} {{ sunGameResults1.subTitle }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunGameResults1.data" :key="u.id">
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
            <h4>{{ sunGameResults2.title }} {{ sunGameResults2.subTitle }}</h4>
            <div class="col-md-4 col-sm-12" v-for="u in sunGameResults2.data" :key="u.id">
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
          -->
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
          { id: 14, isShown: true, title: 'Week 4 Game Schedules Posted', postDate: 'Nov. 01, 2017', blurb: 'Fourth week schedules for the PSA-Edmonton basketball league has been posted', link: '/news?article=week-4-games' },
          { id: 13, isShown: true, title: 'Player Of The Week (Oct. 28&29, 2017)', postDate: 'Nov. 01, 2017', blurb: 'Player of the week in PSA-Edmonton\'s 3rd week goes to Eswar\'s Deoel Villamor...', link: '/news?article=player-of-the-week-3' },
          { id: 12, isShown: true, title: 'Week 3 Game Results Posted', postDate: 'Nov. 01, 2017', blurb: 'Results of the 2nd weekend of games have now been posted. Head over to the results page...', link: '/news?article=week-3-games-results' },
          { id: 11, isShown: false, title: 'Player Of The Week (Oct. 21&22, 2017)', postDate: 'Oct. 24, 2017', blurb: 'Player of the week in PSA-Edmonton\'s 2nd week goes to Knights\' Virson Orquez...', link: '/news?article=player-of-the-week-2' },
          { id: 10, isShown: false, title: 'Week 3 Game Schedules Posted', postDate: 'Oct. 24, 2017', blurb: 'Third  week schedules for the PSA-Edmonton basketball league has been posted.', link: '/news?article=week-3-games' },
          { id: 9, isShown: false, title: 'Week 2 Game Results Posted', postDate: 'Oct. 24, 2017', blurb: 'Results of the 2nd weekend of games have now been posted. Head over to the results page...', link: '/news?article=week-2-games-results' },
          { id: 8, isShown: false, title: 'Week 2 Games Posted', postDate: 'Oct. 17, 2017', blurb: 'Second week schedules for the PSA-Edmonton basketball league has been posted.', link: '/news?article=week-2-games' },
          { id: 7, isShown: false, title: 'Player Of The Week (Oct. 14&15, 2017)', postDate: 'Oct. 16, 2017', blurb: 'Player of the week in PSA-Edmonton\'s inaugural week goes to Akatsuki\'s Nico Yola...', link: '/news?article=player-of-the-week-1' },
          { id: 6, isShown: false, title: 'Successful League Opening Weekend', postDate: 'Oct. 16, 2017', blurb: 'PSA-Edmonton started the Fall/Winter Season with a bang by fielding 22 games over the weekend...', link: '/news?article=league-opening-weekend-2017' }
        ],
        upcomingGameDates: [],
        upcomingGames: [],

        gameDates: [],

        satGameResults: {
          title: 'Saturday, October 28, 2017',
          subTitle: '@Father Troy Gym',
          data: [
            {
              id: 1,
              gameDate: '2017-10-28',
              gameTime: '8:00 AM',
              gameDay: 'Saturday',
              division: 'Open Division II-C',
              homeTeam: 'La Derma',
              homeTeamScore: 87,
              homeTeamWin: true,
              awayTeam: 'Spectrum G-Dios',
              awayTeamScore: 62,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: 'M. Nidoy of La Derma poured in 35 pts.'
            },
            {
              id: 2,
              gameDate: '2017-10-28',
              gameTime: '9:20 AM',
              gameDay: 'Saturday',
              division: 'Master Division B',
              homeTeam: 'SBP',
              homeTeamScore: 69,
              homeTeamWin: false,
              awayTeam: 'Millwoods Warriors',
              awayTeamScore: 101,
              awayTeamWin: true,
              gymShortName: 'Troy',
              gameNotes: 'J. Aguilon of Millwoods Warriors lead with 23 pts.'
            },
            {
              id: 3,
              gameDate: '2017-10-28',
              gameTime: '10:40 AM',
              gameDay: 'Saturday',
              division: 'Open Division I',
              homeTeam: 'Pinoy Auto Loans',
              homeTeamScore: 108,
              homeTeamWin: true,
              awayTeam: 'PSA',
              awayTeamScore: 84,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: 'AJ Mapa had 26 pts in the blowout win.'
            },
            {
              id: 4,
              gameDate: '2017-10-28',
              gameTime: '12:00 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Hanjan',
              homeTeamScore: 102,
              homeTeamWin: true,
              awayTeam: 'Industrial Athlete',
              awayTeamScore: 99,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: 'Gerome Mejia paced Hanjan w/24 pts in the OT thriller.'
            },
            {
              id: 5,
              gameDate: '2017-10-28',
              gameTime: '1:20 PM',
              gameDay: 'Saturday',
              division: 'Master Division A',
              homeTeam: 'First Canadian',
              homeTeamScore: 79,
              homeTeamWin: false,
              awayTeam: 'Golden Bucks',
              awayTeamScore: 102,
              awayTeamWin: true,
              gymShortName: 'Troy',
              gameNotes: 'Piodo lead Golden Bucks with 30 pts.'
            },
            {
              id: 7,
              gameDate: '2017-10-28',
              gameTime: '2:40 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Batangas Pride',
              homeTeamScore: 66,
              homeTeamWin: true,
              awayTeam: 'Cancom',
              awayTeamScore: 64,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: 'J. Magdaong of Batangas Pride scored 22 pts in a close game.'
            },
            {
              id: 8,
              gameDate: '2017-10-28',
              gameTime: '4:00 PM',
              gameDay: 'Saturday',
              division: 'Master Division B',
              homeTeam: 'AMDG',
              homeTeamScore: 83,
              homeTeamWin: true,
              awayTeam: 'CLG Display',
              awayTeamScore: 78,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: 'A. Vitale poured 19 pts for AMDG'
            },
            {
              id: 9,
              gameDate: '2017-10-28',
              gameTime: '5:20 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-A',
              homeTeam: 'Alberta Medical Supplies',
              homeTeamScore: 83,
              homeTeamWin: false,
              awayTeam: 'Eswar',
              awayTeamScore: 88,
              awayTeamWin: true,
              gymShortName: 'Troy',
              gameNotes: 'D. Villamor had 42 pts (w/6 3-pointers) for the Eswar win.'
            }
          ]
        },

        sunGameResults1: {
          title: 'Sunday, October 22, 2017',
          subTitle: '@Oscar Romero Gym',
          data: [
            { id: 11, gameDate: '2017-10-22', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Pinoy Auto Loans', homeTeamScore: 89, homeTeamWin: true, awayTeam: 'CLG Display', awayTeamScore: 78, awayTeamWin: false, gymShortName: 'Romero', gameNotes: 'E. Orquez lead Pinoy Auto Loans with 16 pts.' },
            { id: 12, gameDate: '2017-10-22', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Crosstown Auto', homeTeamScore: 110, homeTeamWin: true, awayTeam: 'Amirax Wolverines', awayTeamScore: 79, awayTeamWin: false, gymShortName: 'Romero', gameNotes: 'M. Dorado paced Crosstown with 23 pts.' },
            { id: 13, gameDate: '2017-10-22', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Edmonton Eagles', homeTeamScore: 74, homeTeamWin: true, awayTeam: 'Full Force', awayTeamScore: 64, awayTeamWin: false, gymShortName: 'Romero', gameNotes: 'Sanghera poured 20 points for the Eagles.' },
            { id: 14, gameDate: '2017-10-22', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Golden Bucks', homeTeamScore: 63, homeTeamWin: false, awayTeam: 'H & B Master', awayTeamScore: 69, awayTeamWin: true, gymShortName: 'Romero', gameNotes: 'E. Luis pumped 16 pts. for H & B.' },
            { id: 15, gameDate: '2017-10-22', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Team Rolly', homeTeamScore: 74, homeTeamWin: true, awayTeam: 'Cancom', awayTeamScore: 62, awayTeamWin: false, gymShortName: 'Romero', gameNotes: 'R. Villarosa scored 17 pts for the win.' },
            { id: 16, gameDate: '2017-10-22', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Team Pahirapan', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Gallery Dental', awayTeamScore: 68, awayTeamWin: true, gymShortName: 'Romero', gameNotes: 'F. Gonzales lead a balanced attack with 13 pts.' },
            { id: 17, gameDate: '2017-10-22', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Big Baller', homeTeamScore: 69, homeTeamWin: false, awayTeam: 'Akatsuki', awayTeamScore: 80, awayTeamWin: false, gymShortName: 'Romero', gameNotes: 'N. Yola lead Akatsuki with 22 pts.' }
          ]
        },

        sunGameResults2: {
          title: 'Sunday, October 22, 2017',
          subTitle: '@Holy Trinity Gym',
          data: [
            { id: 18, gameDate: '2017-10-22', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Huskies', homeTeamScore: 85, homeTeamWin: true, awayTeam: 'PSA Free Agents', awayTeamScore: 74, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'M. Reyes scored 20 pts.' },
            { id: 19, gameDate: '2017-10-22', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Millwoods Warriors', homeTeamScore: 77, homeTeamWin: true, awayTeam: 'Barako', awayTeamScore: 76, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Hemilo scored 21 pts for Millwoods' },
            { id: 20, gameDate: '2017-10-22', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Cameron Homes', homeTeamScore: 110, homeTeamWin: false, awayTeam: 'Team Morinville', awayTeamScore: 114, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'De Jesus lead all scorers for Morinville with 40 pts.' },
            { id: 21, gameDate: '2017-10-22', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Team Manash', homeTeamScore: 65, homeTeamWin: false, awayTeam: 'Prestige Vision', awayTeamScore: 82, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'Tabaldo capped a balanced attack with 13 pts for Prestige.' },
            { id: 22, gameDate: '2017-10-22', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Barako Boba Island', homeTeamScore: 102, homeTeamWin: true, awayTeam: 'Hotshots', awayTeamScore: 65, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Player #0 of Boba Island scored 21 pts.' },
            { id: 23, gameDate: '2017-10-22', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Phenoms', homeTeamScore: 71, homeTeamWin: false, awayTeam: 'La Derma', awayTeamScore: 85, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'M. Nidoy scored 15 pts for La Derma' },
            { id: 24, gameDate: '2017-10-22', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Amirax Terror Squad', homeTeamScore: 108, homeTeamWin: true, awayTeam: 'Alberta Medical Supplies', awayTeamScore: 85, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Itliong lead Amirax with 21 pts.' }
          ]
        }
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
