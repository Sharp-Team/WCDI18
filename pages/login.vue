<template>
  <login />
</template>

<script>
import Login from '../components/login'
export default {
  transition: 'slider-left',
  components: {
    Login
  },
  layout: 'user',
  middleware: 'signined'
}
</script>
