export default () => {
  var modal = $('#noti-ModalCustomer')
  var btnNoti = $('#showNotiCustomer')
  var btnCloseNoi = $('#notiCloseModalCustomer')
  var modalContent = $('#noti-ModalContentCustomer')

  btnNoti.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-content-1')
  })

  btnCloseNoi.click(() => {
    modalContent.addClass('modal-content-1')
    modal.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'noti-Modal') {
      modalContent.addClass('modal-content-1')
      modal.css('visibility', 'hidden')
    }
  })
}
