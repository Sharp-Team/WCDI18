<template>
<div class="profile">
  <div class="container">
    <div class="crumb d-none d-md-block">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
        <li class="breadcrumb-item active">Thông tin cá nhân</li>
      </ul>
    </div>
    <div class="row">
      <div class="left col-md-3 col-sm-12">
        <div class="avata-img d-none d-md-block">
          <img src="../../assets/images/share/profile.jpg" alt="">
        </div>
        <div class="profile-score">
          <div class="info">
            <p class="name">Phan Văn Đức</p>
            <p>Điểm tích luỹ: <span class="score">100 điểm</span></p>
          </div>
          <div class="money">
            <p>Tổng tiền sử dụng: <span class="total">3.000.000đ</span></p>
            <p>Bạn tiết kiệm được: <span class="income">500.000đ</span></p>
          </div>
        </div>
        <div class="account-info d-none d-md-block">
          <h4>Thông tin tài khoản</h4>
          <ul>
            <li><a href="#">Đổi mật khẩu</a></li>
            <li><a href="#">Quản lý đơn hàng</a></li>
            <li><a href="#">Tích điểm</a></li>
          </ul>
        </div>
      </div>
      <div class="right col-md-9">
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
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  .profile{
      background-color: #F4F0F0;
    .breadcrumb{
      background-color:  #F4F0F0;
      .breadcrumb-item:first-child::after{
        display: inline-block;
        color: #6c757d;
        content: ">";
        padding-left: 10px;
        padding-right: 0px;
      }
      .breadcrumb-item:last-child::before{
        display: inline-block;
        color: #6c757d;
        content: "";
      }
      li{
          color: #564a3a;
      }
      a{
        color: #564a3a;
      }
    }
    .left{
      .avata-img{
        text-align: center;
        img{
          height: 100px;
          width: 100px;
          border-radius: 50%;
        }
      }
      .profile-score{
        padding-top: 10px;
        text-align: left;
        p{
            margin-bottom: 2px;
        }
        .info{
          padding-bottom: 20px;
          .name{
            color: #0a0909;
            font-weight: bold;
          }
          .score{
            color: #0a0909;
            font-weight: bold;
          }
        }
        .money{
          padding-bottom: 30px;
          p{
            color: #666666;
          }
          .total{
            color: $color-orange;
          }
          .income{
            color:#d05e0d;
          }
        }
      }
      .account-info{
        border-top: 1px solid #d0c0c0;
        text-align: left;
        ul{
          margin-left: -30px;
        }
        ul li{
          list-style: none;
        }
        ul li a{
          color: #826b4c;
        }
        h4{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 18px;
          color: #0a0909;
          font-weight: bold;
          padding-top: 20px;
        }
      }
    }
    .right{
      background-color: #ffffff;
      text-align: right;
      .form-info{
        .form-control:disabled{
          background-color: #ffffff;
        }
        padding-top: 40px;
        .confirm{
          position: absolute;
          right: 30px;
          top: 8px;
          i{
            border-radius: 50%;
            background: #2EBE4A;
            color: white;
            padding: 2px;
            font-size: 11px
          }
          span{
            font-style: italic;
            font-size: 12px;
            padding-right: 5px;
          }
        }
      }
      .title{
        border-bottom: 1px solid #d0c0c0;
        h3{
          text-align: left;
          text-transform: uppercase;
          font-family: sans-serif;
          font-size: 18px;
          padding-bottom: 15px;
          padding-top: 20px;
        }
      }
    }
  }


  @media (max-width: 576px) {
    .profile{
      .form-info{
        label{
          text-align: left;
        }
      }
    }
  }
  @media (max-width: 766px) and (min-width: 577px) {
    .profile{
      .form-info{
        label{
          text-align: left;
        }
      }
    }
  }
</style>
