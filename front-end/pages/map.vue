<template>
  <div>
    <no-ssr>
    <GmapMap :center="{lat:10, lng:10}" :zoom="7" map-type-id="terrain" id="map">
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
        markers: [
          {position: { lng: 10.2, lat: 10 }},
          {position: { lng: 10.1, lat: 10 }}
        ]
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
