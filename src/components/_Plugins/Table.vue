<template>
  <div>
    <div class="header">
      <slot name="header">
        <h4 class="title">{{title}}</h4>
        <p class="category">{{subTitle}}</p>
      </slot>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table tableMargin" :class="tableClass">
        <thead>
          <th v-if="showEditButton" width="5%">Action</th>
          <th v-if="showDetailButton" width="3%"></th>
          <th v-for="c in columns" :key="c.columnName" :width="c.columnWidth">{{ c.columnTitle }}</th>
          <th v-if="showSemis" width="5%">In Semis</th>
          <th v-if="showWildcard" width="5%">Wildcard</th>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td v-if="showEditButton">
              <button type="button" class="btn btn-info" @click="editButtonClicked(item)">Edit</button>
            </td>
            <td v-if="showDetailButton">
              <button type="button" class="btn btn-info btn-xs" @click="detailButtonClicked(item)" :title="detailButtonText">
                <i class="fa fa-commenting" aria-hidden="true"></i>
              </button>
            </td>
            <td v-for="c in columns" v-if="hasValue(item, c.columnName)" :key="c.columnName">{{itemValue(item, c.columnName)}}</td>
            <td v-if="showSemis">
              <i class="fa fa-check-circle-o" aria-hidden="true" v-if="item.ClinchedSemis"></i>
            </td>
            <td v-if="showWildcard">
              <i class="fa fa-check-circle-o" aria-hidden="true" v-if="item.ClinchedWildcard"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      showEditButton: {
        type: Boolean,
        default: false
      },
      showDetailButton: {
        type: Boolean,
        default: false
      },
      detailButtonText: {
        type: String,
        default: ''
      },
      showSemis: {
        type: Boolean,
        default: false
      },
      showWildcard: {
        type: Boolean,
        default: false
      },
      columns: Array,
      data: Array,
      type: {
        type: String, // striped | hover
        default: 'Striped'
      },
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    },

    computed: {
      tableClass () {
        return `table-${this.type}`
      }
    },

    methods: {
      hasValue (item, column) {
        return item[column] !== 'undefined'
      },

      itemValue (item, column) {
        var a = this
        var propVals = column.split('.')
        var res = item
        for (var i = 0; i < propVals.length; i++) {
          res = res[ propVals[i] ]
        }

        if (column.toUpperCase().indexOf('DATE') >= 0) {
          res = a.convertDateStringToWord(res)
        }

        return res

        // var val = item[column]

        // if (column === 'HomeTeam.TeamName' || column === 'HomeTeamScore') {
        //   var propVals = column.split('.')
        //   var res = item
        //   for (var i = 0; i < propVals.length; i++) {
        //     res = res[ propVals[i] ]
        //   }
        // }

        // if (column.toUpperCase().indexOf('DATE') >= 0) {
        //   val = a.convertDateStringToWord(val)
        // }

        // return val
      },

      convertDateStringToWord (datestring) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var tempDate = datestring.split('-')
        return tempDate[2] + ' ' + months[Number(tempDate[1]) - 1] + ' ' + tempDate[0]
      },

      editButtonClicked (obj) {
        this.$emit('editButtonClick', obj)
      },

      detailButtonClicked (obj) {
        this.$emit('detailButtonClick', obj)
      }
    }
  }

</script>

<style>
.tableMargin {
  margin-left: 20px !important;
}
</style>
