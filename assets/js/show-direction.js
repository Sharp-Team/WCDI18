export default () => {
  var modal = $('#direction')
  var btnShowNote = $('#showDirection')
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
