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
          {position: { lng: 10.2, lat: 10 }},
          {position: { lng: 10.1, lat: 10 }},
          {position: { lng: 10.5, lat: 10.2 }},
          {position: { lng: 11.5, lat: 12.2 }}
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
