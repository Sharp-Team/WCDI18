export default function(username, oldpassword, password, repassword) {
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
  } else if (!repassword.trim() || repassword === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập lại mật khẩu`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!(password === repassword)) {
    this.$toast.open({
      message: `Mật khẩu và nhập lại mật khẩu không giống nhau`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$axios
      .post(`/api/user/password`, {
        username: username,
        oldpassword: oldpassword,
        newpassword: password
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
          message: 'Cập nhật mật khẩu thành công!',
          position: 'is-bottom',
          type: 'is-success'
        })
        this.$nuxt.$loading.finish()
        this.$router.push('/')
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
