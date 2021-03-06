/* ######################## */
/* #                      # */
/* #  List / Show Editor  # */
/* #                      # */
/* ######################## */

$(document).ready(function() {
	$('.codemirror').each(function(){
		// Setup CodeMirror
		var a = CodeMirror.fromTextArea(this, {
			mode: 'text/html',
			tabMode: 'indent',
			lineNumbers: true
		});
		
		// Store the editor in the viewport
		$(this).closest('.viewport').data('editor', a);
		
		// Init the preview
		updatePreview(a, $(this).closest('.viewport').find('iframe'));
	});
});

/* ############################ */
/* #                          # */
/* #  Main Editor (lightbox)  # */
/* #                          # */
/* ############################ */

$(document).ready(function() {
	
	var mainDelay;
		
	// Setup CodeMirror
	var mainEditor = CodeMirror.fromTextArea(document.getElementById('mainCodemirror'), {
		mode: 'text/html',
		tabMode: 'indent',
		lineNumbers: true,
		onChange: function() {
			clearTimeout(mainDelay);
			mainDelay = setTimeout(updateMainPreview, 300);
		},
		extraKeys: {"Cmd-F": toggleFullscreenEditing, "Ctrl-F": toggleFullscreenEditing}
	});
	
	$('html').data('mainEditor', mainEditor);
	
	function toggleFullscreenEditing(){
		var editorDiv = $('.lightbox .CodeMirror-scroll');
        if (!editorDiv.hasClass('fullscreen')) {
            $('#mainPreview').css('display', 'none');
			$('#preview-help-block').css('display', 'none');
           
            editorDiv.addClass('fullscreen');
            mainEditor.refresh();
        }else {
        	$('#mainPreview').css('display', 'block');
			$('#preview-help-block').css('display', 'block');
			
            editorDiv.removeClass('fullscreen');
            mainEditor.refresh();
        }
	}
	
	function updateMainPreview() {
		var previewFrame = document.getElementById('mainPreview');
		var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
		preview.open();
		preview.write(mainEditor.getValue());
		preview.close();
		
		previewFrame = document.getElementById('mainSecondaryPreview');
		preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
		preview.open();
		preview.write(mainEditor.getValue());
		preview.close();
		
		// This code needs optimising
		
		var maxkb = 360;
		var charmax = 368640;
		var charcurrent;
		var onekb = 1024;
		var currentkb;
		var remainingkb;
		
		charcurrent = mainEditor.getValue().length;
		currentkb = charcurrent/onekb;
		currentkb = Math.floor(currentkb);
		remainingkb = maxkb-currentkb;
		
		$('#remaining-kb').html(remainingkb+'kb');
		
		if(remainingkb<0){
			$('#remaining-kb').removeClass().addClass('error');
			$('.lightbox .card3dbtn').attr('disabled', 'disabled');
		}else if(remainingkb<50){
			$('#remaining-kb').removeClass().addClass('warning');
			$('.lightbox .card3dbtn').removeAttr('disabled');
		}else{
			$('#remaining-kb').removeClass();
			$('.lightbox .card3dbtn').removeAttr('disabled');
		}
	}
	
	$('.lightboxbtn').click(function(){
		var lightbox = $('#'+$(this).attr('lightbox_id'));
		
		$('#'+$(this).attr('lightbox_id')).lightbox_me({
			centered: true,
			onLoad: function(){
				updateMainPreview();
				mainEditor.refresh();
			},
			closeClick: false,
			closeSelector: '.btn-close'
		});
	});
});

