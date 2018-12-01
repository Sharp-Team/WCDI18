<template>
  <register />
</template>

<script>
import Register from '../components/register'

export default {
  components: {
    Register
  },
  layout: 'user',
  // middleware: 'signined',
  beforeCreate() {
    if (this.$store.getters.GET_USERNAME) {
      this.$router.push('/')
    }
  }
}
</script>
