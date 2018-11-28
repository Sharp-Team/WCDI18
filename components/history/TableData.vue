<template>
  <div class="table-data">
    <table class="table table-striped">
      <thead class="thead">
        <tr>
          <th>Thời gian</th>
          <th>Công việc</th>
          <th>Trạng thái</th>
          <th class="d-none d-sm-block">Đối tượng giao dịch</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in data"
          :key="item.id">
          <td class="d-none d-sm-block">{{ item.time }}</td>
          <!-- Display in Mobile -->
          <td class="d-block d-sm-none">
            {{ item.time }}
          </td>
          <td class="employee">{{ item.job }}</td>
          <td :class="{'done': item.status === 'Hoàn thành', 'fail': item.status === 'Hủy'}" >{{ item.status }}</td>
          <td class="d-none d-sm-block">{{ item.object }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';
@import '~/assets/scss/profile.scss';
</style>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  computed: {
    username() {
      return this.$store.getters.GET_USERNAME
    }
  },
  beforeMount() {
    const username = this.$store.getters.GET_USERNAME
    this.$axios
      .post(`/api/deal/list`, {
        username: username
      })
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
