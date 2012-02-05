$(document).ready(function() {
	$('.lightbox .card3dbtn').click(function(){
		
		if($(this).attr('disabled') != 'disabled'){
			
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
		}
	});
	
	// Title update
	$('.lightbox .card #form_details #idea_title').keyup(function(){
		if($(this).val() != ""){
			$('.lightbox .card #form_details #title-preview').html($(this).val());
		}else{
			$('.lightbox .card #form_details #title-preview').html('Title');
		}
	});
	
	// URL Update
	$('.lightbox .card #form_details #idea_url').keyup(function(){
	
		$('.lightbox .card #form_details #url-preview').attr('href', $(this).val());
		
	});
});