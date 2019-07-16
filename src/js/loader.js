const loaderModule = (function() {
	const $loader = document.querySelector('#loader');
	const init = function() {
		const loaderTl = new TimelineMax({
			onStart: page1Module.page1Enter,
			delay: 2,
			smoothChildTiming: true
		}).to($loader, 2, {yPercent: 100, alpha:1, force3D:true, ease: Expo.easeInOut}, "loader")
		  .from('#nav-logo', 4, {alpha: 0, yPercent: -200, force3D:true, ease: Expo.easeOut}, "loader")
		  .to('#loader img', 1, {alpha: 0, yPercent: 100, rotation: 360, force3D:true, ease: Expo.easeIn}, "loader")
		  .from('.onepage-pagination', 5, {alpha: 0, xPercent: -100, force3D:true, ease: Expo.easeOut}, "loader");
	};
	return {
		init: init
	};
})();
