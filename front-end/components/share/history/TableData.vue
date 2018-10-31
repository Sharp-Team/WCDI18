<template>
<div class="table-data">
  <table class="table table-striped">
  <thead class="thead">
    <tr>
    <th>Thời gian</th>
    <th>Công việc</th>
    <th>Trạng thái</th>
    <th class="d-none d-sm-block">Ngày đặt</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in list" :key="item.id">
      <td class="d-none d-sm-block">{{ item.time }}</td>
      <!-- Display in Mobile -->
      <td class="d-block d-sm-none">
          {{ item.time }}<br>
          {{ item.date }}
      </td>
      <td class="employee">{{ item.name }}</td>
      <td :class="{'done': item.status === 'Hoàn thành', 'fail': item.status === 'Hủy'}" >{{ item.status }}</td>
      <td class="d-none d-sm-block">{{ item.date }}</td>
    </tr>
  </tbody>
  </table>
  <div class="paging">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
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
      list: [
        { time: '16:42:18', name: 'Sửa điện thoại Nokia', status: 'Hủy', date: '28/08/2018' },
        { time: '16:42:18', name: 'Sửa điện tủ lạnh Sharp', status: 'Hoàn thành', date: '28/08/2018' },
        { time: '16:42:18', name: 'Mua bán phế liệu', status: 'Hủy', date: '28/08/2018' },
        { time: '16:42:18', name: 'Hỏng xay máy Honda', status: 'Hoàn thành', date: '28/08/2018' },
        { time: '16:42:18', name: 'Chữa bệnh ỉa chảy', status: 'Hoàn thành', date: '28/08/2018' },
      ]
    }
  }
};
</script>
