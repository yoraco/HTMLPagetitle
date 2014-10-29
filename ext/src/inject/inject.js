chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var pagetitle=(document.title);
		var pagetitleLabel="Pagetitle";
		
		var documentbody=document.getElementsByTagName('BODY')[0];
		var pageTitleHeader = document.createElement("DIV");
		pageTitleHeader.setAttribute('id','extension_page_title_document_page_title_wrapper_id');

		var pageTitleHeaderLabel = document.createElement("P");
		pageTitleHeaderLabel.setAttribute('id','extension_page_title_document_page_title_label_id');
		var pageTitleHeaderLabelText = document.createTextNode(pagetitleLabel);

		pageTitleHeaderLabel.appendChild(pageTitleHeaderLabelText);
		pageTitleHeader.appendChild(pageTitleHeaderLabel);
		

		var pageTitleHeaderInner = document.createElement("P");
		pageTitleHeaderInner.setAttribute('id','extension_page_title_document_page_title_id');
		var pageTitleText = document.createTextNode(pagetitle);

		pageTitleHeaderInner.appendChild(pageTitleText);
		pageTitleHeader.appendChild(pageTitleHeaderInner);

		documentbody.appendChild(pageTitleHeader);
		// ----------------------------------------------------------

	}
	}, 10);
});