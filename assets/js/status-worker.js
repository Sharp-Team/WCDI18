export default () => {
  var modal = $('#status-worker-modal')
  var btnStatus = $('#show-status-worker')
  var btnCloseStatus = $('#status-close-modal-worker')
  var modalContent = $('#status-worker-content')

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
