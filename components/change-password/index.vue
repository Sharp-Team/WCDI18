<template>
  <div class="profile">
    <div class="container">
      <div class="row content">
        <div class="left col-md-3 col-sm-12">
          <card-left />
        </div>
        <div class="right col-md-9">
          <card-right />
          <!-- Tab-List -->
          <div class="tab-list d-block d-sm-none">
            <tab-list active="password" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardLeft from '~/components/user/CartLeft'
import TabList from '~/components/user/TabList'
import CardRight from './CartRight'

export default {
  components: {
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
