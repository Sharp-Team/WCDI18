<template>
  <register />
</template>

<script>
import Register from '../components/register'

export default {
  transition: 'slider-right',
  components: {
    Register
  },
  layout: 'user',
  middleware: 'signined'
}
</script>
