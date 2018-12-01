<template>
  <feed-back />
</template>
<script>
import FeedBack from '~/components/feedback'
export default {
  components: {
    FeedBack
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
