/* eslint-disable */
export default () => {
  let image1 = parseInt(document.getElementsByClassName('image-1')[0].className.baseVal.charAt(43))
  let image2 = parseInt(document.getElementsByClassName('image-2')[0].className.baseVal.charAt(43))
  let image3 = parseInt(document.getElementsByClassName('image-3')[0].className.baseVal.charAt(43))
  let image4 = parseInt(document.getElementsByClassName('image-4')[0].className.baseVal.charAt(43))
  let image5 = parseInt(document.getElementsByClassName('image-5')[0].className.baseVal.charAt(43))
  let image6 = parseInt(document.getElementsByClassName('image-6')[0].className.baseVal.charAt(43))
  let image7 = parseInt(document.getElementsByClassName('image-7')[0].className.baseVal.charAt(43))
  let image8 = parseInt(document.getElementsByClassName('image-8')[0].className.baseVal.charAt(43))
  let image9 = parseInt(document.getElementsByClassName('image-9')[0].className.baseVal.charAt(43))

  setInterval(function() {
    image1 = image1 + 1
    let image1Change = image1 % 10
    document.getElementsByClassName('image-1')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image1Change +'.png')

    image2 = image2 + 1
    let image2Change = image2 % 10
    document.getElementsByClassName('image-2')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image2Change +'.png')

    image3 = image3 + 1
    let image3Change = image3 % 10
    document.getElementsByClassName('image-3')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image3Change +'.png')

    image4 = image4 + 1
    let image4Change = image4 % 10
    document.getElementsByClassName('image-4')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image4Change +'.png')

    image5 = image5 + 1
    let image5Change = image5 % 10
    document.getElementsByClassName('image-5')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image5Change +'.png')

    image6 = image6 + 1
    let image6Change = image6 % 10
    document.getElementsByClassName('image-6')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image6Change +'.png')

    image7 = image7 + 1
    let image7Change = image7 % 10
    document.getElementsByClassName('image-7')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image7Change +'.png')

    image8 = image8 + 1
    let image8Change = image8 % 10
    document.getElementsByClassName('image-8')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image8Change +'.png')

    image9 = image9 + 1
    let image9Change = image9 % 10
    document.getElementsByClassName('image-9')[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/slider/' + image9Change +'.png')
  }, 500)
}
