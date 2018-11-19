<template>
  <div>
    <navbar/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import Navbar from '~/components/header/Navbar'
import MyFooter from '~/components/footer/Footer'
import navbar from '~/assets/js/navbar'

export default {
  components: {
    Navbar,
    MyFooter
  },
  beforeMount() {
    navbar
  }
}
</script>
