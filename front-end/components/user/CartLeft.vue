<template>
    <div>
        <div class="avata-img d-none d-md-block">
          <img
            src="/images/icon-navbar/user.jpg"
            alt="">
        </div>
        <div class="profile-score">
          <div class="info text-center">
            <p class="name">{{ name }}</p>
            <p>Điểm tích luỹ:
              <span class="score">100 điểm</span>
            </p>
          </div>
          <div class="money text-center">
            <p>Tổng tiền sử dụng:
              <span class="total">3.000.000đ</span>
            </p>
            <p>Bạn tiết kiệm được:
              <span class="income">500.000đ</span>
            </p>
          </div>
        </div>
        <div class="account-info d-none d-md-block">
          <h4>Thông tin tài khoản</h4>
          <ul>
            <li>
              <a href="/change-password">Đổi mật khẩu</a>
            </li>
            <li>
              <a href="/history">Quản lý giao dịch</a>
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
export default {
  data () {
    return {
      name: 'Phan Văn Đức'
    }
  }
};

</script>
