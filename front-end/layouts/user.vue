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
export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
</style>

