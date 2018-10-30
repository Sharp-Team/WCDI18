<template>
    <div>
        <div class="title">
          <h3>Thông tin cơ bản</h3>
        </div>

        <div class="form-info">
          <form action="">
            <!-- Full Name -->
            <div class="form-group row">
              <label for="fullname" class="col-sm-12 col-md-3 col-form-label">Họ tên đầy đủ</label>
              <div class="col-sm-12 col-md-7">
                <input type="text" class="form-control" id="fullname" value="Phan Văn Đức" disabled>
              </div>
            </div>
            <!-- Email -->
            <div class="form-group row">
              <label for="email" class="col-sm-3 col-form-label">Địa chỉ E-mail</label>
              <div class="col-sm-12 col-md-7">
                <input type="text" class="form-control" id="email" value="phanduc0908@gmail.com" disabled>
              </div>
            </div>
            <!-- Mobile -->
            <div class="form-group row">
              <label for="mobile" class="col-sm-12 col-md-3 col-form-label">Mobile</label>
              <div class="col-sm-12 col-md-7">
                <input type="text" class="form-control" id="mobile" value="0981131870" disabled>
                <div class="confirm">
                  <span>Đã xác thực</span>
                  <i class="fas fa-check"></i>
                </div>
              </div>
            </div>
            <!-- Đối tượng -->
            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Đối tượng</label>
              <div class="col-sm-12 col-md-7">
                <select class="form-control" disabled>
                  <option>Khách hàng</option>
                </select>
              </div>
            </div>
            <!-- Address -->
            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Tỉnh/Thành phố</label>
              <div class="col-sm-12 col-md-7">
                <select class="form-control" disabled>
                  <option>Hà Nội</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Quận/Huyện</label>
              <div class="col-sm-12 col-md-7">
                <select class="form-control" disabled>
                  <option>Chương Mỹ</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Phường/Xã</label>
              <div class="col-sm-12 col-md-7">
                <select class="form-control" disabled>
                  <option>Hoàng Diệu</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Địa chỉ</label>
              <div class="col-sm-12 col-md-7">
                <textarea class="form-control" rows="3" disabled>Xóm Đình, thôn Cốc Thượng, xã Hoàng Diệu, huyện Chương Mỹ, thành phố Hà Nội
                </textarea>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-sm-12 col-md-3 col-form-label">Loại địa chỉ</label>
              <div class="col-sm-12 col-md-7">
                <select class="form-control" disabled>
                  <option>Nhà riêng</option>
                </select>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>

<style lang="scss"  scoped>
  @import '~/assets/scss/variable.scss';
  @import '~/assets/scss/profile.scss';
</style>
