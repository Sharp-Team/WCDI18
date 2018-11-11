<template>
  <div>
    <navbar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Navbar from '~/components/header/navbar';
import MyFooter from '~/components/footer/footer';
import navbar from '../assets/js/navbar';
export default {
  components: {
    Navbar,
    MyFooter
  },
  beforeMount() {
    navbar
  },
}
</script>

<style lang="scss" scoped>
</style>

