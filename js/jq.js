$(document).ready(function(){
	$(window).scroll(function(){
		var sec_height = $('.sec').height()
		var top = $(window).scrollTop()
		if(top>sec_height*2.3){
			$('.well_img_box').addClass('add_well_img')
		}else{
			$('.well_img_box').removeClass('add_well_img')
		}
		if(top>sec_height){
			$('.head_w').addClass('add_head_w')
		}
	})
	$('.head_li').click(function(){
		var index = $(this).index()
		var hei = $('.sec').height()
		var hei2 = $('.head').height()
		var hei = hei + hei2
		$('html,body').animate({'scrollTop':index*hei*1.5},1000)
	})
})