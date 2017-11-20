<template>
  <div>
    <div class="row">
      
      <!-- divMainContainer START -->
      <div id="divMainContainer" class="container-fluid">
        <p>
          Note: Game results are posted as soon as they are available.
        </p>

        <!-- October 29, 2017 @ Trinity [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <app-table :title="r20171029b.title" :sub-title="r20171029b.subTitle" :data="r20171029b.data" :columns="r20171029b.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <h4>{{ r20171029b.title }}</h4>
          <h5>{{ r20171029b.subTitle }}</h5>
          <div v-for="a in r20171029b.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 29, 2017 @ Trinity [END] -->

        <!-- October 22, 2017 @ Romero [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 29, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <app-table :title="r20171029a.title" :sub-title="r20171029a.subTitle" :data="r20171029a.data" :columns="r20171029a.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171029a.title }}</h4>
          <h5>{{ r20171029a.subTitle }}</h5>
          <div v-for="a in r20171029a.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 22, 2017 @ Romero [END] -->

        <!-- October 28, 2017 @ Troy [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 28, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Father Troy Gym')">
          <app-table :title="r20171028.title" :sub-title="r20171028.subTitle" :data="r20171028.data" :columns="r20171028.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171028.title }}</h4>
          <h5>{{ r20171028.subTitle }}</h5>
          <div v-for="a in r20171028.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 28, 2017 @ Troy [END] -->

        <!-- October 22, 2017 @ Trinity [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <app-table :title="r20171022b.title" :sub-title="r20171022b.subTitle" :data="r20171022b.data" :columns="r20171022b.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <h4>{{ r20171022b.title }}</h4>
          <h5>{{ r20171022b.subTitle }}</h5>
          <div v-for="a in r20171022b.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 22, 2017 @ Trinity [END] -->

        <!-- October 22, 2017 @ Romero [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <app-table :title="r20171022a.title" :sub-title="r20171022a.subTitle" :data="r20171022a.data" :columns="r20171022a.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 22, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171022a.title }}</h4>
          <h5>{{ r20171022a.subTitle }}</h5>
          <div v-for="a in r20171022a.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 22, 2017 @ Romero [END] -->

        <!-- October 21, 2017 @ Troy [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 21, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Father Troy Gym')">
          <app-table :title="r20171021.title" :sub-title="r20171021.subTitle" :data="r20171021.data" :columns="r20171021.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171021.title }}</h4>
          <h5>{{ r20171021.subTitle }}</h5>
          <div v-for="a in r20171021.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 21, 2017 @ Troy [END] -->

        <!-- October 15, 2017 @ Trinity [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 21, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <app-table :title="r20171015b.title" :sub-title="r20171015b.subTitle" :data="r20171015b.data" :columns="r20171015b.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Holy Trinity Gym')">
          <h4>{{ r20171015b.title }}</h4>
          <h5>{{ r20171015b.subTitle }}</h5>
          <div v-for="a in r20171015b.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 15, 2017 @ Trinity [END] -->

        <!-- October 15, 2017 @ Romero [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <app-table :title="r20171015a.title" :sub-title="r20171015a.subTitle" :data="r20171015a.data" :columns="r20171015a.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171015a.title }}</h4>
          <h5>{{ r20171015a.subTitle }}</h5>
          <div v-for="a in r20171015a.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 15, 2017 @ Romero [END] -->

        <!-- October 14, 2017 @ Troy [START] -->
        <div class="col-md-12 visible-md visible-lg" 
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 14, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Father Troy Gym')">
          <app-table :title="r20171014.title" :sub-title="r20171014.subTitle" :data="r20171014.data" :columns="r20171014.columns">
          </app-table>
        </div>

        <div class="list-group visible-sm visible-xs"
             v-if="(selectedGameDate === 'Show All' || selectedGameDate == 'October 15, 2017') && (selectedGymLocation === 'Show All' || selectedGymLocation === 'Oscar Romero Gym')">
          <h4>{{ r20171014.title }}</h4>
          <h5>{{ r20171014.subTitle }}</h5>
          <div v-for="a in r20171014.data" :key="a.id" class="list-group-item">
            <p class="list-group-item-text">
              <strong>{{ a.division}}</strong>
            </p>
            <h5 class="list-group-item-heading">
              {{ a.homeTeam }} - {{ a.homeTeamScore }} 
              <br />
              <small>vs</small> 
              <br />
              {{ a.awayTeam }} - {{ a.awayTeamScore }}
            </h5>
          </div>
        </div>
        <!-- October 14, 2017 @ Troy [END] -->

      </div>
      <!-- divMainContainer END -->

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
        selectedGameDate: 'Show All',
        selectedGymLocation: 'Show All',
        selectedBracket: 'Show All',
        gameDates: [
          { gameDate: 'Show All' },
          { gameDate: 'October 14, 2017' },
          { gameDate: 'October 15, 2017' },
          { gameDate: 'October 21, 2017' },
          { gameDate: 'October 22, 2017' },
          { gameDate: 'October 28, 2017' },
          { gameDate: 'October 29, 2017' }
        ],

        gymLocations: [
          { gymName: 'Show All' },
          { gymName: 'Father Troy Gym' },
          { gymName: 'Oscar Romero Gym' },
          { gymName: 'Holy Trinity Gym' }
        ],

        teamBrackets: [
          { bracketName: 'Show All' },
          { bracketName: 'Open Division I' },
          { bracketName: 'Open Division II-A' },
          { bracketName: 'Open Division II-B' },
          { bracketName: 'Open Division II-C' },
          { bracketName: 'Master Division A' },
          { bracketName: 'Master Division B' }
        ],

        r20171014: { title: null, subTitle: null, columns: null, data: null },
        r20171015a: null,
        r20171015b: null,
        r20171021: null,
        r20171022a: null,
        r20171022b: null,
        r20171028: null,
        r20171029a: null,
        r20171029b: null,

        results20171014: {
          title: 'October 14, 2017',
          subTitle: '@Father Troy Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 1, gameDate: '2017-10-14', gameTime: '8:00 AM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Big Ballers', homeTeamScore: 103, homeTeamWin: true, awayTeam: 'Leduc Warriors', awayTeamScore: 98, awayTeamWin: false, isGameDone: true, gymShortName: 'Troy', gameNotes: 'Raf Guce lead Big Ballers with 34 pts.'
            },
            {
              id: 2, gameDate: '2017-10-14', gameTime: '9:20 AM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Hotshots', homeTeamScore: 61, homeTeamWin: false, awayTeam: 'Changes For Hope', awayTeamScore: 104, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Mikee Canasa paced Changes for Hope with 24 pts.'
            },
            {
              id: 3, gameDate: '2017-10-14', gameTime: '10:40 AM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'AMDG', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Gallery Dental', awayTeamScore: 85, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'James Paroginog lead a balanced attack for Gallery Dental with 15pts.'
            },
            {
              id: 4, gameDate: '2017-10-14', gameTime: '12:00 PM', gameDay: 'Saturday', division: 'Open Division II-C', homeTeam: 'Huskies', homeTeamScore: 82, homeTeamWin: false, awayTeam: 'Spectrum G-Dios', awayTeamScore: 93, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'J. Marantan lead Spectrum with 25 pts.'
            },
            {
              id: 5, gameDate: '2017-10-14', gameTime: '1:20 PM', gameDay: 'Saturday', division: 'Master Division B', homeTeam: 'SBP', homeTeamScore: 67, homeTeamWin: false, awayTeam: 'Barako', awayTeamScore: 74, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Marlon lead Barako with 37 pts on 8 made 3pt FGs.'
            },
            {
              id: 6, gameDate: '2017-10-14', gameTime: '2:40 PM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Eswar', homeTeamScore: 94, homeTeamWin: false, awayTeam: 'Akatsuki', awayTeamScore: 96, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Nico Yola had a season high 55 pts to lead Akatsuki'
            },
            {
              id: 7, gameDate: '2017-10-14', gameTime: '4:00 PM', gameDay: 'Saturday', division: 'Master Division A', homeTeam: 'First Canadian', homeTeamScore: 69, homeTeamWin: false, awayTeam: 'Amirax Wolverines', awayTeamScore: 106, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'MJ  Daquioag 32pts with 7 3pt FGs made'
            },
            {
              id: 8, gameDate: '2017-10-14', gameTime: '5:20 PM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Batangas Pride', homeTeamScore: 63, homeTeamWin: false, awayTeam: 'Team Rolly', awayTeamScore: 68, awayTeamWin: true, isGameDone: false, gymShortName: 'Troy', gameNotes: 'Player #7 of Team Rolly with 29 points.'
            }
          ]
        },

        results20171015a: {
          title: 'October 15, 2017',
          subTitle: '@Oscar Romero Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 9, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Pinoy Auto Loans', homeTeamScore: 82, homeTeamWin: true, awayTeam: 'Millwoods Warriors', awayTeamScore: 79, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Bembot Musa lead Pinoy Auto Loans with 24 pts.'
            },
            {
              id: 10, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Crosstown Auto', homeTeamScore: 76, homeTeamWin: false, awayTeam: 'Luzviminda', awayTeamScore: 77, awayTeamWin: true, isGameDone: false, gymShortName: 'Romero', gameNotes: 'J. Roguel scored 20 pts for Luzviminda.'
            },
            {
              id: 11, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Edmonton Eagles', homeTeamScore: 68, homeTeamWin: false, awayTeam: 'H & B', awayTeamScore: 74, awayTeamWin: true, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Floyd Eyao topscored for the H & B with 31 pts.'
            },
            {
              id: 12, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'La Derma', homeTeamScore: 67, homeTeamWin: true, awayTeam: 'Bolero', awayTeamScore: 62, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Alvin Corpuz lead a balanced attack for La Derma with 12 pts.'
            },
            {
              id: 13, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Barako Boba Island', homeTeamScore: 67, homeTeamWin: true, awayTeam: 'Hanjan', awayTeamScore: 63, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Jayson Castillo topscored for Boba Island with 17 pts.'
            },
            {
              id: 14, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Cancom', homeTeamScore: 69, homeTeamWin: true, awayTeam: 'Industrial Athlete', awayTeamScore: 65, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'Ron Montealegre lead Cancom with 19 pts.'
            },
            {
              id: 15, gameDate: '2017-10-15', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'H & B Master', homeTeamScore: 89, homeTeamWin: true, awayTeam: 'Team Manash', awayTeamScore: 82, awayTeamWin: false, isGameDone: false, gymShortName: 'Romero', gameNotes: 'OT win for H&B lead by #9\'s 25 pts.'
            }
          ]
        },

        results20171015b: {
          title: 'October 15, 2017',
          subTitle: '@Holy Trinity Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 15, gameDate: '2017-10-15', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Team Pahirapan', homeTeamScore: 79, homeTeamWin: false, awayTeam: 'CLG Display', awayTeamScore: 80, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Jeff Dalit of CLG Display pumped 24 pts in tight match'
            },
            {
              id: 16, gameDate: '2017-10-15', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'PSA Free Agents', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Cameron Homes', awayTeamScore: 123, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Cameron Heights was lead by Ivan Balala\'s 21 pts.'
            },
            {
              id: 17, gameDate: '2017-10-15', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Prestige Vision', homeTeamScore: 75, homeTeamWin: true, awayTeam: 'Golden Bucks', awayTeamScore: 62, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Joe Simon paced Prestige Vision with 23 pts.'
            },
            {
              id: 18, gameDate: '2017-10-15', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Phenoms', homeTeamScore: 55, homeTeamWin: false, awayTeam: 'Team Morinville', awayTeamScore: 86, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Player #21 from Team Morinville scored 21 pts.'
            },
            {
              id: 19, gameDate: '2017-10-15', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Amirax Terror Squad', homeTeamScore: 86, homeTeamWin: true, awayTeam: 'Full Force', awayTeamScore: 65, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Dondon Tagufa lead Amirax with 24 pts.'
            },
            {
              id: 20, gameDate: '2017-10-15', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Akatsuki', homeTeamScore: 67, homeTeamWin: false, awayTeam: 'Alberta Medical Supplies', awayTeamScore: 77, awayTeamWin: true, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Samson King lead Alberta Medical Supplies (Genesis) with 19 pts.'
            },
            {
              id: 21, gameDate: '2017-10-15', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Open Division I', homeTeam: 'Knights', homeTeamScore: 90, homeTeamWin: true, awayTeam: 'Crooks', awayTeamScore: 71, awayTeamWin: false, isGameDone: false, gymShortName: 'Trinity', gameNotes: 'Virson Orquez lead Knights with 31 pts.'
            }
          ]
        },

        results20171021: {
          title: 'October 21, 2017',
          subTitle: '@Father Troy Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 1, gameDate: '2017-10-21', gameTime: '8:00 AM', gameDay: 'Saturday', division: 'Master Div A', homeTeam: 'Luzviminda', homeTeamScore: 74, homeTeamWin: true, awayTeam: 'First Canadian', awayTeamScore: 69, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'Ayrian lead Luzviminda with 16 pts.'
            },
            {
              id: 2, gameDate: '2017-10-21', gameTime: '9:20 AM', gameDay: 'Saturday', division: 'Open Division II-C', homeTeam: 'Spectrum G-Dios', homeTeamScore: 84, homeTeamWin: false, awayTeam: 'Bolero', awayTeamScore: 89, awayTeamWin: true, gymShortName: 'Troy', gameNotes: 'Jay Ladiana paced Bolero with 26 pts.'
            },
            {
              id: 3, gameDate: '2017-10-21', gameTime: '10:40 AM', gameDay: 'Saturday', division: 'Master Div B', homeTeam: 'SBP', homeTeamScore: 77, homeTeamWin: true, awayTeam: 'AMDG', awayTeamScore: 56, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'JR Perpetua topscored for SBP with 24 pts.'
            },
            {
              id: 4, gameDate: '2017-10-21', gameTime: '12:00 PM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'Edmonton Eagles', homeTeamScore: 70, homeTeamWin: false, awayTeam: 'Eswar', awayTeamScore: 125, awayTeamWin: true, gymShortName: 'Troy', gameNotes: 'Joseph of Eswar had 34 pts.'
            },
            {
              id: 5, gameDate: '2017-10-21', gameTime: '1:20 PM', gameDay: 'Saturday', division: 'Open Division II-A', homeTeam: 'H & B Open', homeTeamScore: 98, homeTeamWin: true, awayTeam: 'Leduc Warriors', awayTeamScore: 83, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'Floyd Eyao had 29 pts for the H&B win.'
            },
            {
              id: 6, gameDate: '2017-10-21', gameTime: '2:40 PM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Changes for Hope', homeTeamScore: 73, homeTeamWin: true, awayTeam: 'Industrial Athlete', awayTeamScore: 59, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'Mikee Canasa scored 17 pts. for the win.'
            },
            {
              id: 7, gameDate: '2017-10-21', gameTime: '4:00 PM', gameDay: 'Saturday', division: 'Open Division I', homeTeam: 'Pinoy Auto Loans', homeTeamScore: 93, homeTeamWin: true, awayTeam: 'Crooks', awayTeamScore: 80, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'L. Baui scored 24 pts.'
            },
            {
              id: 8, gameDate: '2017-10-21', gameTime: '5:20 PM', gameDay: 'Saturday', division: 'Open Division I', homeTeam: 'PSA', homeTeamScore: 108, homeTeamWin: false, awayTeam: 'Knights', awayTeamScore: 117, awayTeamWin: true, gymShortName: 'Troy', gameNotes: 'Orquez topscored with 41 pts. for Knights'
            },
            {
              id: 9, gameDate: '2017-10-21', gameTime: '6:40 PM', gameDay: 'Saturday', division: 'Open Division II-B', homeTeam: 'Batangas Pride', homeTeamScore: 78, homeTeamWin: true, awayTeam: 'Hanjan', awayTeamScore: 68, awayTeamWin: false, gymShortName: 'Troy', gameNotes: 'Magdaong paced Batangas Pride with 20 pts.'
            }
          ]
        },

        results20171022a: {
          title: 'October 22, 2017',
          subTitle: '@Oscar Romero Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
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

        results20171022b: {
          title: 'October 22, 2017',
          subTitle: '@Holy Trinity Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            { id: 18, gameDate: '2017-10-22', gameTime: '8:00 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Huskies', homeTeamScore: 85, homeTeamWin: true, awayTeam: 'PSA Free Agents', awayTeamScore: 74, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'M. Reyes scored 20 pts.' },
            { id: 19, gameDate: '2017-10-22', gameTime: '9:20 AM', gameDay: 'Sunday', division: 'Master Division B', homeTeam: 'Millwoods Warriors', homeTeamScore: 77, homeTeamWin: true, awayTeam: 'Barako', awayTeamScore: 76, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Hemilo scored 21 pts for Millwoods' },
            { id: 20, gameDate: '2017-10-22', gameTime: '10:40 AM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Cameron Homes', homeTeamScore: 110, homeTeamWin: false, awayTeam: 'Team Morinville', awayTeamScore: 114, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'De Jesus lead all scorers for Morinville with 40 pts.' },
            { id: 21, gameDate: '2017-10-22', gameTime: '12:00 PM', gameDay: 'Sunday', division: 'Master Division A', homeTeam: 'Team Manash', homeTeamScore: 65, homeTeamWin: false, awayTeam: 'Prestige Vision', awayTeamScore: 82, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'Tabaldo capped a balanced attack with 13 pts for Prestige.' },
            { id: 22, gameDate: '2017-10-22', gameTime: '1:20 PM', gameDay: 'Sunday', division: 'Open Division II-B', homeTeam: 'Barako Boba Island', homeTeamScore: 102, homeTeamWin: true, awayTeam: 'Hotshots', awayTeamScore: 65, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Player #0 of Boba Island scored 21 pts.' },
            { id: 23, gameDate: '2017-10-22', gameTime: '2:40 PM', gameDay: 'Sunday', division: 'Open Division II-C', homeTeam: 'Phenoms', homeTeamScore: 71, homeTeamWin: false, awayTeam: 'La Derma', awayTeamScore: 85, awayTeamWin: true, gymShortName: 'Trinity', gameNotes: 'M. Nidoy scored 15 pts for La Derma' },
            { id: 24, gameDate: '2017-10-22', gameTime: '4:00 PM', gameDay: 'Sunday', division: 'Open Division II-A', homeTeam: 'Amirax Terror Squad', homeTeamScore: 108, homeTeamWin: true, awayTeam: 'Alberta Medical Supplies', awayTeamScore: 85, awayTeamWin: false, gymShortName: 'Trinity', gameNotes: 'Itliong lead Amirax with 21 pts.' }
          ]
        },

        results20171028: {
          title: 'October 28, 2017',
          subTitle: '@Holy Trinity Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
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

        results20171029a: {
          title: 'October 29, 2017',
          subTitle: '@Oscar Romero Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 11,
              gameDate: '2017-10-29',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Pinoy Auto Loans',
              homeTeamScore: 75,
              homeTeamWin: true,
              awayTeam: 'Gallery Dental',
              awayTeamScore: 72,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: 'Joe Medina lead a balance Crosstown attack with 15 pts.'
            },
            {
              id: 12,
              gameDate: '2017-10-29',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Crosstown Auto',
              homeTeamScore: 71,
              homeTeamWin: false,
              awayTeam: 'Prestige Vision',
              awayTeamScore: 91,
              awayTeamWin: true,
              gymShortName: 'Romero',
              gameNotes: 'J. Simon had 9-3 pointers leading with 29 pts. for Prestige Vision'
            },
            {
              id: 13,
              gameDate: '2017-10-29',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Edmonton Eagles',
              homeTeamScore: 87,
              homeTeamWin: false,
              awayTeam: 'Leduc Warriors',
              awayTeamScore: 89,
              awayTeamWin: true,
              gymShortName: 'Romero',
              gameNotes: 'I. Gonzales scored 35 pts on 8 3-pt shots for the Leduc Warriors win.'
            },
            {
              id: 14,
              gameDate: '2017-10-29',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'H & B Open',
              homeTeamScore: 102,
              homeTeamWin: true,
              awayTeam: 'Alberta Medical Supplies',
              awayTeamScore: 100,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: 'F. Eyao had 29 pts in a tight win for H&B Open'
            },
            {
              id: 15,
              gameDate: '2017-10-29',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'H & B Master',
              homeTeamScore: 69,
              homeTeamWin: true,
              awayTeam: 'Luzviminda',
              awayTeamScore: 62,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: 'E. Luis of H&B Master had 29 pts for the win.'
            },
            {
              id: 16,
              gameDate: '2017-10-29',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-B',
              homeTeam: 'Team Rolly',
              homeTeamScore: 65,
              homeTeamWin: false,
              awayTeam: 'Hotshots',
              awayTeamScore: 81,
              awayTeamWin: true,
              gymShortName: 'Romero',
              gameNotes: 'Bakks lead Hotshots with 24 pts.'
            },
            {
              id: 17,
              gameDate: '2017-10-29',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Bolero',
              homeTeamScore: 78,
              homeTeamWin: true,
              awayTeam: 'Phenoms',
              awayTeamScore: 67,
              awayTeamWin: false,
              gymShortName: 'Romero',
              gameNotes: 'Lopez paced Bolero for the win with 24 pts.'
            }
          ]
        },

        results20171029b: {
          title: 'October 29, 2017',
          subTitle: '@Holy Trinity Gym',
          columns: [
            { columnName: 'gameTime', columnTitle: 'Time', columnWidth: '8%' },
            { columnName: 'division', columnTitle: 'Division', columnWidth: '12%' },
            { columnName: 'homeTeam', columnTitle: 'Home Team', columnWidth: '12%' },
            { columnName: 'homeTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'awayTeam', columnTitle: 'Away Team', columnWidth: '12%' },
            { columnName: 'awayTeamScore', columnTitle: 'Score', columnWidth: '8%' },
            { columnName: 'gameNotes', columnTitle: 'Game Notes', columnWidth: '40%' }
          ],
          data: [
            {
              id: 18,
              gameDate: '2017-10-29',
              gameTime: '8:00 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'Huskies',
              homeTeamScore: 68,
              homeTeamWin: false,
              awayTeam: 'Cameron Homes',
              awayTeamScore: 125,
              awayTeamWin: true,
              gymShortName: 'Trinity',
              gameNotes: 'J. Giron lead Cameron Homes with 30 pts.'
            },
            {
              id: 19,
              gameDate: '2017-10-29',
              gameTime: '9:20 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Big Baller',
              homeTeamScore: 79,
              homeTeamWin: false,
              awayTeam: 'Full Force',
              awayTeamScore: 84,
              awayTeamWin: true,
              gymShortName: 'Trinity',
              gameNotes: 'Canlas paced Full Force with 27 pts.'
            },
            {
              id: 20,
              gameDate: '2017-10-29',
              gameTime: '10:40 AM',
              gameDay: 'Sunday',
              division: 'Open Division II-C',
              homeTeam: 'PSA Free Agents',
              homeTeamScore: 87,
              homeTeamWin: false,
              awayTeam: 'Team Morinville',
              awayTeamScore: 106,
              awayTeamWin: true,
              gymShortName: 'Trinity',
              gameNotes: 'De Jesus topscored for Morinville with 36 pts.'
            },
            {
              id: 21,
              gameDate: '2017-10-29',
              gameTime: '12:00 PM',
              gameDay: 'Sunday',
              division: 'Master Division B',
              homeTeam: 'Barako',
              homeTeamScore: 84,
              homeTeamWin: true,
              awayTeam: 'Team Pahirapan',
              awayTeamScore: 67,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: 'H. Fernandez lead Barako with 19 pts.'
            },
            {
              id: 22,
              gameDate: '2017-10-29',
              gameTime: '1:20 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-B',
              homeTeam: 'Changes for Hope',
              homeTeamScore: 80,
              homeTeamWin: true,
              awayTeam: 'Barako Boba Island',
              awayTeamScore: 78,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: 'B. Leyte poured in 19 pts in the Changes for Hope win.'
            },
            {
              id: 23,
              gameDate: '2017-10-29',
              gameTime: '2:40 PM',
              gameDay: 'Sunday',
              division: 'Master Division A',
              homeTeam: 'Amirax Wolverines',
              homeTeamScore: 78,
              homeTeamWin: true,
              awayTeam: 'Team Manash',
              awayTeamScore: 71,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: 'MJ Daquioag lead Amirax with 12 points.'
            },
            {
              id: 24,
              gameDate: '2017-10-29',
              gameTime: '4:00 PM',
              gameDay: 'Sunday',
              division: 'Open Division II-A',
              homeTeam: 'Amirax Terror Squad',
              homeTeamScore: 96,
              homeTeamWin: true,
              awayTeam: 'Akatsuki',
              awayTeamScore: 75,
              awayTeamWin: false,
              gymShortName: 'Trinity',
              gameNotes: 'D. Rodriquez lead a balanced attack for Amirax with 16 pts.'
            }
          ]
        }
      }
    },

    methods: {
      bracketChanged () {
        var a = this
        a.r20171014 = JSON.parse(JSON.stringify(a.results20171014))
        a.r20171015a = JSON.parse(JSON.stringify(a.results20171015a))
        a.r20171015b = JSON.parse(JSON.stringify(a.results20171015b))
        a.r20171021 = JSON.parse(JSON.stringify(a.results20171021))
        a.r20171022a = JSON.parse(JSON.stringify(a.results20171022a))
        a.r20171022b = JSON.parse(JSON.stringify(a.results20171022b))
        a.r20171028 = JSON.parse(JSON.stringify(a.results20171028))
        a.r20171029a = JSON.parse(JSON.stringify(a.results20171029a))
        a.r20171029b = JSON.parse(JSON.stringify(a.results20171029b))

        if (a.selectedBracket === 'Show All') {
          // Do Nothing as the data is being reset to show all.
        } else {
          a.r20171014.data = a.r20171014.data.filter(function (el) {
            return el.division === a.selectedBracket
          })

          a.r20171015a.data = a.r20171015a.data.filter(function (el) {
            return el.division === a.selectedBracket
          })

          a.r20171015b.data = a.r20171015b.data.filter(function (el) {
            return el.division === a.selectedBracket
          })
        }
      }
    },

    beforeMount () {
      var a = this
      a.r20171014 = JSON.parse(JSON.stringify(a.results20171014))
      a.r20171015a = JSON.parse(JSON.stringify(a.results20171015a))
      a.r20171015b = JSON.parse(JSON.stringify(a.results20171015b))
      a.r20171021 = JSON.parse(JSON.stringify(a.results20171021))
      a.r20171022a = JSON.parse(JSON.stringify(a.results20171022a))
      a.r20171022b = JSON.parse(JSON.stringify(a.results20171022b))
      a.r20171028 = JSON.parse(JSON.stringify(a.results20171028))
      a.r20171029a = JSON.parse(JSON.stringify(a.results20171029a))
      a.r20171029b = JSON.parse(JSON.stringify(a.results20171029b))
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
