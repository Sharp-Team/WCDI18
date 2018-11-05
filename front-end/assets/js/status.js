export default () => {
  var modal = $('#status-Modal')
  var btnStatus = $('#showStatusWorker')
  var btnCloseStatus = $('#statusCloseModal')
  var modalContent = $('#status-ModalContent')

  btnStatus.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-menu-content-1')
    modalContent.addClass('modal-menu-content-2')
  })

  btnCloseStatus.click(() => {
    modalContent.addClass('modal-menu-content-1')
    modalContent.removeClass('modal-menu-content-2')
    modal.css('visibility', 'hidden')
  })
}
