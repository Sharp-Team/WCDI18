export default () => {
  var modal = $('#is-Modal')
  var btnCart = $('#showCart')
  var btnCloseCart = $('#iconCloseModal')
  var modalContent = $('#is-ModalContent')

  btnCart.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-content-1')
  })

  btnCloseCart.click(() => {
    modalContent.addClass('modal-content-1')
    modal.css('visibility', 'hidden')
  })

  $(window).click(e => {
    if (e.target.id === 'is-Modal') {
      modalContent.addClass('modal-content-1')
      modal.css('visibility', 'hidden')
    }
  })
}
