<template>
  <feed-back />
</template>
<script>
import FeedBack from '~/components/feedback'
export default {
  transition: 'slider-left',
  components: {
    FeedBack
  },
  layout: 'user',
  middleware: 'authentication'
}
</script>
