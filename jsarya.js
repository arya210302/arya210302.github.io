const selalu = document.querySelector('.awal .baris .komplek .selalu');
const mobile_menu = document.querySelector('.awal .baris .komplek ul');
const menu_item = document.querySelectorAll('.awal .baris .komplek ul li a');
const awal = document.querySelector('.awal.pengikut');

selalu.addEventListener('click', () => {
	selalu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		awal.style.backgroundColor = '#29323c';
	} else {
		awal.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		selalu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
