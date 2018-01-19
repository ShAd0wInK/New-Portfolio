var btt = document.querySelector('.btt');

btt.addEventListener('click', function() {
	document.querySelector('#home').scrollIntoView({
			behavior: 'smooth',
	});
});

var menu = document.querySelector('.menu');
	lineFirst = document.querySelector('.line-first');
	lineCrossL = document.querySelector('.lineCrossL');
	lineCrossR = document.querySelector('.lineCrossR');
	lineShort = document.querySelector('.line-short');
	menuOverlay = document.querySelector('.menuOverlay');
	squares = document.querySelectorAll('.square'); 

menu.addEventListener('click', function() {
	lineFirst.classList.toggle('lineFirst-anim');
	lineCrossL.classList.toggle('lineCrossL-anim');
	lineCrossR.classList.toggle('lineCrossR-anim');
	lineShort.classList.toggle('line-short-anim');
	menuOverlay.classList.toggle('menuOverlay-anim');
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.toggle('square-anim');
	};
	btt.classList.toggle('btt-anim');
});
	