// SCROLL ---------------------------------------
	var	gtt = document.querySelectorAll('.gtt');
		btt = document.querySelector('.btt');
		gotoHome = document.querySelectorAll('.gotoHome');
		gotoInfos = document.querySelectorAll('.gotoInfos');
		gotoProjects = document.querySelectorAll('.gotoProjects');
		gotoPro = document.querySelectorAll('.gotoPro');

		gotoFooter = document.querySelector('.gotoFooter');
	
		gotoFooter.addEventListener('click', function() {
			document.querySelector('.footer').scrollIntoView({
				behavior: 'smooth',
			});
		});


	for (var i = 0; i < gtt.length; i++) {
		gtt[i].addEventListener('click', function() {
			document.querySelector('#home').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
	for (var i = 0; i < gotoHome.length; i++) {
		gotoHome[i].addEventListener('click', function() {
			document.querySelector('#home').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
	for (var i = 0; i < gotoInfos.length; i++) {
		gotoInfos[i].addEventListener('click', function() {
			document.querySelector('#infos').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
	for (var i = 0; i < gotoProjects.length; i++) {
		gotoProjects[i].addEventListener('click', function() {
			document.querySelector('#projects_anchor').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
	for (var i = 0; i < gotoPro.length; i++) {
		gotoPro[i].addEventListener('click', function() {
			document.querySelector('#pro').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}

// HIDDEN MENU ----------------------------------
	var menu = document.querySelector('.menu');
		lineFirst = document.querySelector('.line-first');
		lineCrossL = document.querySelector('.lineCrossL');
		lineCrossR = document.querySelector('.lineCrossR');
		lineShort = document.querySelector('.line-short');
		menuOverlay = document.querySelector('.menuOverlay');
		squares = document.querySelectorAll('.square'); 
		menuList = document.querySelector('.menuList');
		menuList_link = document.querySelectorAll('.menuList-link');
		appear = document.querySelectorAll('.appear');
		appearText = document.querySelectorAll('.appearText');


	menu.addEventListener('click', function() {
		menu.classList.toggle('menu-cursor');
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

	window.addEventListener('keydown', function(event) {
	      	if (event.which === 27) {
	      		menu.classList.toggle('menu-cursor');
		      	lineFirst.classList.remove('lineFirst-anim');
				lineCrossL.classList.remove('lineCrossL-anim');
				lineCrossR.classList.remove('lineCrossR-anim');
				lineShort.classList.remove('line-short-anim');
				menuOverlay.classList.remove('menuOverlay-anim');
				for (var i = 0; i < squares.length; i++) {
					squares[i].classList.remove('square-anim');
				};
				btt.classList.remove('btt-anim');
				
	      	};
	  	});
	menuList.addEventListener('click', function() {
		menu.classList.toggle('menu-cursor');
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
		

// PROJECTS DISPLAY
	var articleFullscreen = document.querySelectorAll('.article-fullscreen');
		 articleContent = document.querySelectorAll('.article-content');

	for (let j = 0; j < articleFullscreen.length; j++) {
		articleFullscreen[j].addEventListener('click', function() {
	   	for (var i = 0; i < articleFullscreen.length; i++) {
	      	articleContent[i].classList.add('is-active');
	         if (i !== j) {
	        		articleContent[i].classList.toggle('is-active');
	         };
	   	};
	      articleContent[j].scrollIntoView( {
				behavior: 'smooth',
			});
		});
	};

// CTA
	var cta = document.querySelector('.cta');
	
	cta.addEventListener('click', function() {
		cta.style.visibility = 'hidden';
		cta.style.opacity = '0';
		
		document.querySelector('#infos').scrollIntoView({
				behavior: 'smooth',
		});
	});

// PARALLAX ON INFOS
	window.addEventListener("scroll", function() {
		var slider = document.getElementById("infos");
		var yPos = window.pageYOffset / slider.dataset.speed;
		yPos = -yPos;
		var coords = '100% '+ yPos - 100 + 'px';
		slider.style.backgroundPosition = coords;	
	});

var miniMenuSquare = document.querySelectorAll('.miniMenu .square');
var whatBox = document.querySelector('.whatBox');

for (var i = 0; i < miniMenuSquare.length; i++) {
	miniMenuSquare[i].addEventListener('mouseover', function() {
		whatBox.style.visibility = 'hidden';
		whatBox.style.opacity = '0';
	});
}
whatBox.addEventListener('mouseover', function() {
	whatBox.style.visibility = 'hidden';
		whatBox.style.opacity = '0';
	});


		