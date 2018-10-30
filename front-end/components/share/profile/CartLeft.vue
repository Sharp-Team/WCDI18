<template>
    <div>
        <div class="avata-img d-none d-md-block">
          <img src="~/assets/images/share/profile.jpg" alt="">
        </div>
        <div class="profile-score">
          <div class="info">
            <p class="name">Phan Văn Đức</p>
            <p>Điểm tích luỹ: <span class="score">100 điểm</span></p>
          </div>
          <div class="money">
            <p>Tổng tiền sử dụng: <span class="total">3.000.000đ</span></p>
            <p>Bạn tiết kiệm được: <span class="income">500.000đ</span></p>
          </div>
        </div>
        <div class="account-info d-none d-md-block">
          <h4>Thông tin tài khoản</h4>
          <ul>
            <li><a href="#">Đổi mật khẩu</a></li>
            <li><a href="#">Quản lý đơn hàng</a></li>
            <li><a href="#">Tích điểm</a></li>
          </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
