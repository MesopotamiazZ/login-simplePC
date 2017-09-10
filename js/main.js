$(document).ready(function() {
  set()
})

function set() {
	var windowWidth = document.body.clientWidth
  console.log(windowWidth)
  $('#login').css('width', windowWidth)

  const header = 50
  const footer = 20
  var windowHeight = document.body.scrollHeight
  var contentHeight = windowHeight - header - footer
  $('.content').css('height', contentHeight+'px').css('backgroundSize', ""+windowWidth+"px "+contentHeight+"px")
  $('.form-control').css('top', contentHeight/3).css('left',windowWidth/2 - 300)
}

// function setContentHeight() {
//   const header = 50
//   const footer = 20
//   var windowHeight = document.body.scrollHeight
//   var contentHeight = windowHeight - header - footer
//   $('.content').css('height', contentHeight).css('background-size', contentHeight)
// }
