<template>
<div class="profile">
  <div class="container">
    <div class="crumb d-none d-md-block">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
        <li class="breadcrumb-item active">Thông tin cá nhân</li>
      </ul>
    </div>
    <div class="row content">
      <div class="left col-md-3 col-sm-12">
        <card-left />
      </div>
      <div class="right col-md-9">
        <cart-right></cart-right>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CardLeft from './CartLeft';
import CartRight from './CartRight';
export default {
  components:{
    CardLeft,
    CartRight
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
