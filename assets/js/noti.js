export default () => {
  var modal = $('#noti-Modal')
  var btnNoti = $('#showNotiWorker')
  var btnCloseNoi = $('#notiCloseModal')
  var modalContent = $('#noti-ModalContent')

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
