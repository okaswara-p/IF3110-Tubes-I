// global.js
// Deklarasi fungsi-fungsi Javascript yang umum.

// Fungsi untuk membuat XMLHttpRequest.
function createXMLHttpRequest()	{
	var xmlhttp;
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}