<template>
  <div class="d-none d-sm-block is-content">
    <div class="title">
      <h3>Lịch sử giao dịch</h3>
    </div>
    <table-data />
  </div>
</template>

<script>
import TableData from './TableData'

export default {
  components: {
    TableData
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/profile.scss';
</style>
