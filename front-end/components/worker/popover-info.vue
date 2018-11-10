<template>
  <div class="bs-sample">
    <button type="button" class="btn btn-primary" data-toggle="popover">Click Me</button>
  </div>
</template>

<script>
export default {
beforeMount() {
  $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        html : true,
        content : `
          <h3>Thông tin chi tiết</h3>
          <table class="table">
            <tr>
              <td>Họ và tên</td>
              <td style="font-weight: bold">Phan Văn Đức</td>
            </tr>
            <tr class="table-success">
              <td>Email</td>
              <td style="font-weight: bold">phanduc0908@gmail.com</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td style="font-weight: bold">0981131870</td>
            </tr>
            <tr class="table-success">
              <td>Địa chi</td>
              <td style="font-weight: bold">Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội</td>
            </tr>
            <tr>
                <td>Nội dung</td>
                <td style="font-weight: bold">Hỏng gương xe máy honda ABCDE</td>
              </tr>
          </table>
        `
    });
    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
 });
}
}
</script>

<style>
  .bs-example{
    margin: 200px 150px 0;
  }
  .popover-title .close{
    position: relative;
    bottom: 3px;
  }

  tr{
    height: 30px;
  }
  .content{
    width: 100px;
  }
  .title_tr{
    width: 86px;
  }
</style>
