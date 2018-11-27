export default () => {
  var modal = $('#confirm-ModalCustomer')
  var btnNoti = $('#showConfirmCustomer')
  var btnCloseNoi = $('#confirmCloseModalCustomer')
  var modalContent = $('#confirm-ModalContentCustomer')

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
