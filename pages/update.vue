<template>
  <user-info/>
</template>
<script>
import UserInfo from '~/components/user/Update'
export default {
  components: {
    UserInfo
  },
  layout: 'user'
  // middleware: 'authentication'
}
</script>
