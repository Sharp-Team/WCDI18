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
        content : '<table><tr><td class="title_tr">Họ và tên</td><td class="content">Phan Văn Đức</td></tr><tr><td class="title_tr">Địa chỉ E-Mail</td><td class="content">phanduc0908@gmail.com</td></tr><tr><td class="title_tr">Số điện thoại</td><td class="content">0981131870</td></tr><tr><td class="title_tr">Địa chi</td><td class="content">Km29 ĐạI lộ Thăng Long, Thạch Hoà, Thạch Thất, Hà Nội</td></tr></table>'
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
