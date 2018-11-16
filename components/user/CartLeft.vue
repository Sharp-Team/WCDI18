<template>
    <div>
        <div class="avata-img d-none d-md-block">
          <img
            :src="avatar"
            alt="">
        </div>
        <div class="profile-score">
          <div class="info text-center">
            <p class="name">{{ username }}</p>
            <p>Điểm tích luỹ:
              <span class="score">0 điểm</span>
            </p>
          </div>
          <div class="money text-center">
            <p>Tổng tiền sử dụng:
              <span class="total">0đ</span>
            </p>
            <p>Bạn tiết kiệm được:
              <span class="income">0đ</span>
            </p>
          </div>
        </div>
        <div class="account-info d-none d-md-block">
          <h4>Thông tin tài khoản</h4>
          <ul>
            <li>
              <nuxt-link to="/change-password">Đổi mật khẩu</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/history">Quản lý giao dịch</nuxt-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    username() {
      return this.$store.getters.GET_USERNAME
    },
    avatar() {
      return this.$store.getters.GET_AVATAR
    }
  }
}
</script>
