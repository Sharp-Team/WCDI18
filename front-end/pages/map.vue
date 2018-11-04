<template>
  <div>
    <no-ssr>
    <GmapMap
      :center="{lat: this.latCurrent, lng: this.lngCurrent}"
      :zoom="12"
      map-type-id="terrain"
      id="map">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    </no-ssr>
    <footer-map></footer-map>
  </div>
</template>

<script>
  import FooterMap from '../components/footer/footer-map';
  export default {
    components: {
      FooterMap
    },
    layout: 'map',
    data() {
      return {
        latCurrent: 0,
        lngCurrent: 0,
        markers: [
          {position: { lat: 21.03, lng: 105.54 }},
          {position: { lat: 21.04, lng: 105.55 }},
          {position: { lat: 21.05, lng: 105.50 }},
          {position: { lat: 20.98, lng: 105.57 }}
        ],
        error: null
      }
    },
    methods: {
      ready() {
        this.$refs.map.resize()
      }
    },
    mounted() {
      if (!navigator.geolocation) {
          console.log('Geolocation is not supported by your browser')
          return
        }
        const success = (position) => {
          this.latCurrent = position.coords.latitude
          this.lngCurrent = position.coords.longitude
          console.log(this.latCurrent)
          console.log(this.lngCurrent)
        }
        function error() {
          console.log('Unable to retrieve your location')
        }
        navigator.geolocation.getCurrentPosition(success, error)
    },
  }

</script>

<style lang="scss" scoped>
  #map {
    margin-top: 50px;
    width: 100%;
    height: 100vh;
  }

</style>
