<template>
  <div class="container-fluid">
    <div class="row">
      <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" :class="{ active: apiIsSelected }" @click="apiButtonClicked"> Set Api Key </button>
        <button type="button" class="btn btn-default" :class="{ active: gamesIsSelected }" @click="gameButtonClick"> Manage Games </button>
        <button type="button" class="btn btn-default" :class="{ active: teamsIsSelected }" @click="teamButtonClicked"> Manage Teams </button>
      </div>
    </div>

    <br />

    <div class="row" v-if="gamesIsSelected">
      <div class="col-md-2 col-sm-4">
        <h4>Select Date</h4>
        <div class="list-group">
          <button type="button" class="list-group-item text-center" 
                  :class="{ active: selectedGameDateId === gd.GameDateId }" 
                  v-for="gd in gameDates" :key="gd.GameDateId" @click="gameDateClicked(gd)">
            {{ gd.ScheduleDate | dateFormatter }}
          </button>
        </div>
      </div>
      <div class="col-md-10 col-sm-8">
        
        <h4>{{dataTitle}} <i v-if="isLoading" class="fa fa-refresh fa-spin fa-fw"></i></h4>
        
        <div class="container-fluid" v-if="gamesFiltered.length > 0">
          <app-table :data="gamesFiltered" :columns="columnDefs" @editButtonClick="editClicked">
          </app-table>
        </div>
      </div>
    </div>

    
    <div class="row" v-if="teamsIsSelected">
      Teams
    </div>

    <div class="row" v-if="apiIsSelected">
      <h4>Set Api Access Key</h4>
      
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Application Api Key"
                      placeholder="Enter Your Api Key..."
                      v-model="apiKey">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <button type="submit" v-if="!apiKeySet" class="btn btn-info btn-fill btn-wd" @click.prevent="setApiKey">
              Proceed
            </button>
            <button type="submit" v-if="apiKeySet" class="btn btn-warning btn-fill btn-wd" @click.prevent="clearApiKey">
              Clear
            </button>
          </div>
        </div>
        <div class="clearfix"></div>
      </form>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '../../config'
  import AppTable from 'components/_Plugins/Table.vue'

  export default {
    components: {
      AppTable
    },

    data () {
      return {
        dataTitle: 'Games List',
        isLoading: true,
        columnDefs: [
          {
            columnName: 'HomeTeam.TeamName',
            columnTitle: 'Home',
            columnWidth: '15%'
          },
          {
            columnName: 'HomeTeamScore',
            columnTitle: 'Score',
            columnWidth: '5%'
          },
          {
            columnName: 'AwayTeam.TeamName',
            columnTitle: 'Away',
            columnWidth: '15%'
          },
          {
            columnName: 'AwayTeamScore',
            columnTitle: 'Score',
            columnWidth: '5%'
          },
          {
            columnName: 'Percentage',
            columnTitle: 'Pct. (%)',
            columnWidth: '10%'
          },
          {
            columnName: 'GameNotes',
            columnTitle: 'Game Notes',
            columnWidth: '25%'
          }
        ],
        gamesIsSelected: true,
        teamsIsSelected: false,
        apiIsSelected: false,
        apiKey: null,
        apiKeySet: false,
        gameApiUrl: null,
        gameDateApiUrl: null,
        gameDates: [],
        games: [],
        gamesFiltered: [],
        gameDateSelected: null,
        selectedGameDateId: null
      }
    },

    methods: {
      editClicked (obj) {
        console.log(obj)
      },

      gameButtonClick () {
        var a = this
        a.gamesIsSelected = true
        a.teamsIsSelected = false
        a.apiIsSelected = false
      },

      teamButtonClicked () {
        var a = this
        a.teamsIsSelected = true
        a.gamesIsSelected = false
        a.apiIsSelected = false
      },

      apiButtonClicked () {
        var a = this
        a.teamsIsSelected = false
        a.gamesIsSelected = false
        a.apiIsSelected = true

        // Check if Api Key is Set.
        var apiKeyEntered = localStorage.getItem('psa-api-key')
        console.log(apiKeyEntered)
      },

      gameDateClicked (obj) {
        var a = this
        a.gameDateSelected = obj
        a.selectedGameDateId = a.gameDateSelected.GameDateId

        // Filter the games based on the GameScheduleId.
        a.gamesFiltered = a.games.filter(g => g.GameDateId === a.gameDateSelected.GameDateId)
        console.log(a.gamesFiltered)
      },

      getApiUrl () {
        var a = this
        a.gameDateApiUrl = config.gameDateApiUrl()
        a.gameApiUrl = config.gameApiUrl()
      },

      getGameDates () {
        var a = this

        axios.get(a.gameDateApiUrl).then((response) => {
          a.gameDates = response.data
        }, (err) => {
          console.log(err)
        })
      },

      getGames () {
        var a = this
        console.log('getgames...')
        axios.get(a.gameApiUrl).then((response) => {
          a.games = response.data
          console.log(a.games)
          a.isLoading = false
        }, (err) => {
          console.log(err)
        })
      },

      setApiKey () {
        var a = this
        localStorage.setItem('psa-api-key', a.apiKey)
        a.apiKeySet = true
      },

      clearApiKey () {
        var a = this
        localStorage.removeItem('psa-api-key')
        a.apiKeySet = false
        a.apiKey = null
      }
    },

    mounted () {
      var a = this
      a.getApiUrl()
      a.getGameDates()
      a.getGames()
    },

    filters: {
      dateFormatter (val) {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var d = new Date(val.substr(0, 10))
        var day = d.getDate()
        var monthIdx = d.getMonth()
        var year = d.getFullYear()
        return day + ' ' + monthNames[monthIdx] + ' ' + year
      }
    }
  }
</script>
