<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/header/navbar';
import navbar from '../assets/js/navbar';
export default {
  components: {
    Navbar
  },
  beforeMount() {
    navbar()
  },
}
</script>

<style lang="scss" scoped>
</style>

