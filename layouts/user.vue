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

export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>
