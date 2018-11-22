<template>
  <profile />
</template>

<script>
import Profile from '../components/profile'
export default {
  components: {
    Profile
  },
  layout: 'user',
  beforeCreate() {
    if (!this.$store.getters.GET_USERNAME) {
      this.$router.push('/')
    }
  }
}
</script>
