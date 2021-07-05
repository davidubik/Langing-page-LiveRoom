/* JS CTREATED BY CKWS */

var header;
//var headerId;

document.addEventListener('DOMContentLoaded', function(){
  header = document.querySelector('.header');
  //headerId = document.querySelector('#header');  
});
  
function scrollingTo(){
	window.scroll({
	  top: window.innerHeight,
	  behavior: 'smooth'
	});
	//headerId.classList.remove("header-active");
}

function wheelHandler(){
	//if (!header.classList.contains('header-active')) {
	//	return false
	//}
	scrollingTo();
}