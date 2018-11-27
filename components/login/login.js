export default function(username, password) {
  window.scrollTo(0, top)
  if (!username.trim() || username === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập tên đăng nhập`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!password.trim() || password === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập mật khẩu`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$axios
      .post(`/api/user/signin`, {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.error) {
          this.$toast.open({
            message: response.data.error,
            position: 'is-bottom',
            type: 'is-danger'
          })
          return
        }
        this.$toast.open({
          message: 'Đăng nhập thành công!',
          position: 'is-bottom',
          type: 'is-success'
        })
        this.$store.dispatch('SET_USERNAME', username)
        this.$store.dispatch('SET_AVATAR', response.data.data)
        this.$nuxt.$loading.finish()
        this.$router.push('/')
        location.reload()
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
