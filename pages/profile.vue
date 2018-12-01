<template>
  <profile />
</template>

<script>
import Profile from '../components/profile'
export default {
  transition: 'slider-left',
  components: {
    Profile
  },
  layout: 'user',
  middleware: 'authentication'
}
</script>
