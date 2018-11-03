<template>
  <div>
    <no-ssr>
    <GmapMap :center="{lat:14.058324, lng:108.277199}" :zoom="7" map-type-id="terrain" id="map">
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
        center: {
          lat: 0,
          lng: 0
        }
      }
    },
    methods: {
      ready() {
        this.$refs.map.resize()
      }
    }
  }

</script>

<style lang="scss" scoped>
  #map {
    margin-top: 50px;
    width: 100%;
    height: 100vh;
  }

</style>
