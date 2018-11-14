export default () => {
  const modal = $('#markMenuModal')
  const btnMenu = $('#showMarkMenu')
  const modalContent = $('#markModalMenuContent')
  btnMenu.click(() => {
    modal.css('visibility', 'visible')
    modalContent.removeClass('modal-menu-content-1')
    modalContent.addClass('modal-menu-content-2')
  })
  $(window).click(e => {
    if (e.target.id === 'markMenuModal') {
      modalContent.addClass('modal-menu-content-1')
      modalContent.removeClass('modal-menu-content-2')
      modal.css('visibility', 'hidden')
    }
  })
}
