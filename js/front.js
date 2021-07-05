/* JS CTREATED BY CKWS */

var header;
var headerId;

document.addEventListener('DOMContentLoaded', function(){
  header = document.querySelector('.header');
  headerId = document.querySelector('#header');  
  
	window.addEventListener('wheel', (evt)=>{
		evt.preventDefault();
		evt.stopPropagation();
        wheelHandler();
    })
  
});
  
function scrollingTo(){
	if (!header.classList.contains('header-active')) {
		return false
	}
	window.scroll({
	  top: window.innerHeight,
	  behavior: 'smooth'
	});
	setTimeout(function(){
		headerId.classList.remove("header-active");
	},2000);
}

function wheelHandler(){
	scrollingTo();
}