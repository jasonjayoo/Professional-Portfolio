let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
let header = document.querySelector('.header.container');

// nav bar implementation
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// nav bar menu item event listeners
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});