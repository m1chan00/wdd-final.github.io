function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
	
	unhideLightbox('hat');
}

document.getElementById("picture-1").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("joker");
}

document.getElementById("picture-2").onclick = unhideLightbox2;

function unhideLightbox3() {
	
	unhideLightbox("face");
}

document.getElementById("picture-3").onclick = unhideLightbox3;

function closeLightbox(lightboxID) {
	
	document.getElementById('lightbox-overlay').classList.add('hidden');

	
	document.getElementById(lightboxID).classList.add('hidden');
}



function closeAllLightboxes() {
	 
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {	
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;