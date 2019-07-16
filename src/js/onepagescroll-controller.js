const onepagescrollControllerModule = (function() {

	const init = () => {
		let currentIndex = '0';
		// console.log(`one page scroll controller!`);
		onePageScroll("#main", {
      sectionContainer: "section",
      easing: "cubic-bezier(.5, 0, .5, 1)",
      animationTime: 1000,
      pagination: true,
      updateURL: false,
      beforeMove: function(index, currentSection) {
				// console.log(currentIndex, index);
				if (currentIndex == 0) page1Module.page1Leave();
				if (currentIndex == 1) page1Module.page1Leave();
				if (currentIndex == 2) page2Module.page2Leave();
				if (currentIndex == 3) page3Module.page3Leave();
				if (currentIndex == 4) page4Module.page4Leave();
				if (currentIndex == 5) page5Module.page5Leave();
				if (index == 1) page1Module.page1Enter();
				if (index == 2) page2Module.page2Enter();
				if (index == 3) page3Module.page3Enter();
				if (index == 4) page4Module.page4Enter();
				if (index == 5) page5Module.page5Enter();
      },
      afterMove: function(index, currentSection) {
				currentIndex = index;
				// console.log(currentIndex, index);
      },
      loop: true,
      keyboard: true,
      responsiveFallback: false,
    });
	};

	return {
		init: init
	};
})();
