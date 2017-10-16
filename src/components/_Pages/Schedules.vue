<template>
  <div>
    <div class="row">
      <div class="container-fluid">
        <p>
          Note: Game schedules will be posted as soon as they are available.
        </p>

        <div class="col-md-12 visible-md visible-lg">
          <app-table :title="scheduleData.title" :sub-title="scheduleData.subTitle" :data="scheduleData.data" :columns="scheduleData.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs">
          <div v-for="a in scheduleData.data" :key="a.id" class="list-group-item">
            <h4 class="list-group-item-heading">
              {{ a.homeTeam }} <small>vs</small> {{ a.awayTeam }}
            </h4>
            <p class="list-group-item-text">
              {{ convertDateStringToWord(a.gameDate) }}
            </p>
            <p class="list-group-item-text">
              {{ a.gameTime }} at {{ a.gymShortName }}
            </p>
            <p class="list-group-item-text">
              Division: {{ a.division}}
            </p>
          </div>
        </div>

        <div class="col-md-12" v-if="scheduleData.data.length < 1">
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
        scheduleData: {
          title: 'Game Schedule',
          subTitle: 'Basketball',
          columns: [
            {
              columnName: 'gameDate',
              columnTitle: 'Date'
            },
            {
              columnName: 'gameTime',
              columnTitle: 'Time'
            },
            {
              columnName: 'gameDay',
              columnTitle: 'Day'
            },
            {
              columnName: 'division',
              columnTitle: 'Division'
            },
            {
              columnName: 'homeTeam',
              columnTitle: 'Home Team'
            },
            {
              columnName: 'awayTeam',
              columnTitle: 'Away Team'
            },
            {
              columnName: 'gymShortName',
              columnTitle: 'Gym'
            }],
          data: [
            {
              id: 1, gameDate: '2017-10-14', gameTime: '8:00 AM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Big Ballers', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Leduc Warriors', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 2, gameDate: '2017-10-14', gameTime: '9:20 AM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Hotshots', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Changes For Hope', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 3, gameDate: '2017-10-14', gameTime: '10:40 AM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'AMDG', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Gallery Dental', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 4, gameDate: '2017-10-14', gameTime: '12:00 PM', gameDay: 'Saturday', division: 'Open Division II-C', homeTeam: 'Huskies', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Spectrum G-Dios', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 5, gameDate: '2017-10-14', gameTime: '1:20 PM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'SBP', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Barako', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 6, gameDate: '2017-10-14', gameTime: '2:40 PM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Eswar', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Akatsuki', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 7, gameDate: '2017-10-14', gameTime: '4:00 PM', gameDay: 'Saturday', division: 'Master Division A', homeTeam: 'First Canadian', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Amirax Wolverines', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 8, gameDate: '2017-10-14', gameTime: '5:20 PM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Batangas Pride', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Team Rolly', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 9, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Pinoy Auto Loans', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Millwoods Warriors', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 10, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Crosstown Auto', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Luzviminda', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 11, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Edmonton Eagles', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'H & B', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 12, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Stellar Wealth', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Bolero', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 13, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Barako Boba Island', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Hanjan', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 14, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Cancom', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Industrial Athlete', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero'
            },
            {
              id: 15, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Team Pahirapan', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'CLG Display', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
            },
            {
              id: 16, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'PSA Free Agents', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Cameron Homes', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
            },
            {
              id: 17, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Prestige Vision', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Golden Bucks', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
            },
            {
              id: 18, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Phenoms', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Team Morinville', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
            },
            {
              id: 19, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Amirax Terror Squad', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Full Force', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
            },
            {
              id: 20, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Akatsuki', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Genesis', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity'
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

<style></style>
