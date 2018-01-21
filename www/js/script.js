// SCROLL ---------------------------------------
	var btt = document.querySelector('.btt');
		gotoHome = document.querySelector('.gotoHome');
		gotoInfos = document.querySelector('.gotoInfos');
		gotoProjects = document.querySelector('.gotoProjects');
		gotoPro = document.querySelector('.gotoPro');

	btt.addEventListener('click', function() {
		document.querySelector('#home').scrollIntoView({
				behavior: 'smooth',
		});
	});
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


	menu.addEventListener('click', function() {
		menu.classList.toggle('menu-cursor')
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

	});
	window.addEventListener('keydown', function(event) {
	      	if (event.which === 27) {
		      	lineFirst.classList.remove('lineFirst-anim');
					lineCrossL.classList.remove('lineCrossL-anim');
					lineCrossR.classList.remove('lineCrossR-anim');
					lineShort.classList.remove('line-short-anim');
					menuOverlay.classList.remove('menuOverlay-anim');
					for (var i = 0; i < squares.length; i++) {
						squares[i].classList.remove('square-anim');
					};
					btt.classList.remove('btt-anim');
	      	}
	  	});
	menuList.addEventListener('click', function() {
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


var sw = document.getElementById('sw');
	sw_article = document.querySelector('.sw-article');
	ocs = document.getElementById('ocs');
	ocs_article = document.querySelector('.ocs-article');
	nsp = document.getElementById('nsp');
	nsp_article = document.querySelector('.nsp-article');
	rdc = document.getElementById('rdc');
	rdc_article = document.querySelector('.rdc-article');
	izi = document.getElementById('izi');
	izi_article = document.querySelector('.izi-article');
	ad = document.getElementById('ad');
	ad_article = document.querySelector('.ad-article');

sw.addEventListener('click', function() {
	sw_article.classList.toggle('sw-article-anim');
});

ocs.addEventListener('click', function() {
	ocs_article.classList.toggle('ocs-article-anim');
});
nsp.addEventListener('click', function() {
	nsp_article.classList.toggle('nsp-article-anim');
});
rdc.addEventListener('click', function() {
	rdc_article.classList.toggle('rdc-article-anim');
});
izi.addEventListener('click', function() {
	izi_article.classList.toggle('izi-article-anim');
});
ad.addEventListener('click', function() {
	ad_article.classList.toggle('ad-article-anim');
});







		