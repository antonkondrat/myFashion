$(function () {

	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 3000,
		},
	});

	var mySwiper = new Swiper('.instagram__slider-container', {
		containerModifierClass: 'instagram__slider-container',
		slideClass: 'instagram__slider-slide',
		wrapperClass: 'instagram__slider-wrapper',
		loop: true,
		slidesPerView: 6,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			 },
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			960: {
				slidesPerView: 3,
				spaceBetween: 20,
			 },
			1250: {
			  slidesPerView: 4,
			  spaceBetween: 40,
			},
			1550: {
			  slidesPerView: 5,
			  spaceBetween: 50,
			},
			1920: {
				slidesPerView: 6,
				spaceBetween: 50,
			 },
		 }
	})

})