const shoppingCart = (function() {
	const $body = document.querySelector('body');
	const $herbBtns = document.querySelectorAll('.herb-btns');
	const $donateBtns = document.querySelectorAll('.donate-btn');
	const $aside = document.querySelector('aside');
	const $overlay = document.querySelector('.overlay');
	const $overlayBg = document.querySelector('.overlay-bg');
	const $overlayBee = document.querySelector('.overlay-bee');
	const $hive = document.querySelector('#shop-btn');
	const $cart = document.querySelector('#cart');
	const $products = document.querySelector('#products');
	const $totalCost = document.querySelector('.total-cost');
	const $estimatedTotal = document.querySelector('.estimated-total-cost');
	const $menuBack = document.querySelector('#menu-back');
	const $menuCart = document.querySelector('#menu-cart');
	const $tinybees = document.querySelector('.tinybees');
	const $header = document.querySelector('header[role="header"]');
	const $checkoutBtn = document.querySelector('#checkout-btn');
	const $checkoutBtnSvg = document.querySelector('.checkout-btn-1');
	const $checkoutBtnSvgArrow = document.querySelector('.checkout-btn-2');
	const $checkoutOverlay = document.querySelector('#overlay-checkout');
	const $checkoutMessageWrap = document.querySelector('.checkout-message-wrap');
	const init = function() {
		$checkoutBtn.addEventListener('mouseenter', (e) => {
			TweenMax.to($checkoutBtnSvg, 1, {
				drawSVG: 0,
				stroke: "transparent",
				strokeWidth: '1.55px',
				ease: Circ.easeOut
			});
			TweenMax.to($checkoutBtnSvgArrow, 1, {
				x: -5,
				force3D: true,
				ease: Circ.easeOut
			});
		});
		$checkoutBtn.addEventListener('mouseleave', (e) => {
			TweenMax.to($checkoutBtnSvg, 1, {
				drawSVG: '100%',
				stroke: "#512d1d",
				strokeWidth: '1.55px',
				ease: Circ.easeOut
			});
			TweenMax.to($checkoutBtnSvgArrow, 1, {
				x: 0,
				force3D: true,
				ease: Circ.easeOut
			});
		});

		$herbBtns.forEach(button => button.addEventListener('click', (e) => {
			e.preventDefault();
			let price = button.getAttribute('data-price');
			let name = button.getAttribute('data-name');
			let description = button.getAttribute('data-description');
			addToCart(e, name, price, description);
			TweenMax.fromTo($hive, 1, {alpha: 0, yPercent: -100, force3D:true, ease: Bounce.easeOut}, {alpha: 1, yPercent: 0, force3D:true, ease: Bounce.easeOut});
		}));
		$donateBtns.forEach(button => button.addEventListener('click', (e) => {
			e.preventDefault();
			let price = button.getAttribute('data-price');
			let name = button.getAttribute('data-name');
			let description = button.getAttribute('data-description');
			addToCart(e, name, price, description);
			TweenMax.fromTo($hive, 1, {alpha: 0, yPercent: -100, force3D:true, ease: Bounce.easeOut}, {alpha: 1, yPercent: 0, force3D:true, ease: Bounce.easeOut});
		}));

		let totalProductCount = 0;
		let smallGardens = 0;
		let mediumGardens = 0;
		let largeGardens = 0;
		let donateSmallHive = 0;
		let donateSmallGarden = 0;
		let donateMediumHive = 0;
		let donateMediumGarden = 0;
		let donateLargeHive = 0;
		let donateLargeGarden = 0;
		let totalCost = 0;

		CustomWiggle.create('wiggle1x', {wiggles: 5, type:'random'});
		CustomWiggle.create('wiggle1y', {wiggles: 7, type:'random'});
		CustomWiggle.create('wiggle2x', {wiggles: 8, type:'random'});
		CustomWiggle.create('wiggle2y', {wiggles: 9, type:'random'});
		CustomWiggle.create('wiggle3x', {wiggles: 5, type:'random'});
		CustomWiggle.create('wiggle3y', {wiggles: 4, type:'random'});
		CustomWiggle.create('wiggle4x', {wiggles: 10, type:'random'});
		CustomWiggle.create('wiggle4y', {wiggles: 6, type:'random'});
		CustomWiggle.create('wiggle5x', {wiggles: 14, type:'random'});
		CustomWiggle.create('wiggle5y', {wiggles: 7, type:'random'});

		function updateCost(cost, price) {
			let currentCost = cost + price;
			return currentCost;
		}

		function decreaseCost(cost, price, amount) {
			let priceActual = price * amount;
			let currentCost = cost - priceActual;
			totalProductCount--;
			$cart.innerHTML = `
				<span>cart(${totalProductCount})</span>
			`;
			$menuCart.innerHTML = `
				shopping cart <span>(${totalProductCount})</span>
			`;
			if (totalProductCount === 0) {
				$cart.innerHTML = ``;
			}
			if (totalProductCount < 1) {
				TweenMax.to('#tinybee1', .5, {alpha: 0, x:0, y:0});
			} if (totalProductCount < 2) {
				TweenMax.to('#tinybee2', .5, {alpha: 0, x:0, y:0});
			} if (totalProductCount < 3) {
				TweenMax.to('#tinybee3', .5, {alpha: 0, x:0, y:0});
			} if (totalProductCount < 4) {
				TweenMax.to('#tinybee4', .5, {alpha: 0, x:0, y:0});
			}
			if (totalProductCount < 5) {
				TweenMax.to('#tinybee5', .5, {alpha: 0, x:0, y:0});
			}
			return currentCost;
		}

		function addToCart(e, name, price, description) {
			totalProductCount++;
			$cart.innerHTML = `
				<span>cart(${totalProductCount})</span>
			`;
			$menuCart.innerHTML = `
				shopping cart <span>(${totalProductCount})</span>
			`;
			if (totalProductCount === 1) {
				TweenMax.to('#tinybee1', .5, {alpha: 1});
				TweenMax.to('#tinybee1', 1, {x: 50, ease: 'wiggle1x', repeat: -1});
				TweenMax.to('#tinybee1', 1, {y: -50, ease: 'wiggle1y', repeat: -1});
			} if (totalProductCount === 2) {
				TweenMax.to('#tinybee2', .5, {alpha: 1});
				TweenMax.to('#tinybee2', 1.5, {x: 50, ease: 'wiggle2x', repeat: -1});
				TweenMax.to('#tinybee2', 1.5, {y: -50, ease: 'wiggle2y', repeat: -1});
			} if (totalProductCount === 3) {
				TweenMax.to('#tinybee3', .5, {alpha: 1});
				TweenMax.to('#tinybee3', 1, {x: 50, ease: 'wiggle3x', repeat: -1});
				TweenMax.to('#tinybee3', 1, {y: -50, ease: 'wiggle3y', repeat: -1});
			} if (totalProductCount === 4) {
				TweenMax.to('#tinybee4', .5, {alpha: 1});
				TweenMax.to('#tinybee4', .8, {x: 50, ease: 'wiggle4x', repeat: -1});
				TweenMax.to('#tinybee4', .8, {y: -50, ease: 'wiggle4y', repeat: -1});
			}
			if (totalProductCount === 5) {
				TweenMax.to('#tinybee5', .5, {alpha: 1});
				TweenMax.to('#tinybee5', .7, {x: 50, ease: 'wiggle5x', repeat: -1});
				TweenMax.to('#tinybee5', .7, {y: -50, ease: 'wiggle5y', repeat: -1});
			}

			if (name === 'garden: small') {
				smallGardens++;
				if (smallGardens <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${smallGardens}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let smallGardensCount = document.querySelector(`[data-count="${name}"]`);
					smallGardensCount.innerHTML = `${smallGardens}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(smallGardens));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					smallGardens = 0;
				});
			}
			if (name === 'garden: medium') {
				mediumGardens++;
				if (mediumGardens <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${mediumGardens}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let mediumGardensCount = document.querySelector(`[data-count="${name}"]`);
					mediumGardensCount.innerHTML = `${mediumGardens}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(mediumGardens));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					mediumGardens = 0;
				});
			}
			if (name === 'garden: large') {
				largeGardens++;
				if (largeGardens <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${largeGardens}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let largeGardensCount = document.querySelector(`[data-count="${name}"]`);
					largeGardensCount.innerHTML = `${largeGardens}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(largeGardens));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					largeGardens = 0;
				});
			}
			if (name === 'donate: small hive') {
				donateSmallHive++;
				if (donateSmallHive <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateSmallHive}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateSmallHiveCount = document.querySelector(`[data-count="${name}"]`);
					donateSmallHiveCount.innerHTML = `${donateSmallHive}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateSmallHive));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateSmallHive = 0;
				});
			}
			if (name === 'donate: small garden') {
				donateSmallGarden++;
				if (donateSmallGarden <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateSmallGarden}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateSmallGardenCount = document.querySelector(`[data-count="${name}"]`);
					donateSmallGardenCount.innerHTML = `${donateSmallGarden}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateSmallGarden));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateSmallGarden = 0;
				});
			}
			if (name === 'donate: medium hive') {
				donateMediumHive++;
				if (donateMediumHive <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateMediumHive}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateMediumHiveCount = document.querySelector(`[data-count="${name}"]`);
					donateMediumHiveCount.innerHTML = `${donateMediumHive}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateMediumHive));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateMediumHive = 0;
				});
			}
			if (name === 'donate: medium garden') {
				donateMediumGarden++;
				if (donateMediumGarden <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateMediumGarden}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateMediumGardenCount = document.querySelector(`[data-count="${name}"]`);
					donateMediumGardenCount.innerHTML = `${donateMediumGarden}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateMediumGarden));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateMediumGarden = 0;
				});
			}
			if (name === 'donate: large hive') {
				donateLargeHive++;
				if (donateLargeHive <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateLargeHive}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateLargeHiveCount = document.querySelector(`[data-count="${name}"]`);
					donateLargeHiveCount.innerHTML = `${donateLargeHive}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateLargeHive));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateLargeHive = 0;
				});
			}
			if (name === 'donate: large garden') {
				donateLargeGarden++;
				if (donateLargeGarden <= 1) {
					$products.insertAdjacentHTML('afterbegin', `<div class="product">
						<div class="product-info"><p>${name}</p><p>${description}</p></div>
						<div class="product-count"><span data-count="${name}">${donateLargeGarden}</span></div>
						<div class="product-price"><span>$${price}.00</span><span data-remove="${name}" class="remove inline-link">remove</span></div>
					</div>`);
				} else {
					let donateLargeGardenCount = document.querySelector(`[data-count="${name}"]`);
					donateLargeGardenCount.innerHTML = `${donateLargeGarden}`;
				}
				let removeBtn = document.querySelector(`[data-remove="${name}"]`);
				let productToRemove = removeBtn.parentElement.parentElement;
				removeBtn.addEventListener('click', () => {
					totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateLargeGarden));
					$totalCost.innerHTML = `$${totalCost}.00`;
					$estimatedTotal.innerHTML = `$${totalCost}.00`;
					productToRemove.remove();
					donateLargeGarden = 0;
				});
			}

			totalCost = updateCost(totalCost, parseInt(price));

			$totalCost.innerHTML = `$${totalCost}.00`;
			$estimatedTotal.innerHTML = `$${totalCost}.00`;
		}

		function showMenu(e) {
			$aside.setAttribute('data-menu', 'show');
			const menuEnterTl = new TimelineMax();
			menuEnterTl
				.fromTo($aside, 0.25, {xPercent:100},{xPercent:0, autoAlpha:1, display:'flex', force3D:true, ease: Circ.easeOut}, 'in')
				.to($cart, 0.25, {autoAlpha:0, ease: Circ.easeOut}, 'in')
				.fromTo($overlay, 1, {xPercent:100},{xPercent:0, force3D:true, ease: Circ.easeOut}, 'in')
				.fromTo($overlayBg, 1, {xPercent:100},{xPercent:0, force3D:true, ease: Circ.easeOut}, 'in')
				.fromTo($overlayBee, 1, {xPercent:100},{xPercent:0, force3D:true, ease: Circ.easeOut}, 'in+=0.2')
				.to($hive, 0.25, {autoAlpha:0, ease: Circ.easeOut}, 'in-=0.25')
				.to($header, 0.25, {yPercent:-100, force3D:true, ease: Circ.easeOut}, 'in-=0.25')
				.to('.onepage-pagination', 0.25, {xPercent:-100, force3D:true, ease: Circ.easeOut}, 'in')
				;
			$tinybees.classList.add('menu-active');
			$body.classList.add('disabled-onepage-scroll');

		}

		function hideMenu(e) {
			$aside.setAttribute('data-menu', 'hide');
			const menuHideTl = new TimelineMax();
			menuHideTl
				.to($aside, 0.75, {xPercent:-100, autoAlpha:0, display:'none', force3D:true, ease: Circ.easeInOut}, 'out')
				.to($cart, 0.25, {autoAlpha:1, ease: Circ.easeOut}, 'out')

				.to($hive, 0.25, {autoAlpha:1, ease: Circ.easeOut}, 'out')
				.to($header, 0.25, {yPercent:0, force3D:true, ease: Circ.easeOut}, 'out')
				.to('.onepage-pagination', 0.25, {xPercent:0, force3D:true, ease: Circ.easeOut}, 'out')
				;
				$tinybees.classList.remove('menu-active');
				$body.classList.remove('disabled-onepage-scroll');
		}

		$hive.addEventListener('click', (e) => {
			e.preventDefault();
			showMenu(e);
		});

		$hive.addEventListener('mouseenter', (e) => {
			e.preventDefault();
			if (totalProductCount <= 0) {
				let hiveHoverTL = new TimelineMax();
					hiveHoverTL
						.to('#tooltip', .5, {alpha: 1, ease: Circ.easeOut});
			} else {
				return;
			}
		});

		$hive.addEventListener('mouseleave', (e) => {
			e.preventDefault();
			if (totalProductCount <= 0) {
				let hiveLeaveTL = new TimelineMax();
					hiveLeaveTL
						.to('#tooltip', .5, {alpha: 0, ease: Circ.easeOut});
			} else {
				return;
			}
		});

		$menuBack.addEventListener('click', (e) => {
			e.preventDefault();
			hideMenu(e);
		});

		$menuBack.addEventListener('mouseenter', (e) => {
			e.preventDefault();
			TweenMax.to($menuBack, 0.25, {x:-5, force3D:true, ease: Circ.easeOut});
		});

		$menuBack.addEventListener('mouseleave', (e) => {
			e.preventDefault();
			TweenMax.to($menuBack, 0.25, {x:0, force3D:true, ease: Circ.easeOut});
		});

		$overlay.addEventListener('click', (e) => {
			e.preventDefault();
			hideMenu(e);
		});

		$checkoutBtn.addEventListener('click', (e) => {
			e.preventDefault();
			let message = $checkoutMessageWrap.firstElementChild.firstElementChild.nextElementSibling;
			message.innerHTML = `Thanks for trying to purchase and save the bees, however this is not a real product.`;
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

	};
	return {
		init: init
	};
})();
