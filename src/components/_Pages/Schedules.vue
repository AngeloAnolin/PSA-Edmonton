<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <p>
          Note: Game schedules will be posted as soon as they are available.
        </p>

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
        <div class="col-md-12 visible-md visible-lg">
          <app-table :title="satSchedule.title" :sub-title="satSchedule.subTitle" :data="satSchedule.data" :columns="satSchedule.columns">
          </app-table>
        </div>

        <div class="col-md-12 visible-md visible-lg">
          <app-table :title="sunSchedule1.title" :sub-title="sunSchedule1.subTitle" :data="sunSchedule1.data" :columns="sunSchedule1.columns">
          </app-table>
        </div>

        <div class="col-md-12 visible-md visible-lg">
          <app-table :title="sunSchedule2.title" :sub-title="sunSchedule2.subTitle" :data="sunSchedule2.data" :columns="sunSchedule2.columns">
          </app-table>
        </div>
        -->

        <div class="list-group visible-sm visible-xs">
          <h4>{{ satSchedule.title }}</h4>
          <h5>{{ satSchedule.subTitle }}</h5>
          <div v-for="a in satSchedule.data" :key="a.id" class="list-group-item">
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} <small>vs</small> {{ a.awayTeam }}
            </h5>
            <p class="list-group-item-text">
              {{ a.gameTime }}
            </p>
            <p class="list-group-item-text">
              {{ a.division}}
            </p>
          </div>
        </div>

        <div class="list-group visible-sm visible-xs">
          <h4>{{sunSchedule1.title}}</h4>
          <h5>{{ sunSchedule1.subTitle }}</h5>
          <div v-for="a in sunSchedule1.data" :key="a.id" class="list-group-item">
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} <small>vs</small> {{ a.awayTeam }}
            </h5>
            <p class="list-group-item-text">
              {{ a.gameTime }}
            </p>
            <p class="list-group-item-text">
              {{ a.division}}
            </p>
          </div>
        </div>

        <div class="list-group visible-sm visible-xs">
          <h4>{{sunSchedule2.title}}</h4>
          <h5>{{ sunSchedule2.subTitle }}</h5>
          <div v-for="a in sunSchedule2.data" :key="a.id" class="list-group-item">
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} <small>vs</small> {{ a.awayTeam }}
            </h5>
            <p class="list-group-item-text">
              {{ a.gameTime }}
            </p>
            <p class="list-group-item-text">
              {{ a.division}}
            </p>
          </div>
        </div>

        <div class="col-md-12" v-if="satSchedule.data.length < 1">
          <div class="alert alert-warning">
            <span>
              No Upcoming Game Schedule...
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from 'src/config'
  import AppTable from 'components/_Plugins/Table.vue'

  export default {
    components: {
      AppTable
    },

    data () {
      return {
        gameApiUrl: null,
        gameDateApiUrl: null,
        bracketApiUrl: null,
        gymApiUrl: null,
        teamApiUrl: null,

        upcomingGameDates: [],
        upcomingGames: [],

        satSchedule: {
          title: 'Saturday November 11, 2017',
          subTitle: '@ Father Troy Gym',
          columns: [
            {
              columnName: 'gameTime',
              columnTitle: 'Time',
              columnWidth: '20%'
            },
            {
              columnName: 'division',
              columnTitle: 'Division',
              columnWidth: '30%'
            },
            {
              columnName: 'homeTeam',
              columnTitle: 'Home Team',
              columnWidth: '25%'
            },
            {
              columnName: 'awayTeam',
              columnTitle: 'Away Team',
              columnWidth: '25%'
            }
          ],
          data: [
            {
              id: 1,
              gameDate: '2017-11-11',
              gameTime: '8:00 AM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Hanjan',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Changes for Hope',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 2,
              gameDate: '2017-11-11',
              gameTime: '9:20 AM',
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
              id: 3,
              gameDate: '2017-11-11',
              gameTime: '10:40 AM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Industrial Athlete',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Team Rolly',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 4,
              gameDate: '2017-11-11',
              gameTime: '12:00 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-A',
              homeTeam: 'Bigger Baller',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'H & B Open',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 5,
              gameDate: '2017-11-11',
              gameTime: '1:20 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-C',
              homeTeam: 'Team Morinville',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Huskies',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 6,
              gameDate: '2017-11-11',
              gameTime: '2:40 PM',
              gameDay: 'Saturday',
              division: 'Master Division A',
              homeTeam: 'Luzviminda',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Prestige Vision',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 7,
              gameDate: '2017-11-11',
              gameTime: '4:00 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-A',
              homeTeam: 'Leduc Warriors',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Akatsuki',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 8,
              gameDate: '2017-11-11',
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
              id: 9,
              gameDate: '2017-11-11',
              gameTime: '6:40 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Batangas Pride',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Hotshots',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            }
          ]
        },

        sunSchedule1: {
          title: 'Sunday November 12, 2017',
          subTitle: '@ Oscar Romero Gym',
          columns: [
            {
              columnName: 'gameTime',
              columnTitle: 'Time',
              columnWidth: '20%'
            },
            {
              columnName: 'division',
              columnTitle: 'Division',
              columnWidth: '30%'
            },
            {
              columnName: 'homeTeam',
              columnTitle: 'Home Team',
              columnWidth: '25%'
            },
            {
              columnName: 'awayTeam',
              columnTitle: 'Away Team',
              columnWidth: '25%'
            }
          ],
          data: [
            {
              id: 10,
              gameDate: '2017-11-12',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Pinoy Auto Loans',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Barako',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 11,
              gameDate: '2017-11-12',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Crosstown Auto',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Pinoy Canadian',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 12,
              gameDate: '2017-11-12',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Edmonton Eagles',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Alberta Medical Supplies',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 14,
              gameDate: '2017-11-12',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-B',
              homeTeam: 'Cancom',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Barako Boba Island',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 15,
              gameDate: '2017-11-12',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'AMDG',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Team Pahirapan',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 16,
              gameDate: '2017-11-12',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Millwoods Warriors',
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
              gameDate: '2017-11-12',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Full Force',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Eswar',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            }
          ]
        },

        sunSchedule2: {
          title: 'Sunday November 12, 2017',
          subTitle: '@ Holy Trinity Gym',
          columns: [
            {
              columnName: 'gameTime',
              columnTitle: 'Time',
              columnWidth: '20%'
            },
            {
              columnName: 'division',
              columnTitle: 'Division',
              columnWidth: '30%'
            },
            {
              columnName: 'homeTeam',
              columnTitle: 'Home Team',
              columnWidth: '25%'
            },
            {
              columnName: 'awayTeam',
              columnTitle: 'Away Team',
              columnWidth: '25%'
            }
          ],
          data: [
            {
              id: 18,
              gameDate: '2017-11-12',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'PSA Free Agents',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Bolero',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 19,
              gameDate: '2017-11-12',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Team Manash',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Golden Bucks',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 20,
              gameDate: '2017-11-12',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Spectrum G-Dios',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Phenoms',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 21,
              gameDate: '2017-11-12',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'CLG Display',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'SBP',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 22,
              gameDate: '2017-11-12',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Cameron Homes',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'La Derma',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 23,
              gameDate: '2017-11-12',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Amirax Wolverines',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'H & B Master',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 24,
              gameDate: '2017-11-12',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Bigger Baller',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Amirax Terror Squad',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            }
          ]
        }
      }
    },

    methods: {
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

      convertDateStringToWord (datestring) {
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        var d = new Date(datestring)
        var dayName = days[d.getDay()]

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var tempDate = datestring.split('-')
        return dayName + ', ' + tempDate[2] + ' ' + months[Number(tempDate[1]) - 1] + ' ' + tempDate[0]
      },

      filterGamesByGameDate (gdId) {
        var a = this
        return a.upcomingGames.filter(function (upcomingGame) {
          return upcomingGame.GameDateId === gdId
        })
      }
    },

    mounted: function () {
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
</style>
