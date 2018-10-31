<template>
  <div>
    <div class="image">
    </div>
    <div class="footer">
      <div class="action">
        <div class="icon status">
          <a href="#"><i class="far fa-smile "></i></a>
          <span class="tooltip-status">
              Trạng thái
          </span>
        </div>
        <div class="icon history">
          <a href="#">
            <i class="fas fa-history "></i>
          </a>
          <span class="tooltip-history">
            Lịch sử
          </span>
        </div>
        <div class="icon search">
          <a href="#"><i class="fas fa-search-location"></i></a>
          <span class="tooltip-search">
            Quét
          </span>
        </div>
        <div class="icon noti">
          <a href="#"><i class="fas fa-bell"></i></a>
          <span class="tooltip-noti">
            Thông báo
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/variable.scss';
  .image{
    background-image: url('./../../../assets/images/Desktop.jpg');
    width: 100%;
    height: 500px;
  }
  .footer{
      width: 100%;
      height: 50px;
      background-color: #232b2b;
      position: absolute;
      bottom:0;
      .action{
          text-align: center;
          padding-top: 10px;
        .icon{
          display: inline-flex;
          padding-right: 15px;
          padding-left: 15px;
          position: relative;
          i{
            font-size: 25px;
            color: #ffffff;
            transition: transform .2s;
          }
          i:hover{
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.5); 
          }
          span{
            visibility: hidden;
            width: 120px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;

            /* Position the tooltip */
            position: absolute;
            z-index: 1;
            bottom: 140%;
            left: 50%;
            margin-left: -60px;
          }
        }
        .status:hover .tooltip-status{
            visibility: visible;
        }
        .history:hover .tooltip-history{
            visibility: visible;
        }
        .search:hover .tooltip-search{
            visibility: visible;
        }
        .noti:hover .tooltip-noti{
            visibility: visible;
        }
      }
  }
</style>
