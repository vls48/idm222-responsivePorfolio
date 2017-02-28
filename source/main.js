var tokenFlip = document.getElementById('token');
var array = document.getElementById('child')
var imgArray = array.children;

tokenFlip.addEventListener('click', function(evt) {
	flip(evt, 'token');
}, false);

function flip(evt) {

	for(lp = 0; lp < imgArray.length; lp++) {
		imgArray[lp].classList.remove('animate');
	}

	imgArray[0].classList.add('animate');
	console.log('it werk');


	imgArray[1].classList.add('animate');
}