export default function(
  username,
  password,
  repassword,
  avatar,
  email,
  full_name,
  phone_number,
  province,
  district,
  address_detail,
  object,
  career,
  indentify_card
) {
  const regexEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  window.scrollTo(0, top)
  if (!full_name.trim() || full_name === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập họ tên`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!email.trim() || email === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập email`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!phone_number.trim() || phone_number === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập số điện thoại`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!username.trim() || username === undefined) {
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
  } else if (!province.trim() || province === undefined) {
    this.$toast.open({
      message: `Bạn phải chọn tỉnh/ thành phố`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!district.trim() || district === undefined) {
    this.$toast.open({
      message: `Bạn phải chọn quận/ huyện`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!address_detail.trim() || address_detail === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập địa chỉ cụ thể`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!regexEmail.test(email)) {
    this.$toast.open({
      message: `Không đúng định dạng email`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (password.length < 8) {
    this.$toast.open({
      message: `Mật khẩu phải chưa ít nhất 8 ký tự`,
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
      .post(`/api/user/signup`, {
        username: username,
        password: password,
        avatar: '/images/user.jpg',
        email: email,
        full_name: full_name,
        phone_number: phone_number,
        province: province,
        district: district,
        address_detail: address_detail,
        indentify_card: indentify_card,
        object: object,
        career: career
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
          message: 'Đăng ký thành công!',
          position: 'is-bottom',
          type: 'is-success'
        })
        this.$nuxt.$loading.finish()
        this.$router.push('/login')
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
