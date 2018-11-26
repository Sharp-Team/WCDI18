export default () => {
  var modal = $('#confirm-Modal')
  var btnNoti = $('#showConfirmWorker')
  var btnCloseNoi = $('#confirmCloseModal')
  var modalContent = $('#confirm-ModalContent')

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
