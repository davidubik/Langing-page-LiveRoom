/* JS CTREATED BY CKWS */

// var header;
// //var headerId;

// document.addEventListener('DOMContentLoaded', function(){
//   header = document.querySelector('.header');
//   //headerId = document.querySelector('#header');  
// });
  
// function scrollingTo(){
// 	window.scroll({
// 	  top: window.innerHeight,
// 	  behavior: 'smooth'
// 	});
// 	//headerId.classList.remove("header-active");
// }

// function wheelHandler(){
// 	//if (!header.classList.contains('header-active')) {
// 	//	return false
// 	//}
// 	scrollingTo();
// }


//SCROOL TO

const header = document.querySelector('.header');
const headerId = document.querySelector('#header');
const imgMaximmo = document.querySelector('.maximmo');
const rect = header.getBoundingClientRect();

scrollingTo = () =>{
	window.scrollTo(0,rect.bottom);
	behavior: 'smooth';
	console.log("Scroll : "+ window.scrollX + "," + window.scrollY);
	headerId.classList.remove("header-active");
  }

  header.addEventListener('wheel', ()=>{
	  wheelHandler();
  })

  function wheelHandler(){
	if (!header.classList.contains('header-active')) {
	  return false
	}
	scrollingTo();
  }