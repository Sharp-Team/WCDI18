<template>
  <div>
    <input
      v-model="username"
      type="text">
    <input
      v-model="title"
      type="text">
    <input
      v-model="content"
      type="text">
    <button @click="enterUsername">enter</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      username: '',
      title: '',
      content: ''
    }
  },
  mounted() {
    const { socket } = this.$io
    socket.on('updateNotificationWorker', this.updateNotification)
  },
  methods: {
    enterUsername() {
      this.$io.sendNotificationWorker({
        username: this.username,
        title: this.title,
        content: this.content
      })
    },
    updateNotification(data) {
      console.log(data)
    }
  }
}
</script>
