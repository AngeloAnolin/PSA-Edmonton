<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-10">
        <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" :class="{ active: apiIsSelected }" @click="apiButtonClicked"> Set Api Key </button>
        <button type="button" class="btn btn-default" :class="{ active: gamesIsSelected }" @click="gameButtonClick"> Manage Games </button>
        <button type="button" class="btn btn-default" :class="{ active: teamsIsSelected }" @click="teamButtonClicked"> Manage Teams </button>
      </div>
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-fill btn-success btn-block" @click="refreshScreenClicked">
          <i v-if="isLoading" class="fa fa-refresh fa-spin fa-fw"></i> Refresh 
        </button>
      </div>
    </div>

    <br />

    <!-- Games Screen -->
    <div class="row" v-if="gamesIsSelected">
      <div class="col-md-2 col-sm-4">
        <div>
          <h4>Select Date</h4>
        </div>
        <div class="list-group">
          <button type="button" class="list-group-item text-center" 
                  :class="{ active: selectedGameDateId === gd.GameDateId }" 
                  v-for="gd in gameDates" :key="gd.GameDateId" @click="gameDateClicked(gd)">
            {{ gd.ScheduleDate | dateFormatter }}
          </button>
        </div>
      </div>

      <div class="col-md-10 col-sm-8">
        <h4>{{dataTitle}} &nbsp; 
          <button class="btn btn-primary btn-fill btn-sm" title="Click to add a new Game..." @click="addGameClicked" v-if="(selectedGame === null && gameDateSelected && !showGameForm)">
            Add
          </button>
        </h4>
       
        <div class="container-fluid" v-if="gameDateSelected && !showGameForm">
          <app-table :data="gamesFiltered" :showEditButton="true" :columns="gamesColumnDefs" @editButtonClick="editGameClicked">
          </app-table>
        </div>

        <!-- Game Form -->
        <div class="container-fluid" v-if="showGameForm">
          <div class="row">
            <div class="col-sm-2">
              <h4>Gym:</h4>
              <div class="list-group">
                <button type="button" class="list-group-item text-center"
                  :class="{ active: selectedGymId === gm.GymId }"
                  @click="gymClicked(gm)"
                  v-for="gm in gyms" :key="gm.GymId">
                  {{ gm.GymName }}
                </button>
              </div>
              <br />
              <h4>Bracket:</h4>
              <div class="list-group">
                <button type="button" class="list-group-item text-center" 
                  :class="{ active: selectedBracketId === br.BracketId }"
                  v-for="br in brackets" :key="br.BracketId"
                  @click="bracketClicked(br)">
                  {{ br.BracketName }}
                </button>
              </div>
            </div>

            <div class="col-sm-3">
              <h4>Home Team:</h4>
              <div class="list-group">
                <button type="button" class="list-group-item text-center"
                  :class="{ active: selectedHomeTeamId === tm.TeamId }"
                  v-for="tm in teams" :key="tm.TeamId"
                  @click="homeTeamClicked(tm)">
                  {{ tm.TeamName }}
                </button>
              </div>

              <h4>Home Score</h4>
              <fg-input type="number"
                placeholder="Enter Home Score"
                v-model="homeScore">
              </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Away Team:</h4>
              <div class="list-group">
                <button type="button" class="list-group-item text-center"
                :class="{ active: selectedAwayTeamId === tm.TeamId }"
                  v-for="tm in teams" :key="tm.TeamId"
                  @click="awayTeamClicked(tm)">
                  {{ tm.TeamName }}
                </button>
              </div>

              <h4>Away Score</h4>
              <fg-input type="number"
                placeholder="Enter Away Score"
                v-model="awayScore">
              </fg-input>
            </div>

            <div class="col-sm-4">
              <h4>Game Time</h4>
              <fg-input type="text"
                placeholder="Enter Game Time"
                v-model="scheduleTime">
              </fg-input>

              <h4>Game Notes</h4>
              <textarea rows="5" 
                class="form-control border-input"
                placeholder="Enter Game Notes..."
                v-model="gameNotes">

              </textarea>
            </div>

          </div>

          <div class="row">
            <div class="col-sm-12">
              <button class="btn btn-info btn-fill btn-wd" @click="saveGameClick">
                Save
              </button>
              <button class="btn btn-warning btn-fill btn-wd" @click="cancelGameClick">
                Cancel
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Teams Screen -->
    <div class="row" v-if="teamsIsSelected">
      
      <div class="col-md-2 col-sm-4">
        <div>
          <h4>Select Bracket</h4>
        </div>
        <div class="list-group">
          <button type="button" class="list-group-item text-center" 
            :class="{ active: teamPanelBracketId === br.BracketId }"
            v-for="br in brackets" :key="br.BracketId"
            @click="teamPanelBracketClicked(br)">
            {{ br.BracketName }}
          </button>
        </div>
      </div>

      <div class="col-md-10 col-sm-8">
        <h4>{{ teamPanelTitle }} &nbsp; 
          <button class="btn btn-primary btn-fill btn-sm" title="Click to add a new Team..." @click="addTeamClicked" v-if="(selectedTeam === null && teamPanelBracketSelected && !showTeamForm)">
            Add
          </button>
        </h4>

        <div class="container-fluid" v-if="teamPanelBracketSelected && !showTeamForm">
          <app-table :data="teamsFiltered" :showEditButton="true" :columns="teamsColumnDefs" @editButtonClick="editTeamClicked">
          </app-table>
        </div>

        <!-- Team Form -->
        <div class="row" v-if="showTeamForm">
          <div class="container-fluid">
            <div class="col-sm-3">
              <h4>Team Name</h4>
                <fg-input type="text"
                  placeholder="Enter Team Name"
                  v-model="selectedTeam.TeamName">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Team Leader</h4>
                <fg-input type="text"
                  placeholder="Enter Team Leader"
                  v-model="selectedTeam.TeamLeader">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Wins</h4>
                <fg-input type="number"
                  placeholder="Wins"
                  v-model="selectedTeam.Win">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Loss</h4>
                <fg-input type="number"
                  placeholder="Losses"
                  v-model="selectedTeam.Loss">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Win Percentage (%)</h4>
                <fg-input type="number"
                  placeholder="Win Percentage"
                  v-model="selectedTeam.Percentage">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Points Scored</h4>
                <fg-input type="number"
                  placeholder="Points Scored"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  v-model="selectedTeam.PointsScored">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Points Allowed</h4>
                <fg-input type="number"
                  placeholder="Points Allowed"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  v-model="selectedTeam.PointsAllowed">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Point Differential</h4>
                <fg-input type="number"
                  disabled
                  placeholder="Point Differential"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  v-model="selectedTeam.PointDiff">
                </fg-input>
            </div>

            <div class="col-sm-3">
              <h4>Mean Score</h4>
                <fg-input type="number"
                  placeholder="Mean Score"
                  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  v-model="selectedTeam.MeanScore">
                </fg-input>
            </div>
          </div>
        </div>

        <div class="row" v-if="showTeamForm">
          <div class="col-sm-12">
            <button class="btn btn-info btn-fill btn-wd" @click="saveTeamClick">
              Save
            </button>
            <button class="btn btn-warning btn-fill btn-wd" @click="cancelTeamClick">
              Cancel
            </button>
          </div>
        </div>
      </div>

    </div>

    <!-- API Key Screen -->
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
  import config from 'src/config'
  import AppTable from 'components/_Plugins/Table.vue'
  import PaperNotification from 'src/components/UIComponents/NotificationPlugin/Notification.vue'

  export default {
    components: {
      AppTable,
      PaperNotification
    },

    data () {
      return {
        dataTitle: 'Games List',
        teamPanelTitle: 'Teams List',
        isLoading: true,
        gamesColumnDefs: [
          {
            columnName: 'Bracket.BracketName',
            columnTitle: 'Bracket',
            columnWidth: '10%'
          },
          {
            columnName: 'Gym.GymName',
            columnTitle: 'Gym',
            columnWidth: '6%'
          },
          {
            columnName: 'ScheduleTime',
            columnTitle: 'Time',
            columnWidth: '8%'
          },
          {
            columnName: 'HomeTeam.TeamName',
            columnTitle: 'Home Team',
            columnWidth: '12%'
          },
          {
            columnName: 'HomeTeamScore',
            columnTitle: 'Score',
            columnWidth: '5%'
          },
          {
            columnName: 'AwayTeam.TeamName',
            columnTitle: 'Away Team',
            columnWidth: '12%'
          },
          {
            columnName: 'AwayTeamScore',
            columnTitle: 'Score',
            columnWidth: '5%'
          },
          {
            columnName: 'GameNotes',
            columnTitle: 'Game Notes',
            columnWidth: '25%'
          }
        ],
        gamesIsSelected: false,
        teamsIsSelected: true,
        apiIsSelected: false,
        apiKey: null,
        apiKeySet: false,
        gameApiUrl: null,
        gameDateApiUrl: null,
        bracketApiUrl: null,
        gymApiUrl: null,
        teamApiUrl: null,
        gameDates: [],
        games: [],
        gamesFiltered: [],
        gameDateSelected: null,
        selectedGameDateId: null,
        selectedGame: {
          GameId: null,
          HomeTeamId: null,
          HomeTeam: null,
          AwayTeamId: null,
          AwayTeam: null,
          GameDateId: null,
          GameDate: null,
          ScheduleTime: null,
          HomeTeamScore: 0,
          AwayTeamScore: 0,
          GymId: null,
          BracketId: null,
          GameNotes: null
        },
        showGameForm: false,
        brackets: [],
        teams: [],
        gyms: [],
        selectedBracketId: null,
        selectedHomeTeamId: null,
        selectedAwayTeamId: null,
        selectedGymId: null,
        scheduleTime: '',
        homeScore: 0,
        awayScore: 0,
        gameNotes: null,
        teamPanelBracketSelected: null,
        teamPanelBracketId: null,
        teamsFiltered: [],
        teamsColumnDefs: [
          {
            columnName: 'TeamName',
            columnTitle: 'Team Name',
            columnWidth: '15%'
          },
          {
            columnName: 'TeamLeader',
            columnTitle: 'Team Leader',
            columnWidth: '10%'
          },
          {
            columnName: 'Win',
            columnTitle: 'Win',
            columnWidth: '7%'
          },
          {
            columnName: 'Loss',
            columnTitle: 'Loss',
            columnWidth: '7%'
          },
          {
            columnName: 'Percentage',
            columnTitle: 'Pct (%)',
            columnWidth: '6%'
          },
          {
            columnName: 'PointsScored',
            columnTitle: 'Pts Scored',
            columnWidth: '10%'
          },
          {
            columnName: 'PointsAllowed',
            columnTitle: 'Pts Allowed',
            columnWidth: '10%'
          },
          {
            columnName: 'PointDiff',
            columnTitle: 'Pts Diff',
            columnWidth: '10%'
          },
          {
            columnName: 'MeanScore',
            columnTitle: 'Mean Score',
            columnWidth: '10%'
          }
        ],
        showTeamForm: false,
        selectedTeam: {
          TeamId: null,
          TeamName: null,
          TeamLeader: null,
          Win: null,
          Loss: null,
          PointsScored: null,
          PointsAllowed: null,
          PointDiff: null,
          MeanScore: null,
          Percentage: null,
          BracketId: null
        }
      }
    },

    methods: {
      notifyVue (verticalAlign, horizontalAlign, notifyMessage, alertType, iconType) {
        // Alert Types: '', 'info', 'success', 'warning', 'danger'
        // Icon Types: '', 'fa fa-info-circle', 'fa fa-check-circle', 'fa fa-bell-o', 'fa fa-exclamation-circle'
        this.$notifications.notify(
          {
            message: notifyMessage,
            icon: iconType,
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: alertType
          })
      },

      addGameClicked () {
        var a = this
        a.showGameForm = true
        a.dataTitle = 'Add Game'
      },

      editGameClicked (obj) {
        var a = this
        a.showGameForm = true
        a.dataTitle = 'Edit Game'
        a.selectedGame = obj
        a.selectedGymId = a.selectedGame.GymId
        a.scheduleTime = a.selectedGame.ScheduleTime
        a.selectedHomeTeamId = a.selectedGame.HomeTeamId
        a.selectedAwayTeamId = a.selectedGame.AwayTeamId
        a.selectedBracketId = a.selectedGame.BracketId
        a.homeScore = a.selectedGame.HomeTeamScore
        a.awayScore = a.selectedGame.AwayTeamScore
        a.gameNotes = a.selectedGame.GameNotes

        // From the brackets, get the
        var bracketObject = a.brackets.filter(function (bracket) {
          return bracket.BracketId === a.selectedBracketId
        })

        if (bracketObject) {
          a.teams = bracketObject[0].Teams
        }
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

        if (apiKeyEntered) {
          // API Key is present. Should be used for axios Headers.
        }
      },

      gameDateClicked (obj) {
        var a = this
        a.gameDateSelected = obj
        a.selectedGameDateId = a.gameDateSelected.GameDateId
        a.selectedGame = null
        a.showGameForm = false

        // Filter the games based on the GameScheduleId.
        a.gamesFiltered = a.games.filter(g => g.GameDateId === a.gameDateSelected.GameDateId)
        a.dataTitle = 'Games List: (' + a.gamesFiltered.length + ') games scheduled.'
      },

      gymClicked (obj) {
        var a = this
        a.selectedGymId = obj.GymId
      },

      bracketClicked (obj) {
        var a = this
        a.selectedBracketId = obj.BracketId
        a.teams = obj.Teams
        a.selectedHomeTeamId = null
        a.selectedAwayTeamId = null
      },

      homeTeamClicked (obj) {
        var a = this
        a.selectedHomeTeamId = obj.TeamId
      },

      awayTeamClicked (obj) {
        var a = this
        if (obj.TeamId !== a.selectedHomeTeamId) {
          a.selectedAwayTeamId = obj.TeamId
        } else {
          var msg = 'Home Team and Away Team cannot be the same. <br /><br /> Please select another team.'
          a.notifyVue('top', 'right', msg, 'warning', 'fa fa-bell-o')
        }
      },

      saveGameClick () {
        var a = this

        if (a.selectedGame) {
          a.selectedGame.GymId = a.selectedGymId
          a.selectedGame.BracketId = a.selectedBracketId
          a.selectedGame.HomeTeamId = a.selectedHomeTeamId
          a.selectedGame.AwayTeamId = a.selectedAwayTeamId
          a.selectedGame.ScheduleTime = a.scheduleTime
          a.selectedGame.HomeTeamScore = a.homeScore
          a.selectedGame.AwayTeamScore = a.awayScore
          a.selectedGame.GameNotes = a.gameNotes

          var url = a.gameApiUrl + '/update/' + a.selectedGame.GameId
          axios.put(url, a.selectedGame).then((response) => {
            var msg = 'Game has been successfully updated.'
            a.notifyVue('top', 'right', msg, 'success', 'fa fa-check-circle')
          }, (err) => {
            console.log(err)
            var msg = 'An error has been encountered while updating the game. Check console for more information.'
            a.notifyVue('top', 'right', msg, 'danger', 'fa fa-exclamation-circle')
          })
        } else {
          // Add
          var newGame = {
            HomeTeamId: a.selectedHomeTeamId,
            AwayTeamId: a.selectedAwayTeamId,
            GameDateId: a.selectedGameDateId,
            ScheduleTime: a.scheduleTime,
            HomeTeamScore: a.homeScore,
            AwayTeamScore: a.awayScore,
            GymId: a.selectedGymId,
            BracketId: a.selectedBracketId,
            GameNotes: a.gameNotes
          }

          axios.post(a.gameApiUrl + '/create', newGame).then((response) => {
            var msg = 'Game has been successfully added.'
            a.notifyVue('top', 'right', msg, 'success', 'fa fa-check-circle')
            a.gamesFiltered.push(response.data)
            a.games.push(response.data)
            a.dataTitle = 'Games List: (' + a.gamesFiltered.length + ') games scheduled.'
          }, (err) => {
            console.log(err)
            var msg = 'An error has been encountered while adding the game. Check console for more information.'
            a.notifyVue('top', 'right', msg, 'danger', 'fa fa-exclamation-circle')
          })
        }

        a.selectedGame = null
        a.showGameForm = false
        a.teams = []
        a.selectedGymId = null
        a.selectedBracketId = null
        a.scheduleTime = ''
        a.selectedHomeTeamId = null
        a.selectedAwayTeamId = null
        a.homeScore = 0
        a.awayScore = 0
        a.gameNotes = null
      },

      cancelGameClick () {
        var a = this
        a.selectedGame = null
        a.showGameForm = false
      },

      getApiUrl () {
        var a = this
        a.gameDateApiUrl = config.gameDateApiUrl()
        a.gameApiUrl = config.gameApiUrl()
        a.bracketApiUrl = config.bracketApiUrl()
        a.gymApiUrl = config.gymApiUrl()
        a.teamApiUrl = config.teamApiUrl()
      },

      refreshScreenClicked () {
        var a = this
        if (a.gamesIsSelected) {
          // Refresh Items on Games screen.
          a.getGameDates()
        }

        if (a.teamsIsSelected) {
          console.log('Refreshing...')
          // Refresh Items on Teams screen.
          a.getBrackets()
        }
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
        axios.get(a.gameApiUrl).then((response) => {
          a.games = response.data
          a.isLoading = false
        }, (err) => {
          console.log(err)
        })
      },

      getBrackets () {
        var a = this
        axios.get(a.bracketApiUrl).then((response) => {
          a.brackets = response.data
          a.isLoading = false
        }, (err) => {
          console.log(err)
        })
      },

      getGyms () {
        var a = this
        axios.get(a.gymApiUrl).then((response) => {
          a.gyms = response.data
          a.isLoading = false
        }, (err) => {
          console.log(err)
        })
      },

      teamPanelBracketClicked (obj) {
        var a = this
        a.teamPanelBracketSelected = obj
        a.teamPanelBracketId = obj.BracketId
        a.selectedTeam = {}
        a.showTeamForm = false
        a.teamsFiltered = obj.Teams
        a.teamPanelTitle = 'Team List: (' + a.teamsFiltered.length + ') teams listed.'
      },

      addTeamClicked () {
        var a = this
        a.showTeamForm = true
        a.teamPanelTitle = 'Add Team'
      },

      editTeamClicked (obj) {
        var a = this
        a.selectedTeam = obj
        a.showTeamForm = true
        a.teamPanelTitle = 'Edit Team: ' + obj.TeamName
      },

      calculateWinPercentage () {
        var a = this
        var totalGames = parseInt(a.selectedTeam.Win) + parseInt(a.selectedTeam.Loss)
        a.selectedTeam.Percentage = ((a.selectedTeam.Win / totalGames) * 100).toFixed(2)
      },

      calculatePointDiff () {
        var a = this
        a.selectedTeam.PointDiff = a.selectedTeam.PointsScored - a.selectedTeam.PointsAllowed
      },

      saveTeamClick () {
        var a = this
        if (a.selectedTeam) {
          // Update
          a.selectedTeam.PointsScored = (a.selectedTeam.PointsScored === null) ? 0 : a.selectedTeam.PointsScored
          a.selectedTeam.PointsAllowed = (a.selectedTeam.PointsAllowed === null) ? 0 : a.selectedTeam.PointsAllowed
          a.selectedTeam.PointDiff = (a.selectedTeam.PointsScored - a.selectedTeam.PointsAllowed)

          var url = a.teamApiUrl + '/update/' + a.selectedTeam.TeamId
          axios.put(url, a.selectedTeam).then((response) => {
            var msg = 'Team has been successfully updated.'
            a.notifyVue('top', 'right', msg, 'success', 'fa fa-check-circle')
          }, (err) => {
            console.log(err)
            var msg = 'An error has been encountered while updating the team. Check console for more information.'
            a.notifyVue('top', 'right', msg, 'danger', 'fa fa-exclamation-circle')
          })
        } else {
          // Add
          console.log('To be implemented soon...')
        }

        a.selectedTeam = {}
        a.showTeamForm = false
      },

      cancelTeamClick () {
        var a = this
        a.selectedTeam = {}
        a.showTeamForm = false
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
      a.getBrackets()
      a.getGyms()
    },

    filters: {
      dateFormatter (val) {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var d = new Date(val.substr(0, 10))
        var day = d.getDate() + 1
        var monthIdx = d.getMonth()
        var year = d.getFullYear()
        return day + ' ' + monthNames[monthIdx] + ' ' + year
      }
    },

    watch: {
      'selectedTeam.Win': function (newVal, oldVal) {
        var a = this
        a.calculateWinPercentage()
      },

      'selectedTeam.Loss': function (newVal, oldVal) {
        var a = this
        a.calculateWinPercentage()
      },

      'selectedTeam.PointsScored': function (newVal, oldVal) {
        var a = this
        a.calculatePointDiff()
      },

      'selectedTeam.PointsAllowed': function (newVal, oldVal) {
        var a = this
        a.calculatePointDiff()
      }
    }
  }
</script>
