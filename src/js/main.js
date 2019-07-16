window.onload = () => {
	const circle1 = document.querySelector('#path-1');
	const circle2 = document.querySelector('#path-2');
	const circle3 = document.querySelector('#path-3');
	const circle4 = document.querySelector('#path-4');
	const scrollerTl = new TimelineMax({repeat:-1});
		scrollerTl
			.from(circle1, .5, {drawSVG:0,ease: Circ.easeOut}, .5)
			.from(circle2, .6, {drawSVG:0,ease: Circ.easeOut})
			.from(circle3, .7, {drawSVG:0,ease: Circ.easeOut})
			.from(circle4, .8, {drawSVG:0,ease: Circ.easeOut})
			.to(circle1, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle2, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle3, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} )
			.to(circle4, .3,  { drawSVG:0, stroke:"#f0b227", ease: Circ.easeOut} );

	onepagescrollControllerModule.init();
	loaderModule.init();
	shoppingCart.init();
	linksModule.init();
};

// window.onresize = () => {
// 	setTimeout(() => {
// 		window.location.reload();
// 	}, 200);
// };
