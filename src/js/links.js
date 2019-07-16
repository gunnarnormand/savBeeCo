const linksModule = (function() {
	const $links = document.querySelectorAll('.inline-link');
	const init = function() {

		function linkEnter(e) {
			let $highlight = document.createElement('span');
      $highlight.classList.add('link-highlight');
      this.append($highlight);
      let highlighLinkTl = new TimelineMax();
        highlighLinkTl
          .to($highlight, 0.5, {width:'100%', ease: Expo.easeOut});
		}

		function linkLeave(e) {
			let highlight = this.querySelector('.link-highlight');
      highlight.remove();
		}

		$links.forEach(link => link.addEventListener('mouseenter', linkEnter));
		$links.forEach(link => link.addEventListener('mouseleave', linkLeave));

	};
	return {
		init: init
	};
})();
