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