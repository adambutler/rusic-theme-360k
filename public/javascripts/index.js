$(document).ready(function() {
	$('.main-body .main-list .card3dbtn').click(function(){
				
		var button = this;
		
		var cardViewport = $(this).closest('.main-list-item').find('.viewport');
						
		$(cardViewport).find('.card').each(function(){
			
			if($(this).hasClass('card-front')){
				// Front -> Back
				$(button).html('<i class="eject"></i>Hide Source');
				$(this).removeClass('card-front').addClass('card-front-reverse');
			}else if($(this).hasClass('card-front-reverse')){
				// Back -> Front
				$(button).html('<i class="eject"></i>Show Source');
				$(this).removeClass('card-front-reverse').addClass('card-front');
				// The updatePreview function is initiated here because the card is about to reverse
				updatePreview($(cardViewport).data('editor'), $(this).find('iframe'));
			
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