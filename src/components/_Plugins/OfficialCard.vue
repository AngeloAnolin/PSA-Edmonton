<template>
  <div class="card card-user">
    <div class="image" style="padding-top: 5px;">
      <img src="static/img/yellowbackground.png" alt="...">
    </div>
    <div class="content">
      <div class="author">
        <img class="avatar border-white" :src="'static/img/' + imageFile" alt="">
        <h4 class="title">
          {{ officialName }}
          <br>
          <small>{{ position }}</small>
        </h4>
      </div>
      <p class="description text-center">
        {{ shortDesc }}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <!-- <a>
          {{ contactPhone }}
        </a> -->
        <div class="col-md-12">
          <a :href="'tel:' + contactPhone">
            <h5>{{ contactPhone }}
              <br>
              <small>Phone</small>
            </h5>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      officialName: String,
      position: String,
      imageFile: String,
      shortDesc: String,
      contactPhone: String
    },

    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Files'
          },
          {
            title: '2GB',
            subTitle: 'Used'
          },
          {
            title: '24,6$',
            subTitle: 'Spent'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>
  
</style>
