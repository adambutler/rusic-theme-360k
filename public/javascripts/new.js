$(document).ready(function() {
	$('.lightbox .card3dbtn').click(function(){
	
		var cardViewport = $(this).closest('.lightbox').find('.viewport');
								
		$(cardViewport).find('.card').each(function(){
			
			if($(this).hasClass('card-front')){
				// Front -> Back
				$(this).removeClass('card-front').addClass('card-front-reverse');
			}else if($(this).hasClass('card-front-reverse')){
				// Back -> Front
				$(this).removeClass('card-front-reverse').addClass('card-front');
			}else if($(this).hasClass('card-back')){
				// Front -> Back
				$(this).removeClass('card-back').addClass('card-back-reverse');
			}else if($(this).hasClass('card-back-reverse')){
				// Back -> Front
				$(this).removeClass('card-back-reverse').addClass('card-back');
			}
		});
	});
});