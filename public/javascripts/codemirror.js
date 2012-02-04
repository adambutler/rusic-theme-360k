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
		}
	});
		
	function updateMainPreview() {
		console.log('test')
		var previewFrame = document.getElementById('mainPreview');
		var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
		preview.open();
		preview.write(mainEditor.getValue());
		preview.close();
	}
	
	$('.lightboxbtn').click(function(){
		var lightbox = $('#'+$(this).attr('lightbox_id'));
		
		$('#'+$(this).attr('lightbox_id')).lightbox_me({
			centered: true,
			onLoad: function(){
				mainEditor.refresh();
			},
			closeClick: false,
			closeSelector: '.btn-close'
		});
	});
});

