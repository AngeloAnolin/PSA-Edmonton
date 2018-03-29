<<template>
  <div class="row">
    <div class="container-fluid">
      <p>
        Below are the teams competing in the PSA's <strong>Fall/Winter 2017</strong> Season. 
        <i v-if="isLoading" class="fa fa-refresh fa-spin fa-fw"></i>
      </p>

      <div class="col-md-12 visible-md visible-lg" v-for="brck in brackets" :key="brck.BracketId">
        <br />
        <div class="container-fluid">
          <app-table :title="brck.BracketName" :data="brck.Teams" :columns="columnDefs" :showSemis="true" :showWildcard="true">
          </app-table>
        </div>
      </div>

      <div class="list-group visible-sm visible-xs" v-for="brck in brackets" :key="brck.BracketId">
        <h3>{{ brck.BracketName }}</h3>
        <div v-for="t in brck.Teams" :key="t.TeamId" class="list-group-item">
          <h4 class="list-group-item-heading">
            {{ t.TeamName }} ({{ t.Win }} - {{ t.Loss }})
          </h4>
          <p class="list-group-item-text">
            Pts Diff: {{ t.PointDiff }} | Pct (%): {{ t.Percentage }}
          </p>
          <p class="list-group-item-text">
            In Semis: <i class="fa fa-check-circle-o" aria-hidden="true" v-if="t.ClinchedSemis"></i> | Wildcard: <i class="fa fa-check-circle-o" aria-hidden="true" v-if="t.ClinchedWildcard"></i>
          </p>
          <p class="list-group-item-text">
            Team Leader: {{ t.TeamLeader }}
          </p>
        </div>
      </div>
      
    </div>
  </div>  
</template>

<script>
  import axios from 'axios'
  import AppTable from 'components/_Plugins/Table.vue'
  import config from '../../config'

  export default {
    components: {
      AppTable
    },

    data () {
      return {
        isLoading: true,
        bracketApiUrl: null,
        teamApiUrl: null,
        brackets: [],
        columnDefs: [
          {
            columnName: 'TeamName',
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
        a.bracketApiUrl = config.bracketApiUrl()
      },

      getBrackets () {
        var a = this
        var url = a.bracketApiUrl

        axios.get(url).then((response) => {
          a.brackets = response.data
          // console.log(a.brackets)
          a.isLoading = false
        }, (err) => {
          console.log(err)
        })
      }
    },

    mounted () {
      var a = this
      a.isLoading = true
      a.getApiUrl()
      a.getBrackets()
    }
  }
</script>
