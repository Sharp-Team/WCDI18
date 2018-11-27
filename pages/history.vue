<template>
  <history />
</template>

<script>
import History from '~/components/history'
export default {
  components: {
    History
  },
  layout: 'user',
  middleware: 'authentication',
  beforeCreate() {
    if (!this.$store.getters.GET_USERNAME) {
      this.$router.push('/')
    }
  }
}
</script>
