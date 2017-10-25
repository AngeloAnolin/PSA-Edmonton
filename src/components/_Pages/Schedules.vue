<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <p>
          Note: Game schedules will be posted as soon as they are available.
        </p>

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
  import AppTable from 'components/_Plugins/Table.vue'

  export default {
    components: {
      AppTable
    },

    data () {
      return {
        satSchedule: {
          title: 'Saturday October 28, 2017',
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
              gameDate: '2017-10-28',
              gameTime: '8:00 AM',
              gameDay: 'Saturday',
              division: 'Open Division II-C',
              homeTeam: 'La Derma',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Spectrum G-Dios',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 2,
              gameDate: '2017-10-28',
              gameTime: '9:20 AM',
              gameDay: 'Saturday',
              division: 'Master Division B',
              homeTeam: 'SBP',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Millwoods Warriors',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 3,
              gameDate: '2017-10-28',
              gameTime: '10:40 AM',
              gameDay: 'Saturday',
              division: 'Open Division I',
              homeTeam: 'Pinoy Auto Loans',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'PSA',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 4,
              gameDate: '2017-10-28',
              gameTime: '12:00 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Hanjan',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Industrial Athlete',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 5,
              gameDate: '2017-10-28',
              gameTime: '1:20 PM',
              gameDay: 'Saturday',
              division: 'Master Division A',
              homeTeam: 'First Canadian',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Golden Bucks',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 7,
              gameDate: '2017-10-28',
              gameTime: '2:40 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-B',
              homeTeam: 'Batangas Pride',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Cancom',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 8,
              gameDate: '2017-10-28',
              gameTime: '4:00 PM',
              gameDay: 'Saturday',
              division: 'Master Division B',
              homeTeam: 'AMDG',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'CLG Display',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            },
            {
              id: 9,
              gameDate: '2017-10-28',
              gameTime: '5:20 PM',
              gameDay: 'Saturday',
              division: 'Open Division II-A',
              homeTeam: 'Alberta Medical Supplies',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Eswar',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Troy',
              gameNotes: ''
            }
          ]
        },

        sunSchedule1: {
          title: 'Sunday October 29, 2017',
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
              id: 11,
              gameDate: '2017-10-29',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Pinoy Auto Loans',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Gallery Dental',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 12,
              gameDate: '2017-10-29',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Crosstown Auto',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Prestige Vision',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 13,
              gameDate: '2017-10-29',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Edmonton Eagles',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Leduc Warriors',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 14,
              gameDate: '2017-10-29',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'H & B Open',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Alberta Medical Supplies',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 15,
              gameDate: '2017-10-29',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'H & B Master',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Luzviminda',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 16,
              gameDate: '2017-10-29',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-B',
              homeTeam: 'Team Rolly',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Hotshots',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            },
            {
              id: 17,
              gameDate: '2017-10-29',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Bolero',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Phenoms',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: ''
            }
          ]
        },

        sunSchedule2: {
          title: 'Sunday October 29, 2017',
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
              gameDate: '2017-10-29',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Huskies',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Cameron Homes',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 19,
              gameDate: '2017-10-29',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Big Baller',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Full Force',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 20,
              gameDate: '2017-10-29',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'PSA Free Agents',
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
              gameDate: '2017-10-29',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Barako',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Team Pahirapan',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 22,
              gameDate: '2017-10-29',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-B',
              homeTeam: 'Changes for Hope',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Barako Boba Island',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 23,
              gameDate: '2017-10-29',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Amirax Wolverines',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Team Manash',
              awayTeamScore: null,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: ''
            },
            {
              id: 24,
              gameDate: '2017-10-29',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Amirax Terror Squad',
              homeTeamScore: null,
              homeTeamWin: false,
              awayTeam: 'Akatsuki',
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
      convertDateStringToWord (datestring) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var tempDate = datestring.split('-')
        return tempDate[2] + ' ' + months[Number(tempDate[1]) - 1] + ' ' + tempDate[0]
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
</style>
