export default () => {
  var modal = $('#scan-Customer-Modal')
  var btnScan = $('#showScanCustomer')
  var btnCloseScan = $('#scanCustomerCloseModal')
  var modalContent = $('#scan-CustomerModalContent')

  btnScan.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-content-1')
  })

  btnCloseScan.click(() => {
    modalContent.addClass('modal-content-1')
    modal.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'scan-Customer-Modal') {
      modalContent.addClass('modal-content-1')
      modal.css('visibility', 'hidden')
    }
  })
}
