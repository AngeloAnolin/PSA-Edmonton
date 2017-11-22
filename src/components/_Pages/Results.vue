<template>
  <div>
    <div class="row">
      
      <!-- divMainContainer START -->
      <div id="divMainContainer" class="container-fluid">
        <h4>
          Note: Game results are posted as soon as they are available.
          &nbsp;
          <i class="fa fa-spinner fa-spin fa-fw" v-if="dataLoading"></i>
        </h4>

        <div class="col-md-12 visible-md visible-lg" v-for="gr in gameResults" :key="gr.GameCompleteDate">
          <app-table :title="gr.GameCompleteDate" :data="gr.ListGameDto" :columns="gameColumnDefs">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs" v-for="gr in gameResults" :key="gr.GameCompleteDate">
          <h4>{{ gr.GameCompleteDate }}</h4>
          <div v-for="lgd in gr.ListGameDto" :key="lgd.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ lgd.Bracket.BracketName }}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ lgd.HomeTeam.TeamName }} - {{ lgd.HomeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ lgd.AwayTeam.TeamName }} - {{ lgd.AwayTeamScore }}
            </h5>
            <hr />
            <p>
              <i class="fa fa-commenting-o" aria-hidden="true"></i>
              &nbsp;
              {{ lgd.GameNotes }}
            </p>
          </div>
        </div>
      </div>
      <!-- divMainContainer END -->

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
        dataLoading: false,
        gameApiUrl: null,
        gameDateApiUrl: null,
        bracketApiUrl: null,
        gymApiUrl: null,
        teamApiUrl: null,
        gameResults: [],
        gameColumnDefs: [
          { columnName: 'ScheduleTime', columnTitle: 'Time', columnWidth: '8%' },
          { columnName: 'Bracket.BracketName', columnTitle: 'Division', columnWidth: '12%' },
          { columnName: 'HomeTeam.TeamName', columnTitle: 'Home Team', columnWidth: '12%' },
          { columnName: 'HomeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
          { columnName: 'AwayTeam.TeamName', columnTitle: 'Away Team', columnWidth: '12%' },
          { columnName: 'AwayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
          { columnName: 'GameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
        ],

        selectedGameDate: 'Show All',
        selectedGymLocation: 'Show All',
        selectedBracket: 'Show All'
      }
    },

    methods: {
      getApiUrl () {
        var a = this
        a.dataLoading = true
        a.gameApiUrl = config.gameApiUrl()
        a.gameDateApiUrl = config.gameDateApiUrl()
        a.bracketApiUrl = config.bracketApiUrl()
        a.gymApiUrl = config.gymApiUrl()
        a.teamApiUrl = config.teamApiUrl()
      },

      getGameResults () {
        var a = this
        axios.get(a.gameApiUrl + '/results').then((response) => {
          a.gameResults = response.data
          a.dataLoading = false
        }, (err) => {
          console.log(err)
        })
      }
    },

    mounted: function () {
      var a = this
      a.getApiUrl()
      a.getGameResults()

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
