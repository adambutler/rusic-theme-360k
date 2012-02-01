function updatePreview(editor, previewFrame){
	previewFrame = previewFrame[0];
	
	var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
	preview.open();
	preview.write(editor.getValue());
	preview.close();
}