<template>
  <div class="row">
    <div class="container-fluid">
      <h4>{{ teamWithGames.TeamName }}</h4>
      <p>
        Current Standings {{ teamWithGames.Win }} - {{ teamWithGames.Loss }}
      </p>
      <h5>{{ tableTitle }}</h5>
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
      teamApiUrl: null,
      teamWithGames: [],
      queryStringId: null,
      tableTitle: 'Games Played',
      columnDefs: [
        {
          columnName: 'Date',
          columnTitle: 'Name',
          columnWidth: '20%'
        },
        {
          columnName: 'Win',
          columnTitle: 'Win',
          columnWidth: '10%'
        },
        {
          columnName: 'Loss',
          columnTitle: 'Loss',
          columnWidth: '10%'
        },
        {
          columnName: 'Percentage',
          columnTitle: 'Pct. (%)',
          columnWidth: '10%'
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
      ]
    }
  },

  methods: {
    getApiUrl () {
      var a = this
      a.teamApiUrl = config.teamApiUrl()
    },

    getTeamGames () {
      var a = this
      var url = a.teamApiUrl + '/withgames/' + a.queryStringId

      axios.get(url).then((response) => {
        if (response.data.length > 0) {
          a.teamWithGames = response.data[0]
          console.log(a.teamWithGames)
        } else {
          // No Data Found.
        }
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
    }
  },

  mounted () {
    var a = this
    a.queryStringId = a.$route.query.id
    a.getApiUrl()
    a.getTeamGames()
  }
}

</script>
