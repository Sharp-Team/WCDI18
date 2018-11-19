<template>
  <div class="table-data">
    <table class="table table-striped">
      <thead class="thead">
        <tr>
          <th>Thời gian</th>
          <th>Công việc</th>
          <th>Trạng thái</th>
          <th class="d-none d-sm-block">Người làm việc</th>
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
    <div class="paging">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
          >
            1
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
          >
            2
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
          >
            3
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#"
          >
            4
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="#">5</a></li>
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
