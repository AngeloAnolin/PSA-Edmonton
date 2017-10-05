<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
  /* global google */
  export default {
    name: 'google-map',

    props: {
      name: null,
      latitude: null,
      longitude: null,
      mapTitle: null
    },

    data: function () {
      return {
        mapName: this.name + '-map',
        mapToolTip: this.mapTitle,
        lat: null,
        lng: null
      }
    },

    mounted: function () {
      var a = this
      a.lat = parseFloat(a.latitude)
      a.lng = parseFloat(a.longitude)

      const position = new google.maps.LatLng(a.lat, a.lng)
      const element = document.getElementById(this.mapName)
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(a.lat, a.lng)
      }

      /* eslint-disable no-unused-vars */
      const map = new google.maps.Map(element, options)
      const marker = new google.maps.Marker({
        position: position,
        title: a.mapToolTip,
        map
      })
      /* eslint-enable no-unused-vars */
    }
  }
</script>

<style scoped>
  .google-map {
    width: 100%;
    height: 640px;
    margin: 0 auto;
    background: gray;
  }
</style>
