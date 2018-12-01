export default () => {
  /**
   * NOTIFICATION
   */
  var modalNotification = $('#modalNotification')
  var showNotification = $('#showNotification')
  var closeNotification = $('#closeNotification')
  var contentNotification = $('#contentNotification')

  showNotification.click(() => {
    modalNotification.css('visibility', 'visible')
    contentNotification.removeClass('contentNotification')
  })

  closeNotification.click(() => {
    contentNotification.addClass('contentNotification')
    modalNotification.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'modalNotification') {
      contentNotification.addClass('contentNotification')
      modalNotification.css('visibility', 'hidden')
    }
  })

  /**
   * DIRECTION
   */

  var modalDirection = $('#modalDirection')
  var showNote = $('#showDirection')
  let flag = true
  showNote.click(() => {
    if (flag == true) {
      modalDirection.addClass('modal-note')
      flag = false
    } else if (flag == false) {
      modalDirection.removeClass('modal-note')
      flag = true
    }
  })

  /**
   * NOTE
   */

  var modalNote = $('#modalNote')
  var showNote = $('#showNote')
  let flagNote = true
  showNote.click(() => {
    if (flagNote == true) {
      modalNote.addClass('modal-note')
      flagNote = false
    } else if (flagNote == false) {
      modalNote.removeClass('modal-note')
      flagNote = true
    }
  })

  /**
   * STATUS WORKER
   */
  var modalStatusWorker = $('#modalStatusWorker')
  var showStatusWorker = $('#showStatusWorker')
  var closeStatusWorker = $('#closeStatusWorker')
  var contentStatusWorker = $('#contentStatusWorker')

  showStatusWorker.click(() => {
    modalStatusWorker.css('visibility', 'visible')
    contentStatusWorker.removeClass('contentStatusWorker1')
    contentStatusWorker.addClass('contentStatusWorker2')
  })

  closeStatusWorker.click(() => {
    contentStatusWorker.addClass('contentStatusWorker1')
    contentStatusWorker.removeClass('contentStatusWorker2')
    modalStatusWorker.css('visibility', 'hidden')
  })

  /**
   * SCAN WORKER
   */

  var modalScanWorker = $('#modalScanWorker')
  var showScanWorker = $('#showScanWorker')
  var closeScanWorker = $('#closeScanWorker')
  var contentScanWorker = $('#contentScanWorker')

  showScanWorker.click(() => {
    modalScanWorker.css('visibility', 'visible')
    contentScanWorker.removeClass('modalContent1')
  })

  closeScanWorker.click(() => {
    contentScanWorker.addClass('modalContent1')
    modalScanWorker.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'modalScanWorker') {
      contentScanWorker.addClass('modalContent1')
      modalScanWorker.css('visibility', 'hidden')
    }
  })

  /**
   * SCAN CUSTOMER
   */

  var modalScanCustomer = $('#modalScanCustomer')
  var showScanCustomer = $('#showScanCustomer')
  var closeScanCustomer = $('#closeScanCustomer')
  var contentScanCustomer = $('#contentScanCustomer')

  showScanCustomer.click(() => {
    modalScanCustomer.css('visibility', 'visible')
    contentScanCustomer.removeClass('contentScanCustomer1')
  })

  closeScanCustomer.click(() => {
    contentScanCustomer.addClass('contentScanCustomer1')
    modalScanCustomer.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'modalScanCustomer') {
      contentScanCustomer.addClass('contentScanCustomer1')
      modalScanCustomer.css('visibility', 'hidden')
    }
  })

  /**
   * NOTIFICATION WORKER
   */

  var modalNotificationWorker = $('#modalNotificationWorker')
  var showNotificationWorker = $('#showNotificationWorker')
  var closeNotificationWorker = $('#closeNotificationWorker')
  var contentNotificationWorker = $('#contentNotificationWorker')

  showNotificationWorker.click(() => {
    modalNotificationWorker.css('visibility', 'visible')
    contentNotificationWorker.removeClass('contentNotificationWorker1')
  })

  closeNotificationWorker.click(() => {
    contentNotificationWorker.addClass('contentNotificationWorker1')
    modalNotificationWorker.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'modalNotificationWorker') {
      contentNotificationWorker.addClass('contentNotificationWorker1')
      modalNotificationWorker.css('visibility', 'hidden')
    }
  })

  /**
   * NOTIFICATION CUSTOMER
   */

  var modalNotificationCustomer = $('#modalNotificationCustomer')
  var showNotificationCustomer = $('#showNotificationCustomer')
  var closeNotificationCustomer = $('#closeNotificationCustomer')
  var contentNotificationCustomer = $('#contentNotificationCustomer')

  showNotificationCustomer.click(() => {
    modalNotificationCustomer.css('visibility', 'visible')
    contentNotificationCustomer.removeClass('contentNotificationCustomer1')
  })

  closeNotificationCustomer.click(() => {
    contentNotificationCustomer.addClass('contentNotificationCustomer1')
    modalNotificationCustomer.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'modalNotificationCustomer') {
      contentNotificationCustomer.addClass('contentNotificationCustomer1')
      modalNotificationCustomer.css('visibility', 'hidden')
    }
  })

  /**
   * CONFIRM WORKER
   */

  var modalConfirmWorker = $('#modalConfirmWorker')
  var showConfirmWorker = $('#showConfirmWorker')
  var closeConfirmWorker = $('#closeConfirmWorker')
  var contentConfirmWorker = $('#contentConfirmWorker')

  showConfirmWorker.click(() => {
    modalConfirmWorker.css('visibility', 'visible')
    contentConfirmWorker.removeClass('contentConfirmWorker1')
  })

  closeConfirmWorker.click(() => {
    contentConfirmWorker.addClass('contentConfirmWorker1')
    modalConfirmWorker.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'noti-Modal') {
      contentConfirmWorker.addClass('contentConfirmWorker1')
      modalConfirmWorker.css('visibility', 'hidden')
    }
  })

  /**
   * NAVBAR
   */

  const modalNavbar = $('#modalNavbar')
  const showNavbar = $('#showNavbar')
  const contentNavbar = $('#contentNavbar')
  showNavbar.click(() => {
    modalNavbar.css('visibility', 'visible')
    contentNavbar.removeClass('contentNavbar1')
    contentNavbar.addClass('contentNavbar2')
  })
  $(window).click(e => {
    if (e.target.id === 'modalNavbar') {
      contentNavbar.addClass('contentNavbar1')
      contentNavbar.removeClass('contentNavbar2')
      modalNavbar.css('visibility', 'hidden')
    }
  })
}
