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
              id: 1, gameDate: '2017-10-21', gameTime: '8:00 AM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Warriors', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Cavaliers', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 2, gameDate: '2017-10-21', gameTime: '9:20 AM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Clippers', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Lakers', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 3, gameDate: '2017-10-21', gameTime: '10:40 AM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Thunder', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Knicks', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 4, gameDate: '2017-10-21', gameTime: '12:00 PM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Wizards', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Pacers', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 5, gameDate: '2017-10-21', gameTime: '1:20 PM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Magic', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Mavericks', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 6, gameDate: '2017-10-21', gameTime: '2:40 PM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Grizzlies', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Hornets', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 7, gameDate: '2017-10-21', gameTime: '4:00 PM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Bulls', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Timberwolves', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
            },
            {
              id: 8, gameDate: '2017-10-21', gameTime: '5:20 PM', gameDay: 'Saturday', division: 'NBA', homeTeam: 'Kings', homeTeamScore: 0, homeTeamWin: false, awayTeam: 'Nets', awayTeamScore: 0, awayTeamWin: false, isGameDone: false, gymShortName: 'Troy'
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
