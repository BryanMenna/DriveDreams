
//Search
let search = document.querySelector('.search-box');

document.querySelector('#search-icons').onclick = ()=>{
	search.classList.toggle('active');
}


//---------------swipper-----------


let swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	breakpoints:{
		0:{
			slidesPerView:1
		},
		768:{
			slidesPerView:2
		},
		991:{
			slidesPerView:3
		},

	},
  
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });
//---------------Menu---------------
let menu = document.getElementById('menuList');

menuList.style.maxHeight = "0px";

function toggleMenu(){
	if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
	}else{
		menuList.style.maxHeight = "0px"
	}
}

//-------------hide menu and search box on scroll----------
window.onscroll =()=>{
	menu.classList.remove("active");
	search.classList.remove("active");

}

 