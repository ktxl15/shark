let dq = document.getElementById('dq');
let back = document.getElementById('back');
let back1 = document.getElementById('back1');
let ren = document.getElementById('ren');
let sec_h1 = document.getElementById('sec_h1');
let about_h1 = document.getElementById('about_h1');
let about_img = document.getElementsByClassName('about_img');
let work_icon = document.getElementsByClassName('work_icon');
let fs_ul = document.getElementsByClassName('fs_ul');
let mad_h1 = document.getElementsByClassName('mad_h1');
let mad_left_list = document.getElementsByClassName('mad_left_list');
window.addEventListener('scroll',function(){
	let value = window.scrollY;
	dq.style.top = value/2.5 + 'px'
	sec_h1.style.bottom = value/2.5 + 'px'
	ren.style.left = value/2.5 + 'px'
	about_h1.style.left = value/2.5 + 'px'
	about_img[0].style.bottom = value/2.5 + 'px'
	about_img[1].style.right = value/2.5 + 'px'
	work_icon[0].style.left = value/5 + 'px'
	work_icon[0].style.transform = 'rotate('+value/4+'deg)'
	fs_ul[0].style.transform = 'translateX('+value/50+'%)'
	mad_h1[0].style.right = value/5 + 'px'
	mad_left_list[0].style.left = value/80 + 'px'
})