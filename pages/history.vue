<template>
  <history />
</template>

<script>
import History from '~/components/history'
export default {
  transition: 'slider-right',
  components: {
    History
  },
  layout: 'user',
  middleware: 'authentication'
}
</script>
