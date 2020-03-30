var previousNode = document.querySelector(".active-location");


function changeImage(node) {

	if (previousNode){
		previousNode.classList.remove("active-location");
		node.classList.add("active-location");
		previousNode = node;
	}

 	switch(node.text){
 		case "New York":
 			change("img-1");
 			break;
 		case "Dublin":
 			change("img-2");
 			break;
 		case "Brisbane":
 			change("img-3");
 			break;
 		case "Thailand":
 			change("img-4");
 			break;
 		case "Rio Maggiore":
 			change("img-5");
 			break;
 	}
}

function change(id) {
	var image = document.getElementById(id);
	var header = document.getElementById("header")

	if (header.querySelectorAll(".opaque").length > 0){
		// remove class opaque from child of header
		header.querySelector(".opaque").classList.remove("opaque");
		// add opaque class to image
		image.classList.add("opaque");
	}
}

