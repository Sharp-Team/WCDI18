export default () => {
  var modal = $('#scan-Modal')
  var btnScan = $('#showScanWorker')
  var btnCloseScan = $('#scanCloseModal')
  var modalContent = $('#scan-ModalContent')

  btnScan.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-content-1')
  })

  btnCloseScan.click(() => {
    modalContent.addClass('modal-content-1')
    modal.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'scan-Modal') {
      modalContent.addClass('modal-content-1')
      modal.css('visibility', 'hidden')
    }
  })
}
