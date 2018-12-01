<template>
  <change-password />
</template>
<script>
import ChangePassword from '~/components/change-password'

export default {
  transition: 'slider-left',
  components: {
    ChangePassword
  },
  layout: 'user',
  middleware: 'authentication'
}
</script>
