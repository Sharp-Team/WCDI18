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
        <card-left></card-left>
      </div>
      <div class="right col-md-9">
        <card-right></card-right>
        <!-- Tab-List -->
        <div class="tab-list d-block d-sm-none">
          <tab-list></tab-list>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
import CardLeft from './../profile/CartLeft';
import CardRight from './../change-password/CartRight'
import TabList from './../common/TabList'
export default {
    components:{
        CardLeft,
        CardRight,
        TabList
    }
}
</script>


<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
