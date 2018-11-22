<template>
  <login />
</template>

<script>
import Login from '../components/login'
export default {
  components: {
    Login
  },
  layout: 'user',
  beforeCreate() {
    if (this.$store.getters.GET_USERNAME) {
      this.$router.push('/')
    }
  }
}
</script>
