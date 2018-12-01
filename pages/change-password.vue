<template>
  <change-password />
</template>
<script>
import ChangePassword from '~/components/change-password'

export default {
  components: {
    ChangePassword
  },
  layout: 'user',
  // middleware: 'authentication',
  beforeCreate() {
    if (!this.$store.getters.GET_USERNAME) {
      this.$router.push('/')
    }
  }
}
</script>
