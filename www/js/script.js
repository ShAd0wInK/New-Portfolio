// SCROLL ---------------------------------------
	var	gtt = document.querySelectorAll('.gtt');
		btt = document.querySelector('.btt');
		gotoHome = document.querySelector('.gotoHome');
		gotoInfos = document.querySelector('.gotoInfos');
		gotoProjects = document.querySelector('.gotoProjects');
		gotoPro = document.querySelector('.gotoPro');

	for (var i = 0; i < gtt.length; i++) {
		gtt[i].addEventListener('click', function() {
			document.querySelector('#home').scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
	gotoHome.addEventListener('click', function() {
		document.querySelector('#home').scrollIntoView({
				behavior: 'smooth',
		});
	});
	gotoInfos.addEventListener('click', function() {
		document.querySelector('#infos').scrollIntoView({
				behavior: 'smooth',
		});
	});
	gotoProjects.addEventListener('click', function() {
		document.querySelector('#projects_anchor').scrollIntoView({
				behavior: 'smooth',
		});
	});
	gotoPro.addEventListener('click', function() {
		document.querySelector('#end').scrollIntoView({
				behavior: 'smooth',
		});
	});

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
		for (var i = 0; i < menuList_link.length; i++) {
			menuList_link[i].classList.toggle('appearText');
		};
		for (var i = 0; i < appearText.length; i++) {
			appearText[i].classList.toggle('appearText');
		};
		for (var i = 0; i < appear.length; i++) {
			appear[i].classList.toggle('appear');
		};

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
				for (var i = 0; i < appearText.length; i++) {
					appearText[i].classList.toggle('appearText');
				};
				for (var i = 0; i < appear.length; i++) {
					appear[i].classList.toggle('appear');
				};
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
		for (var i = 0; i < appearText.length; i++) {
			appearText[i].classList.toggle('appearText');
		};
		for (var i = 0; i < appear.length; i++) {
			appear[i].classList.toggle('appear');
		};
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
	      articleFullscreen[j].scrollIntoView( {
				behavior: 'smooth',
			});
		});
	};

// FAKE LOADER
	window.onload = function () {
		setTimeout(function(){
		   var loader = document.querySelector('.loader');
		   	 body = document.querySelector('.body');
		   body.classList.remove('body-hidden');
		   loader.style.visibility = 'hidden';
		   loader.style.opacity = '0';
	   }, 1000);
	}

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
	// window.addEventListener("scroll", function() {
	// 	var slider = document.getElementById("infos");
	// 	var yPos = window.pageYOffset / slider.dataset.speed;
	// 	yPos = -yPos;
	// 	var coords = '0% '+ yPos + 'px';
	// 	slider.style.backgroundPosition = coords;	
	// });



		