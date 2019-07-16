const page1Module = (function() {

	const page1Enter = function() {
		const page1EnterTl = new TimelineMax({
			delay: 0.5,
			smoothChildTiming: true
		});
		if (window.innerWidth >= 768 && window.innerWidth < 1440) {
			page1EnterTl.fromTo('.bee1', 3, {
				alpha: 1,
				yPercent: 100,
				xPercent: 0,
				scale: 0,
				rotation: 0,
				force3D: true
			}, {
				alpha: 1,
				yPercent: -40,
				scale: 1,
				rotation: 0,
				force3D: true,
				ease: Expo.easeInOut
			}, "p1e");
		} else {
			page1EnterTl.fromTo('.bee1', 3, {
				alpha: 1,
				yPercent: 100,
				xPercent: 0,
				scale: 0,
				rotation: 0,
				force3D: true
			}, {
				alpha: 1,
				yPercent: -25,
				scale: 1,
				rotation: 0,
				force3D: true,
				ease: Expo.easeInOut
			}, "p1e");
		}
		page1EnterTl.fromTo('#page1 .bg', 3.5, {
			alpha: 0,
			yPercent: 100,
			xPercent: 0,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			xPercent: 0,
			force3D: true,
			ease: Expo.easeInOut
		}, "p1e");
		page1EnterTl.fromTo('#stb', 3, {
			alpha: 0,
			yPercent: 200,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			force3D: true,
			ease: Expo.easeInOut
		}, "p1e");
		page1EnterTl.fromTo('#scroll-indicator', 3, {
			alpha: 0
		}, {
			alpha: 1,
			display:'block',
			ease: Expo.easeInOut
		}, "p1e");
		page1EnterTl.to('.bee2', 1, {
			alpha: 0
		}, "p1e");
		page1EnterTl.to('.bee3', 1, {
			alpha: 0
		}, "p1e");
	};

	const page1Leave = function() {
		const page1LeaveTl = new TimelineMax({
				delay: 0,
				smoothChildTiming: true
			}).to('#scroll-indicator', 1, {
				alpha: 0,
				ease: Circ.easeOut
			}, "p1l")
			.to('#page1 .bg', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p1l")
			.to('#stb', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p1l")
			.to('#scroll-indicator', 1, {
				alpha: 0,
				display:'none',
				ease: Expo.easeInOut
			}, "p1l");
	};

	return {
		page1Enter: page1Enter,
		page1Leave: page1Leave,
	};
})();

const page2Module = (function() {

	const page2Enter = function() {
		const page2EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true
		});
		if (window.innerWidth < 375) {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: -25,
				xPercent: 0,
				scale: 0.6,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		} else if (window.innerWidth <= 425) {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: -32,
				xPercent: 0,
				scale: 0.8,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		} else if (window.innerWidth <= 768) {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: 0,
				xPercent: 0,
				scale: 0.8,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		} else if (window.innerWidth <= 1024) {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: -100,
				xPercent: 0,
				scale: 0.6,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		} else if (window.innerWidth <= 1250) {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: -100,
				xPercent: 0,
				scale: 0.75,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		} else {
			page2EnterTl.to('.bee1', 2, {
				alpha: 1,
				yPercent: -70,
				xPercent: 0,
				scale: 0.8,
				rotation: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e");
		}
		page2EnterTl.to('.bee2', 1, {
			yPercent: -100,
			xPercent: 200,
			scale: 0.6,
			alpha: 0,
			rotation: 120,
			force3D: true,
			ease: Expo.easeIn
		}, "p2e");
		page2EnterTl.to('.bee3', 1, {
			yPercent: -100,
			xPercent: -200,
			scale: 0.6,
			alpha: 0,
			rotation: -110,
			force3D: true,
			ease: Expo.easeIn
		}, "p2e");
		page2EnterTl.fromTo('#page2 .yellow', 2, {
			xPercent: 100,
			force3D: true
		}, {
			alpha: 1,
			xPercent: 0,
			force3D: true,
			ease: Expo.easeOut
		}, "p2e");
		page2EnterTl.fromTo('#page2 .white', 1, {
			xPercent: -100,
			force3D: true
		}, {
			xPercent: 0,
			force3D: true,
			ease: Expo.easeOut
		}, "p2e+=.5");
		page2EnterTl.fromTo('#page2 h6', 1, {
			alpha: 0,
			xPercent: 100,
			force3D: true
		}, {
			alpha: 0.6,
			xPercent: 0,
			force3D: true,
			ease: Expo.easeOut
		}, "p2e+=1");
		if (window.innerWidth <= 768) {
			page2EnterTl.fromTo('#page2 .bg', 2, {
				alpha: 0,
				xPercent: -100,
				force3D: true
			}, {
				alpha: 1,
				xPercent: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e+=.25");
		} else {
			page2EnterTl.fromTo('#page2 .bg', 2, {
				alpha: 0,
				xPercent: -100,
				force3D: true
			}, {
				alpha: 1,
				xPercent: 0,
				force3D: true,
				ease: Expo.easeOut
			}, "p2e+=1.25");
		}
		page2EnterTl.fromTo('#tc', 2, {
			alpha: 0,
			xPercent: -100,
			force3D: true
		}, {
			alpha: 1,
			xPercent: 0,
			force3D: true,
			ease: Expo.easeOut
		}, "p2e+=1.5");
		page2EnterTl.fromTo('#page2 p', 2, {
			alpha: 0,
			xPercent: -100,
			force3D: true
		}, {
			alpha: 1,
			xPercent: 0,
			force3D: true,
			ease: Expo.easeOut
		}, "p2e+=1.5");
	};

	const page2Leave = function() {
		const page2LeaveTl = new TimelineMax({
				delay: 0,
				paused: false,
				repeat: 0,
				repeatDelay: 0,
				yoyo: false,
				smoothChildTiming: true,
			})
			.to('#page2 .yellow', 1, {
				alpha: 0,
				xPercent: 100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l")
			.to('#page2 .white', 1, {
				xPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l")
			.to('#page2 h6', 1, {
				alpha: 0,
				xPercent: 100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l")
			.to('#page2 .bg', 1, {
				alpha: 0,
				xPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l")
			.to('#tc', 1, {
				alpha: 0,
				xPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l")
			.to('#page2 p', 1, {
				alpha: 0,
				xPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p2l");
	};

	return {
		page2Enter: page2Enter,
		page2Leave: page2Leave,
	};
})();

const page3Module = (function() {

	const page3Enter = function() {

		const $growBtn = document.querySelector('#grow-btn');
		const $growBtnSvg = document.querySelector('.grow-btn-1');
		const $growBtnSvgArrow = document.querySelector('.grow-btn-2');
		const $containBlock1 = document.querySelector('.contain-block-1');
		const $goBackGrowBtn = document.querySelector('#back-btn-grow');
		const $backBtnPath1 = document.querySelector('.back-btn-1');
		const $backBtnPath1_ = document.querySelector('.back-btn-1_');
		const $containBlock2 = document.querySelector('.contain-block-2');
		const $growBtns = document.querySelectorAll('.grow-btns');
		const $containBlock3 = document.querySelector('.contain-block-3');
		const $goBackHerbsBtn = document.querySelector('#back-btn-herbs');
		const $backBtnPath2 = document.querySelector('.back-btn-2');
		const $backBtnPath2_ = document.querySelector('.back-btn-2_');
		const $herbBtns = document.querySelectorAll('.herb-btns');

		TweenMax.to($containBlock1, 0.25, {
			x: 0,
			display: "flex",
			alpha: 1
		});
		TweenMax.set([$containBlock2, $containBlock3], {
			display: "none"
		});

		$growBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($growBtnSvg, 1, {
				drawSVG: 0,
				stroke: "transparent",
				strokeWidth: '1.55px',
				ease: Circ.easeOut
			});
			TweenMax.to($growBtnSvgArrow, 1, {
				x: -5,
				force3D: true,
				ease: Circ.easeOut
			});
		});
		$growBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($growBtnSvg, 1, {
				drawSVG: '100%',
				stroke: "#512d1d",
				strokeWidth: '1.55px',
				ease: Circ.easeOut
			});
			TweenMax.to($growBtnSvgArrow, 1, {
				x: 0,
				force3D: true,
				ease: Circ.easeOut
			});
		});
		$growBtn.addEventListener('click', (e) => { // 1 to 2
			TweenMax.to($containBlock1, 0.25, {
				x: -100,
				display: "none",
				alpha: 0
			});
			TweenMax.fromTo($containBlock2, 0.25, {
				x: 100,
				force3D: true,
				alpha: 0
			}, {
				x: 0,
				force3D: true,
				alpha: 1,
				display: "flex",
				delay: 0.25,
				ease: Expo.easeInOut
			});
		});
		$goBackGrowBtn.addEventListener('click', (e) => {
			TweenMax.to($containBlock2, 0.25, {
				x: 100,
				display: "none",
				alpha: 0
			});
			TweenMax.fromTo($containBlock1, 0.25, {
				x: -100,
				force3D: true,
				alpha: 0
			}, {
				x: 0,
				force3D: true,
				alpha: 1,
				display: "flex",
				delay: 0.25,
				ease: Expo.easeInOut
			});
		});
		$goBackGrowBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($backBtnPath1, 0.25, {
				x: -10,
				force3D: true,
				ease: Back.easeOut.config(2)
			});
		});
		$goBackGrowBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($backBtnPath1, 1, {
				stroke: '#512d1d',
				x: 0,
				drawSVG: '100%',
				force3D: true,
				ease: Circ.easeOut
			});
		});
		$growBtns.forEach(button => button.addEventListener('click', (e) => {
			TweenMax.to($containBlock2, 0.25, {
				x: -100,
				force3D: true,
				display: "none",
				alpha: 0
			});
			TweenMax.fromTo($containBlock3, 0.25, {
				x: 100,
				force3D: true,
				alpha: 0
			}, {
				x: 0,
				force3D: true,
				alpha: 1,
				display: "flex",
				delay: 0.25,
				ease: Expo.easeInOut
			});
		}));
		$growBtns.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.garden-cls-2');
			let block = btnhovered.querySelector('.garden-cls-3');
			let arrow = btnhovered.querySelector('.garden-cls-4');
			TweenMax.fromTo(line, 1, {
				drawSVG: '40%'
			}, {
				drawSVG: '0%',
				stroke: "#f0b227",
				strokeWidth: '2.21px',
				ease: Circ.easeOut
			});
			TweenMax.to(block, .5, {
				x: -5,
				force3D: true,
				fill: '#f0b227',
				ease: Circ.easeOut
			});
			TweenMax.to(arrow, 1, {
				x: -5,
				force3D: true,
				ease: Circ.easeOut
			});
		}));
		$growBtns.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.garden-cls-2');
			let block = btnhovered.querySelector('.garden-cls-3');
			let arrow = btnhovered.querySelector('.garden-cls-4');
			TweenMax.to(line, 1, {
				drawSVG: '100%',
				stroke: "#512d1d",
				strokeWidth: '2.21px',
				ease: Circ.easeOut
			});
			TweenMax.to(block, .25, {
				x: 0,
				force3D: true,
				fill: '#512d1d',
				ease: Circ.easeOut
			});
			TweenMax.to(arrow, .5, {
				x: 0,
				force3D: true,
				ease: Circ.easeOut
			});
		}));
		$goBackHerbsBtn.addEventListener('click', (e) => {
			TweenMax.to($containBlock3, 0.25, {
				x: 100,
				force3D: true,
				display: "none",
				alpha: 0
			});
			TweenMax.fromTo($containBlock2, 0.25, {
				x: -100,
				force3D: true,
				alpha: 0
			}, {
				x: 0,
				force3D: true,
				alpha: 1,
				display: "flex",
				delay: 0.25,
				ease: Expo.easeInOut
			});
		});
		$goBackHerbsBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($backBtnPath2, 0.25, {
				x: -10,
				force3D: true,
				ease: Back.easeOut.config(2)
			});
		});
		$goBackHerbsBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($backBtnPath2, 1, {
				stroke: '#512d1d',
				x: 0,
				drawSVG: '100%',
				force3D: true,
				ease: Circ.easeOut
			});
		});
		$herbBtns.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.herbs-cls-1');
			let block = btnhovered.querySelector('.herbs-cls-2');
			let $_ = btnhovered.querySelector('.price');
			TweenMax.to(line, 1, {drawSVG:'0%', stroke:'#f0b227', strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {fill:'#f0b227', x: 5, force3D:true, ease: Circ.easeOut});
			TweenMax.to($_, 1, {color: '#512d1d', x: 5, force3D:true, ease: Circ.easeOut});
		}));
		$herbBtns.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.herbs-cls-1');
			let block = btnhovered.querySelector('.herbs-cls-2');
			let $_ = btnhovered.querySelector('.price');
			TweenMax.to(line, 1, {drawSVG:'100%', stroke:'#512d1d', strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {fill:'#512d1d', x: 0, force3D:true, ease: Circ.easeOut});
			TweenMax.to($_, 1, {color: '#fcfcf5', x: 0, force3D:true, ease: Circ.easeOut});
		}));



		const page3EnterTl = new TimelineMax({
			delay: 0,
			paused: false,
			smoothChildTiming: true
		});
		if (window.innerWidth < 768) {
			page3EnterTl.to('.bee1', 2, {
				yPercent: -70,
				scale: .4,
				xPercent: 15,
				rotation: 20,
				force3D: true,
				ease: Expo.easeInOut
			}, "p3e");
		} else if (window.innerWidth < 1440) {
			page3EnterTl.to('.bee1', 2, {
				yPercent: -80,
				scale: .4,
				xPercent: 0,
				rotation: 10,
				force3D: true,
				ease: Expo.easeInOut
			}, "p3e");
		} else {
			page3EnterTl.to('.bee1', 2, {
				yPercent: -51,
				scale: .4,
				xPercent: 0,
				rotation: 10,
				force3D: true,
				ease: Expo.easeInOut
			}, "p3e");
		}
			if (window.innerWidth < 768) {
				page3EnterTl.fromTo('.bee2', 2, {
					alpha: 0,
					yPercent: -50,
					xPercent: -90,
					scale: 0,
					rotation: 90,
					force3D: true
				}, {
					alpha: 1,
					yPercent: -74,
					xPercent: -18,
					scale: .4,
					rotation: -30,
					force3D: true,
					ease: Expo.easeInOut
				}, "p3e");
			} else if (window.innerWidth < 1440) {
				page3EnterTl.to('.bee2', 2, {
					alpha: 1,
					yPercent: -113,
					xPercent: -22,
					scale: .4,
					rotation: -20,
					force3D: true,
					ease: Expo.easeInOut
				}, "p3e");
			} else {
				page3EnterTl.to('.bee2', 2, {
					alpha: 1,
					yPercent: -82,
					xPercent: -22,
					scale: .4,
					rotation: -20,
					force3D: true,
					ease: Expo.easeInOut
				}, "p3e");
			}
			page3EnterTl.to('.bee3', 2, {
				alpha: 1,
				yPercent: -225,
				xPercent: -400,
				scale: 0,
				rotation: -120,
				force3D: true,
				ease: Expo.easeInOut
			}, "p3e");
		page3EnterTl.fromTo('#page3 .yellow', 2, {
			alpha: 1,
			yPercent: 100,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			ease: Expo.easeInOut
		}, "p3e");
		page3EnterTl.fromTo('#page3 h6', 2, {
			alpha: 0,
			yPercent: -100,
			force3D: true
		}, {
			alpha: 0.6,
			yPercent: 0,
			ease: Expo.easeInOut
		}, "p3e+=.5");
		page3EnterTl.fromTo('#page3 .white', 2, {
			yPercent: 100,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			force3D: true,
			ease: Expo.easeInOut
		}, "p3e+=.5");
		page3EnterTl.fromTo('#page3 .bg', 2, {
			alpha: 0,
			yPercent: 100,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			force3D: true,
			ease: Expo.easeInOut
		}, "p3e+=.75");
		page3EnterTl.fromTo('#page3 .contain', 2, {
			alpha: 0,
			yPercent: 100,
			force3D: true
		}, {
			alpha: 1,
			yPercent: 0,
			force3D: true,
			ease: Expo.easeInOut
		}, "p3e+=1");
	};

	const page3Leave = function() {
		const page3LeaveTl = new TimelineMax({
				delay: 0,
				paused: false,
				repeat: 0,
				repeatDelay: 0,
				yoyo: false,
				smoothChildTiming: true,
			}).to('#page3 .yellow', 1, {
				alpha: 0,
				yPercent: 100,
				force3D: true,
				ease: Circ.easeOut
			}, "p3l")
			.to('#page3 h6', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p3l")
			.to('#page3 .white', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p3l")
			.to('#page3 .bg', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p3l")
			.to('#page3 .contain', 1, {
				alpha: 0,
				yPercent: -100,
				force3D: true,
				ease: Circ.easeOut
			}, "p3l");
	};

	return {
		page3Enter: page3Enter,
		page3Leave: page3Leave,
	};
})();

const page4Module = (function() {

	const page4Enter = function() {
		const $donateBtn = document.querySelector('#donate-btn');
		const $donateBtnSvg = document.querySelector('.donate-btn-1');
		const $donateBtnSvgArrow = document.querySelector('.donate-btn-2');
		const $donateBlock1 = document.querySelector('.donate-block-1');
		const $donateBlock2 = document.querySelector('.donate-block-2');
		const $donateButtons = document.querySelectorAll('.donate-btn');
		TweenMax.set([$donateBlock1], {display:'flex'});
		TweenMax.set([$donateBlock2], {display:'none'});
		$donateBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($donateBtnSvg, 1, {drawSVG:0, stroke:"transparent", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to($donateBtnSvgArrow, 1, {x: -5, force3D:true, ease: Circ.easeOut});
		});
		$donateBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($donateBtnSvg, 1, {drawSVG:'100%', stroke:"#512d1d", strokeWidth: '2.21px', ease: Circ.easeOut});
			TweenMax.to($donateBtnSvgArrow, 1, {x: 0, force3D:true, ease: Circ.easeOut});
		});
		$donateBtn.addEventListener('click', (e) => {
			TweenMax.set([$donateBlock1], {display:'none'});
			TweenMax.set([$donateBlock2], {display:'flex'});
			TweenMax.fromTo($donateBlock2, 0.5, {alpha: 0, x: 100, force3D:true}, {alpha: 1, force3D:true, x: 0, ease: Expo.easeInOut});
		});
		$donateButtons.forEach(button => button.addEventListener('mouseenter', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.donate-cls-1');
			let block = btnhovered.querySelector('.donate-cls-2');
			let price = btnhovered.querySelector('p');
			TweenMax.to(line, 1, {drawSVG:'0%', stroke:"#f0b227", strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {x: 5, fill:'#f0b227', ease: Circ.easeOut});
			TweenMax.to(price, 1, {x: 5, force3D:true, ease: Circ.easeOut});
		}));
		$donateButtons.forEach(button => button.addEventListener('mouseleave', (e) => {
			let btnhovered = e.target;
			let line = btnhovered.querySelector('.donate-cls-1');
			let block = btnhovered.querySelector('.donate-cls-2');
			let price = btnhovered.querySelector('p');
			TweenMax.fromTo(line, .5, {drawSVG:'0%'},{drawSVG:'100%', stroke:"#512d1d", strokeWidth: '2px', ease: Circ.easeOut});
			TweenMax.to(block, .5, {x: 0, fill:'#512d1d', ease: Circ.easeOut});
			TweenMax.to(price, .5, {x: 0, force3D:true, ease: Circ.easeOut});
		}));
		const page4EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
		});
		if (window.innerWidth < 768) {
			page4EnterTl.to('.bee1', 2, {alpha: 1, yPercent: -60, scale: .3, xPercent: -30, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -5, xPercent: -30, scale: .3, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.fromTo('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: .1, rotation: -90, force3D: true, ease: Expo.easeInOut}, {alpha: 1, yPercent: -185, xPercent: -30, scale: .3, rotation: 10, force3D: true}, "p4e");
		} else if (window.innerWidth <= 1185) {
			page4EnterTl.to('.bee1', 2, {alpha: 1, yPercent: -95, scale: .2, xPercent: 0, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -123, xPercent: -13, scale: .2, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p4e+=.5");
			page4EnterTl.fromTo('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: .1, rotation: -90, force3D: true, ease: Expo.easeInOut}, {alpha: 1, yPercent: -120, xPercent: 13, scale: .2, rotation: 20, force3D: true}, "p4e");
		} else {
			page4EnterTl.to('.bee1', 2, {alpha: 1, yPercent: -50, scale: .3, xPercent: 0, rotation: 10, force3D: true, ease: Expo.easeInOut}, "p4e");
			page4EnterTl.to('.bee2', 2, {alpha: 1, yPercent: -74, xPercent: -16, scale: .3, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p4e+=.5");
			page4EnterTl.fromTo('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 300, scale: .1, rotation: -120, force3D: true, ease: Expo.easeInOut}, {alpha: 1, yPercent: -85, xPercent: 10, scale: .3, rotation: 10, force3D: true}, "p4e");
		}
		page4EnterTl.fromTo('#page4 .yellow', 2, {alpha: 1, xPercent: -100, force3D: true}, {alpha: 1, xPercent: 0, ease: Expo.easeOut}, "p4e");
		page4EnterTl.fromTo('#page4 h6', 2, {alpha: 0, yPercent: -100, force3D: true}, {alpha: 0.6, yPercent: 0, ease: Expo.easeOut}, "p4e+=.25");
		page4EnterTl.fromTo('#page4 .white', 2, {yPercent: 100, zIndex: -1, force3D:true}, {alpha: 1, yPercent: 0, zIndex: 0, force3D:true, ease: Expo.easeOut}, "p4e+=.75");
		page4EnterTl.fromTo('#page4 .bg', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p4e+=1");
		page4EnterTl.fromTo('#page4 .contain', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p4e+=1.25");
	};

	const page4Leave = function() {

		const page4LeaveTl = new TimelineMax({
			delay: 0,
			smoothChildTiming: true
		});
		page4LeaveTl.to('#page4 .yellow', 1, {alpha: 0, xPercent: -100, force3D: true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 h6', 1, {alpha: 0, yPercent: -50, force3D: true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .white', 1, {yPercent: -50, force3D:true, zIndex: -1, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .bg', 1, {alpha: 0, yPercent: -50, force3D:true, ease: Expo.easeOut}, "p4l");
		page4LeaveTl.to('#page4 .contain', 1, {alpha: 0, yPercent: -50, force3D:true, ease: Expo.easeOut}, "p4l");
	};

	return {
		page4Enter: page4Enter,
		page4Leave: page4Leave,
	};
})();

const page5Module = (function() {

	const page5Enter = function() {
		const $emailInput = document.querySelector('input[type="email"]');
		const $goInput = document.querySelector('button[type="submit"]');
		const $goBtnPath = document.querySelector('#go-btn-path');
		const $form = document.querySelector('#email');
		const $checkoutOverlay = document.querySelector('#overlay-checkout');
		const $checkoutMessageWrap = document.querySelector('.checkout-message-wrap');
		$form.addEventListener('submit', (e) => {
			e.preventDefault();
		});
		$emailInput.addEventListener('focus', (e) => {
			TweenMax.to($goBtnPath, 0.75, {fill:"#fff", x:-5, force3D:true, ease: Circ.easeOut});
			TweenMax.to($goInput, 0.75, {color:"#512d1d", ease: Circ.easeOut});
			TweenMax.to($emailInput, 0.75, {x:-5, ease: Circ.easeOut});
		});
		$emailInput.addEventListener('blur', (e) => {
			TweenMax.to($goBtnPath, 0.75, {fill:"#512d1d", x:0, force3D:true, ease: Circ.easeOut});
			TweenMax.to($goInput, 0.75, {color:"#fff", ease: Circ.easeOut});
			TweenMax.to($emailInput, 0.75, {x:0, ease: Circ.easeOut});
		});

		$goInput.addEventListener('click', (e) => {
			e.preventDefault();
			let message = $checkoutMessageWrap.firstElementChild.firstElementChild.nextElementSibling;
			message.innerHTML = `Thanks for attempting to sign up and save the bees, however this is not a real form.`;

			let checkoutOverlayTl = new TimelineMax();
			checkoutOverlayTl
				.fromTo($checkoutOverlay, 0.5, {autoAlpha:0}, {autoAlpha:1, display:'flex', ease: Circ.easeOut})
				.fromTo($checkoutMessageWrap, 0.5, {yPercent:100, force3D:true, autoAlpha:0}, {yPercent:0, force3D:true, autoAlpha:1, ease: Back.easeOut.config(1.7)})
				;
		});

		$checkoutOverlay.addEventListener('click', (e) => {
			if (e.target !== $checkoutOverlay) {
				return;
			} else {
				let checkoutOverlayOutTl = new TimelineMax();
				checkoutOverlayOutTl
					.to($checkoutOverlay, 0.5, {autoAlpha:0, display:'none', ease: Circ.easeOut})
					;
			}
		});

		const page5EnterTl = new TimelineMax({
			delay: 1,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true
		});
		page5EnterTl.to('.bee1', 2, {alpha: 0, yPercent: 100, scale: 0, xPercent: -100, rotation: 100, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.to('.bee2', 2, {alpha: 0, yPercent: 200, xPercent: 100, scale: 0, rotation: -30, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.to('.bee3', 2, {alpha: 0, yPercent: 0, xPercent: 0, scale: 0, rotation: -90, force3D: true, ease: Expo.easeInOut}, "p5e");
		page5EnterTl.fromTo('#page5 .yellow', 2, {alpha: 1, yPercent: 0, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeOut}, "p5e");
		page5EnterTl.fromTo('#page5 h6', 2, {alpha: 0, yPercent: 100, force3D: true}, {alpha: 1, yPercent: 0, ease: Expo.easeOut}, "p5e+=.25");
		page5EnterTl.fromTo('#page5 .white', 2, {yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=.75");
		page5EnterTl.fromTo('#page5 .bg', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=1");
		page5EnterTl.fromTo('#page5 .contain', 2, {alpha: 0, yPercent: 100, force3D:true}, {alpha: 1, yPercent: 0, force3D:true, ease: Expo.easeOut}, "p5e+=1.25");
	};

	const page5Leave = function() {
		const page5LeaveTl = new TimelineMax({
			delay: 0,
			paused: false,
			repeat: 0,
			repeatDelay: 0,
			yoyo: false,
			smoothChildTiming: true,
		});
		page5LeaveTl.to('#page5 .yellow', 1, {alpha: 0, yPercent: 100, force3D: true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 h6', 1, {alpha: 0, yPercent: 100, force3D: true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .white', 1, {yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .bg', 1, {alpha: 0, yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
		page5LeaveTl.to('#page5 .contain', 1, {alpha: 0, yPercent: 100, force3D:true, ease: Expo.easeOut}, "p5l");
	};

	return {
		page5Enter: page5Enter,
		page5Leave: page5Leave,
	};
})();
