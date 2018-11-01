<template>
  <div>
    <no-ssr>
      <googlemaps-map ref="map" :center="center" @ready="ready"></googlemaps-map>
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
.vue-google-map {
  width: 500px;
  height: 400px;
}
</style>
