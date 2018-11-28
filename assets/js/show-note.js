export default () => {
  var modal = $('#legend')
  var btnShowNote = $('#showNote')
  let flag = true
  btnShowNote.click(() => {
    if (flag == true) {
      modal.addClass('modal-note')
      flag = false
    } else if (flag == false) {
      modal.removeClass('modal-note')
      flag = true
    }
  })
}
