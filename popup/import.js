function import_file() {
	convert_to_epub();
	upload_file();
	epub_to_reader();
}

function convert_to_epub() {
	//	[TODO]
	
	//	clean up source html using libraries 
	//	- make links that are internal into anchors
	//	- try to convert spans to ps, as for hyperlinks, proper hierarchical headers; use better tags
	
	//	https://github.com/apostrophecms/sanitize-html
	
	
	//	change html to xhtml extension
	
	//	make a .ncx file for table of contents (i think?)
	
	
}

function upload_file() {
	//	[TODO]
	//	upload to tmp files
}

function epub_to_reader() {
	//	[TODO]
}



const importBtn = document.querySelector("#import_button")


importBtn.addEventListener("click", import_file) 