export default function(
  username,
  full_name,
  phone_number,
  province,
  district,
  address_detail,
  object,
  jobSelected
) {
  window.scrollTo(0, top)
  if (!full_name.trim() || full_name === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập họ tên`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!phone_number.trim() || phone_number === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập số điện thoại`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!province.trim() || province === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập tỉnh/ thành phố`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!district.trim() || district === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập quận/ huyện`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!address_detail.trim() || address_detail === undefined) {
    this.$toast.open({
      message: `Bạn phải nhập địa chỉ cụ thể`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else if (!object.trim() || object === undefined) {
    this.$toast.open({
      message: `Bạn phải chọn đối tượng`,
      position: 'is-bottom',
      type: 'is-danger'
    })
  } else {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    this.$axios
      .post(`/api/user/update`, {
        username: username,
        full_name: full_name,
        phone_number: phone_number,
        province: province,
        district: district,
        address_detail: address_detail,
        object: object,
        career: jobSelected
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
        this.$axios
          .get(`/api/user/signout`)
          .then(response => {
            console.log(response)
            this.$nuxt.$loading.finish()
            this.$router.push('/')
            location.reload()
          })
          .catch(function(error) {
            console.log(error)
          })
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
