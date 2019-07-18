"use strict";

var shoppingCart = function () {
  var $body = document.querySelector('body');
  var $herbBtns = document.querySelectorAll('.herb-btns');
  var $donateBtns = document.querySelectorAll('.donate-btn');
  var $aside = document.querySelector('aside');
  var $overlay = document.querySelector('.overlay');
  var $overlayBg = document.querySelector('.overlay-bg');
  var $overlayBee = document.querySelector('.overlay-bee');
  var $hive = document.querySelector('#shop-btn');
  var $cart = document.querySelector('#cart');
  var $products = document.querySelector('#products');
  var $totalCost = document.querySelector('.total-cost');
  var $estimatedTotal = document.querySelector('.estimated-total-cost');
  var $menuBack = document.querySelector('#menu-back');
  var $menuCart = document.querySelector('#menu-cart');
  var $tinybees = document.querySelector('.tinybees');
  var $header = document.querySelector('header[role="header"]');
  var $checkoutBtn = document.querySelector('#checkout-btn');
  var $checkoutBtnSvg = document.querySelector('.checkout-btn-1');
  var $checkoutBtnSvgArrow = document.querySelector('.checkout-btn-2');
  var $checkoutOverlay = document.querySelector('#overlay-checkout');
  var $checkoutMessageWrap = document.querySelector('.checkout-message-wrap');

  var init = function init() {
    $checkoutBtn.addEventListener('mouseenter', function (e) {
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
    $checkoutBtn.addEventListener('mouseleave', function (e) {
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
    $herbBtns.forEach(function (button) {
      return button.addEventListener('click', function (e) {
        e.preventDefault();
        var price = button.getAttribute('data-price');
        var name = button.getAttribute('data-name');
        var description = button.getAttribute('data-description');
        addToCart(e, name, price, description);
        TweenMax.fromTo($hive, 1, {
          alpha: 0,
          yPercent: -100,
          force3D: true,
          ease: Bounce.easeOut
        }, {
          alpha: 1,
          yPercent: 0,
          force3D: true,
          ease: Bounce.easeOut
        });
      });
    });
    $donateBtns.forEach(function (button) {
      return button.addEventListener('click', function (e) {
        e.preventDefault();
        var price = button.getAttribute('data-price');
        var name = button.getAttribute('data-name');
        var description = button.getAttribute('data-description');
        addToCart(e, name, price, description);
        TweenMax.fromTo($hive, 1, {
          alpha: 0,
          yPercent: -100,
          force3D: true,
          ease: Bounce.easeOut
        }, {
          alpha: 1,
          yPercent: 0,
          force3D: true,
          ease: Bounce.easeOut
        });
      });
    });
    var totalProductCount = 0;
    var smallGardens = 0;
    var mediumGardens = 0;
    var largeGardens = 0;
    var donateSmallHive = 0;
    var donateSmallGarden = 0;
    var donateMediumHive = 0;
    var donateMediumGarden = 0;
    var donateLargeHive = 0;
    var donateLargeGarden = 0;
    var totalCost = 0;
    CustomWiggle.create('wiggle1x', {
      wiggles: 5,
      type: 'random'
    });
    CustomWiggle.create('wiggle1y', {
      wiggles: 7,
      type: 'random'
    });
    CustomWiggle.create('wiggle2x', {
      wiggles: 8,
      type: 'random'
    });
    CustomWiggle.create('wiggle2y', {
      wiggles: 9,
      type: 'random'
    });
    CustomWiggle.create('wiggle3x', {
      wiggles: 5,
      type: 'random'
    });
    CustomWiggle.create('wiggle3y', {
      wiggles: 4,
      type: 'random'
    });
    CustomWiggle.create('wiggle4x', {
      wiggles: 10,
      type: 'random'
    });
    CustomWiggle.create('wiggle4y', {
      wiggles: 6,
      type: 'random'
    });
    CustomWiggle.create('wiggle5x', {
      wiggles: 14,
      type: 'random'
    });
    CustomWiggle.create('wiggle5y', {
      wiggles: 7,
      type: 'random'
    });

    function updateCost(cost, price) {
      var currentCost = cost + price;
      return currentCost;
    }

    function decreaseCost(cost, price, amount) {
      var priceActual = price * amount;
      var currentCost = cost - priceActual;
      totalProductCount--;
      $cart.innerHTML = "\n\t\t\t\t<span>cart(".concat(totalProductCount, ")</span>\n\t\t\t");
      $menuCart.innerHTML = "\n\t\t\t\tshopping cart <span>(".concat(totalProductCount, ")</span>\n\t\t\t");

      if (totalProductCount === 0) {
        $cart.innerHTML = "";
      }

      if (totalProductCount < 1) {
        TweenMax.to('#tinybee1', .5, {
          alpha: 0,
          x: 0,
          y: 0
        });
      }

      if (totalProductCount < 2) {
        TweenMax.to('#tinybee2', .5, {
          alpha: 0,
          x: 0,
          y: 0
        });
      }

      if (totalProductCount < 3) {
        TweenMax.to('#tinybee3', .5, {
          alpha: 0,
          x: 0,
          y: 0
        });
      }

      if (totalProductCount < 4) {
        TweenMax.to('#tinybee4', .5, {
          alpha: 0,
          x: 0,
          y: 0
        });
      }

      if (totalProductCount < 5) {
        TweenMax.to('#tinybee5', .5, {
          alpha: 0,
          x: 0,
          y: 0
        });
      }

      return currentCost;
    }

    function addToCart(e, name, price, description) {
      totalProductCount++;
      $cart.innerHTML = "\n\t\t\t\t<span>cart(".concat(totalProductCount, ")</span>\n\t\t\t");
      $menuCart.innerHTML = "\n\t\t\t\tshopping cart <span>(".concat(totalProductCount, ")</span>\n\t\t\t");

      if (totalProductCount === 1) {
        TweenMax.to('#tinybee1', .5, {
          alpha: 1
        });
        TweenMax.to('#tinybee1', 1, {
          x: 50,
          ease: 'wiggle1x',
          repeat: -1
        });
        TweenMax.to('#tinybee1', 1, {
          y: -50,
          ease: 'wiggle1y',
          repeat: -1
        });
      }

      if (totalProductCount === 2) {
        TweenMax.to('#tinybee2', .5, {
          alpha: 1
        });
        TweenMax.to('#tinybee2', 1.5, {
          x: 50,
          ease: 'wiggle2x',
          repeat: -1
        });
        TweenMax.to('#tinybee2', 1.5, {
          y: -50,
          ease: 'wiggle2y',
          repeat: -1
        });
      }

      if (totalProductCount === 3) {
        TweenMax.to('#tinybee3', .5, {
          alpha: 1
        });
        TweenMax.to('#tinybee3', 1, {
          x: 50,
          ease: 'wiggle3x',
          repeat: -1
        });
        TweenMax.to('#tinybee3', 1, {
          y: -50,
          ease: 'wiggle3y',
          repeat: -1
        });
      }

      if (totalProductCount === 4) {
        TweenMax.to('#tinybee4', .5, {
          alpha: 1
        });
        TweenMax.to('#tinybee4', .8, {
          x: 50,
          ease: 'wiggle4x',
          repeat: -1
        });
        TweenMax.to('#tinybee4', .8, {
          y: -50,
          ease: 'wiggle4y',
          repeat: -1
        });
      }

      if (totalProductCount === 5) {
        TweenMax.to('#tinybee5', .5, {
          alpha: 1
        });
        TweenMax.to('#tinybee5', .7, {
          x: 50,
          ease: 'wiggle5x',
          repeat: -1
        });
        TweenMax.to('#tinybee5', .7, {
          y: -50,
          ease: 'wiggle5y',
          repeat: -1
        });
      }

      if (name === 'garden: small') {
        smallGardens++;

        if (smallGardens <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(smallGardens, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var smallGardensCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          smallGardensCount.innerHTML = "".concat(smallGardens);
        }

        var removeBtn = document.querySelector("[data-remove=\"".concat(name, "\"]"));
        var productToRemove = removeBtn.parentElement.parentElement;
        removeBtn.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(smallGardens));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");
          productToRemove.remove();
          smallGardens = 0;
        });
      }

      if (name === 'garden: medium') {
        mediumGardens++;

        if (mediumGardens <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(mediumGardens, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var mediumGardensCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          mediumGardensCount.innerHTML = "".concat(mediumGardens);
        }

        var _removeBtn = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove = _removeBtn.parentElement.parentElement;

        _removeBtn.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(mediumGardens));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove.remove();

          mediumGardens = 0;
        });
      }

      if (name === 'garden: large') {
        largeGardens++;

        if (largeGardens <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(largeGardens, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var largeGardensCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          largeGardensCount.innerHTML = "".concat(largeGardens);
        }

        var _removeBtn2 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove2 = _removeBtn2.parentElement.parentElement;

        _removeBtn2.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(largeGardens));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove2.remove();

          largeGardens = 0;
        });
      }

      if (name === 'donate: small hive') {
        donateSmallHive++;

        if (donateSmallHive <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateSmallHive, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateSmallHiveCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateSmallHiveCount.innerHTML = "".concat(donateSmallHive);
        }

        var _removeBtn3 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove3 = _removeBtn3.parentElement.parentElement;

        _removeBtn3.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateSmallHive));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove3.remove();

          donateSmallHive = 0;
        });
      }

      if (name === 'donate: small garden') {
        donateSmallGarden++;

        if (donateSmallGarden <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateSmallGarden, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateSmallGardenCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateSmallGardenCount.innerHTML = "".concat(donateSmallGarden);
        }

        var _removeBtn4 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove4 = _removeBtn4.parentElement.parentElement;

        _removeBtn4.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateSmallGarden));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove4.remove();

          donateSmallGarden = 0;
        });
      }

      if (name === 'donate: medium hive') {
        donateMediumHive++;

        if (donateMediumHive <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateMediumHive, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateMediumHiveCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateMediumHiveCount.innerHTML = "".concat(donateMediumHive);
        }

        var _removeBtn5 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove5 = _removeBtn5.parentElement.parentElement;

        _removeBtn5.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateMediumHive));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove5.remove();

          donateMediumHive = 0;
        });
      }

      if (name === 'donate: medium garden') {
        donateMediumGarden++;

        if (donateMediumGarden <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateMediumGarden, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateMediumGardenCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateMediumGardenCount.innerHTML = "".concat(donateMediumGarden);
        }

        var _removeBtn6 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove6 = _removeBtn6.parentElement.parentElement;

        _removeBtn6.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateMediumGarden));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove6.remove();

          donateMediumGarden = 0;
        });
      }

      if (name === 'donate: large hive') {
        donateLargeHive++;

        if (donateLargeHive <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateLargeHive, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateLargeHiveCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateLargeHiveCount.innerHTML = "".concat(donateLargeHive);
        }

        var _removeBtn7 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove7 = _removeBtn7.parentElement.parentElement;

        _removeBtn7.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateLargeHive));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove7.remove();

          donateLargeHive = 0;
        });
      }

      if (name === 'donate: large garden') {
        donateLargeGarden++;

        if (donateLargeGarden <= 1) {
          $products.insertAdjacentHTML('afterbegin', "<div class=\"product\">\n\t\t\t\t\t\t<div class=\"product-info\"><p>".concat(name, "</p><p>").concat(description, "</p></div>\n\t\t\t\t\t\t<div class=\"product-count\"><span data-count=\"").concat(name, "\">").concat(donateLargeGarden, "</span></div>\n\t\t\t\t\t\t<div class=\"product-price\"><span>$").concat(price, ".00</span><span data-remove=\"").concat(name, "\" class=\"remove inline-link\">remove</span></div>\n\t\t\t\t\t</div>"));
        } else {
          var donateLargeGardenCount = document.querySelector("[data-count=\"".concat(name, "\"]"));
          donateLargeGardenCount.innerHTML = "".concat(donateLargeGarden);
        }

        var _removeBtn8 = document.querySelector("[data-remove=\"".concat(name, "\"]"));

        var _productToRemove8 = _removeBtn8.parentElement.parentElement;

        _removeBtn8.addEventListener('click', function () {
          totalCost = decreaseCost(totalCost, parseInt(price), parseInt(donateLargeGarden));
          $totalCost.innerHTML = "$".concat(totalCost, ".00");
          $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");

          _productToRemove8.remove();

          donateLargeGarden = 0;
        });
      }

      totalCost = updateCost(totalCost, parseInt(price));
      $totalCost.innerHTML = "$".concat(totalCost, ".00");
      $estimatedTotal.innerHTML = "$".concat(totalCost, ".00");
    }

    function showMenu(e) {
      $aside.setAttribute('data-menu', 'show');
      var menuEnterTl = new TimelineMax();
      menuEnterTl.fromTo($aside, 0.25, {
        xPercent: 100
      }, {
        xPercent: 0,
        autoAlpha: 1,
        display: 'flex',
        force3D: true,
        ease: Circ.easeOut
      }, 'in').to($cart, 0.25, {
        autoAlpha: 0,
        ease: Circ.easeOut
      }, 'in').fromTo($overlay, 1, {
        xPercent: 100
      }, {
        xPercent: 0,
        force3D: true,
        ease: Circ.easeOut
      }, 'in').fromTo($overlayBg, 1, {
        xPercent: 100
      }, {
        xPercent: 0,
        force3D: true,
        ease: Circ.easeOut
      }, 'in').fromTo($overlayBee, 1, {
        xPercent: 100
      }, {
        xPercent: 0,
        force3D: true,
        ease: Circ.easeOut
      }, 'in+=0.2').to($hive, 0.25, {
        autoAlpha: 0,
        ease: Circ.easeOut
      }, 'in-=0.25').to($header, 0.25, {
        yPercent: -100,
        force3D: true,
        ease: Circ.easeOut
      }, 'in-=0.25').to('.onepage-pagination', 0.25, {
        xPercent: -100,
        force3D: true,
        ease: Circ.easeOut
      }, 'in');
      $tinybees.classList.add('menu-active');
      $body.classList.add('disabled-onepage-scroll');
    }

    function hideMenu(e) {
      $aside.setAttribute('data-menu', 'hide');
      var menuHideTl = new TimelineMax();
      menuHideTl.to($aside, 0.75, {
        xPercent: -100,
        autoAlpha: 0,
        display: 'none',
        force3D: true,
        ease: Circ.easeInOut
      }, 'out').to($cart, 0.25, {
        autoAlpha: 1,
        ease: Circ.easeOut
      }, 'out').to($hive, 0.25, {
        autoAlpha: 1,
        ease: Circ.easeOut
      }, 'out').to($header, 0.25, {
        yPercent: 0,
        force3D: true,
        ease: Circ.easeOut
      }, 'out').to('.onepage-pagination', 0.25, {
        xPercent: 0,
        force3D: true,
        ease: Circ.easeOut
      }, 'out');
      $tinybees.classList.remove('menu-active');
      $body.classList.remove('disabled-onepage-scroll');
    }

    $hive.addEventListener('click', function (e) {
      e.preventDefault();
      showMenu(e);
    });
    $hive.addEventListener('mouseenter', function (e) {
      e.preventDefault();

      if (totalProductCount <= 0) {
        var hiveHoverTL = new TimelineMax();
        hiveHoverTL.to('#tooltip', .5, {
          alpha: 1,
          ease: Circ.easeOut
        });
      } else {
        return;
      }
    });
    $hive.addEventListener('mouseleave', function (e) {
      e.preventDefault();

      if (totalProductCount <= 0) {
        var hiveLeaveTL = new TimelineMax();
        hiveLeaveTL.to('#tooltip', .5, {
          alpha: 0,
          ease: Circ.easeOut
        });
      } else {
        return;
      }
    });
    $menuBack.addEventListener('click', function (e) {
      e.preventDefault();
      hideMenu(e);
    });
    $menuBack.addEventListener('mouseenter', function (e) {
      e.preventDefault();
      TweenMax.to($menuBack, 0.25, {
        x: -5,
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $menuBack.addEventListener('mouseleave', function (e) {
      e.preventDefault();
      TweenMax.to($menuBack, 0.25, {
        x: 0,
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $overlay.addEventListener('click', function (e) {
      e.preventDefault();
      hideMenu(e);
    });
    $checkoutBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var message = $checkoutMessageWrap.firstElementChild.firstElementChild.nextElementSibling;
      message.innerHTML = "Thanks for trying to purchase and save the bees, however this is not a real product.";
      var checkoutOverlayTl = new TimelineMax();
      checkoutOverlayTl.fromTo($checkoutOverlay, 0.5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        display: 'flex',
        ease: Circ.easeOut
      }).fromTo($checkoutMessageWrap, 0.5, {
        yPercent: 100,
        force3D: true,
        autoAlpha: 0
      }, {
        yPercent: 0,
        force3D: true,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.7)
      });
    });
    $checkoutOverlay.addEventListener('click', function (e) {
      if (e.target !== $checkoutOverlay) {
        return;
      } else {
        var checkoutOverlayOutTl = new TimelineMax();
        checkoutOverlayOutTl.to($checkoutOverlay, 0.5, {
          autoAlpha: 0,
          display: 'none',
          ease: Circ.easeOut
        });
      }
    });
  };

  return {
    init: init
  };
}();
"use strict";

var linksModule = function () {
  var $links = document.querySelectorAll('.inline-link');

  var init = function init() {
    function linkEnter(e) {
      var $highlight = document.createElement('span');
      $highlight.classList.add('link-highlight');
      this.append($highlight);
      var highlighLinkTl = new TimelineMax();
      highlighLinkTl.to($highlight, 0.5, {
        width: '100%',
        ease: Expo.easeOut
      });
    }

    function linkLeave(e) {
      var highlight = this.querySelector('.link-highlight');
      highlight.remove();
    }

    $links.forEach(function (link) {
      return link.addEventListener('mouseenter', linkEnter);
    });
    $links.forEach(function (link) {
      return link.addEventListener('mouseleave', linkLeave);
    });
  };

  return {
    init: init
  };
}();
"use strict";

var loaderModule = function () {
  var $loader = document.querySelector('#loader');

  var init = function init() {
    var loaderTl = new TimelineMax({
      onStart: page1Module.page1Enter,
      delay: 2,
      smoothChildTiming: true
    }).to($loader, 2, {
      yPercent: 100,
      alpha: 1,
      force3D: true,
      ease: Expo.easeInOut
    }, "loader").from('#nav-logo', 4, {
      alpha: 0,
      yPercent: -200,
      force3D: true,
      ease: Expo.easeOut
    }, "loader").to('#loader img', 1, {
      alpha: 0,
      yPercent: 100,
      rotation: 360,
      force3D: true,
      ease: Expo.easeIn
    }, "loader").from('.onepage-pagination', 5, {
      alpha: 0,
      xPercent: -100,
      force3D: true,
      ease: Expo.easeOut
    }, "loader");
  };

  return {
    init: init
  };
}();
"use strict";

window.onload = function () {
  var circle1 = document.querySelector('#path-1');
  var circle2 = document.querySelector('#path-2');
  var circle3 = document.querySelector('#path-3');
  var circle4 = document.querySelector('#path-4');
  var scrollerTl = new TimelineMax({
    repeat: -1
  });
  scrollerTl.from(circle1, .5, {
    drawSVG: 0,
    ease: Circ.easeOut
  }, .5).from(circle2, .6, {
    drawSVG: 0,
    ease: Circ.easeOut
  }).from(circle3, .7, {
    drawSVG: 0,
    ease: Circ.easeOut
  }).from(circle4, .8, {
    drawSVG: 0,
    ease: Circ.easeOut
  }).to(circle1, .3, {
    drawSVG: 0,
    stroke: "#f0b227",
    ease: Circ.easeOut
  }).to(circle2, .3, {
    drawSVG: 0,
    stroke: "#f0b227",
    ease: Circ.easeOut
  }).to(circle3, .3, {
    drawSVG: 0,
    stroke: "#f0b227",
    ease: Circ.easeOut
  }).to(circle4, .3, {
    drawSVG: 0,
    stroke: "#f0b227",
    ease: Circ.easeOut
  });
  onepagescrollControllerModule.init();
  loaderModule.init();
  shoppingCart.init();
  linksModule.init();
}; // window.onresize = () => {
// 	setTimeout(() => {
// 		window.location.reload();
// 	}, 200);
// };
"use strict";

var onepagescrollControllerModule = function () {
  var init = function init() {
    var currentIndex = '0'; // console.log(`one page scroll controller!`);

    onePageScroll("#main", {
      sectionContainer: "section",
      easing: "cubic-bezier(.5, 0, .5, 1)",
      animationTime: 1000,
      pagination: true,
      updateURL: false,
      beforeMove: function beforeMove(index, currentSection) {
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
      afterMove: function afterMove(index, currentSection) {
        currentIndex = index; // console.log(currentIndex, index);
      },
      loop: true,
      keyboard: true,
      responsiveFallback: false
    });
  };

  return {
    init: init
  };
}();
"use strict";

var page1Module = function () {
  var page1Enter = function page1Enter() {
    var page1EnterTl = new TimelineMax({
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
      display: 'block',
      ease: Expo.easeInOut
    }, "p1e");
    page1EnterTl.to('.bee2', 1, {
      alpha: 0
    }, "p1e");
    page1EnterTl.to('.bee3', 1, {
      alpha: 0
    }, "p1e");
  };

  var page1Leave = function page1Leave() {
    var page1LeaveTl = new TimelineMax({
      delay: 0,
      smoothChildTiming: true
    }).to('#scroll-indicator', 1, {
      alpha: 0,
      ease: Circ.easeOut
    }, "p1l").to('#page1 .bg', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p1l").to('#stb', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p1l").to('#scroll-indicator', 1, {
      alpha: 0,
      display: 'none',
      ease: Expo.easeInOut
    }, "p1l");
  };

  return {
    page1Enter: page1Enter,
    page1Leave: page1Leave
  };
}();

var page2Module = function () {
  var page2Enter = function page2Enter() {
    var page2EnterTl = new TimelineMax({
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

  var page2Leave = function page2Leave() {
    var page2LeaveTl = new TimelineMax({
      delay: 0,
      paused: false,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      smoothChildTiming: true
    }).to('#page2 .yellow', 1, {
      alpha: 0,
      xPercent: 100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l").to('#page2 .white', 1, {
      xPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l").to('#page2 h6', 1, {
      alpha: 0,
      xPercent: 100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l").to('#page2 .bg', 1, {
      alpha: 0,
      xPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l").to('#tc', 1, {
      alpha: 0,
      xPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l").to('#page2 p', 1, {
      alpha: 0,
      xPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p2l");
  };

  return {
    page2Enter: page2Enter,
    page2Leave: page2Leave
  };
}();

var page3Module = function () {
  var page3Enter = function page3Enter() {
    var $growBtn = document.querySelector('#grow-btn');
    var $growBtnSvg = document.querySelector('.grow-btn-1');
    var $growBtnSvgArrow = document.querySelector('.grow-btn-2');
    var $containBlock1 = document.querySelector('.contain-block-1');
    var $goBackGrowBtn = document.querySelector('#back-btn-grow');
    var $backBtnPath1 = document.querySelector('.back-btn-1');
    var $backBtnPath1_ = document.querySelector('.back-btn-1_');
    var $containBlock2 = document.querySelector('.contain-block-2');
    var $growBtns = document.querySelectorAll('.grow-btns');
    var $containBlock3 = document.querySelector('.contain-block-3');
    var $goBackHerbsBtn = document.querySelector('#back-btn-herbs');
    var $backBtnPath2 = document.querySelector('.back-btn-2');
    var $backBtnPath2_ = document.querySelector('.back-btn-2_');
    var $herbBtns = document.querySelectorAll('.herb-btns');
    TweenMax.to($containBlock1, 0.25, {
      x: 0,
      display: "flex",
      alpha: 1
    });
    TweenMax.set([$containBlock2, $containBlock3], {
      display: "none"
    });
    $growBtn.addEventListener('mouseenter', function (e) {
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
    $growBtn.addEventListener('mouseleave', function (e) {
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
    $growBtn.addEventListener('click', function (e) {
      // 1 to 2
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
    $goBackGrowBtn.addEventListener('click', function (e) {
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
    $goBackGrowBtn.addEventListener('mouseenter', function (e) {
      TweenMax.to($backBtnPath1, 0.25, {
        x: -10,
        force3D: true,
        ease: Back.easeOut.config(2)
      });
    });
    $goBackGrowBtn.addEventListener('mouseleave', function (e) {
      TweenMax.to($backBtnPath1, 1, {
        stroke: '#512d1d',
        x: 0,
        drawSVG: '100%',
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $growBtns.forEach(function (button) {
      return button.addEventListener('click', function (e) {
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
      });
    });
    $growBtns.forEach(function (button) {
      return button.addEventListener('mouseenter', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.garden-cls-2');
        var block = btnhovered.querySelector('.garden-cls-3');
        var arrow = btnhovered.querySelector('.garden-cls-4');
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
      });
    });
    $growBtns.forEach(function (button) {
      return button.addEventListener('mouseleave', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.garden-cls-2');
        var block = btnhovered.querySelector('.garden-cls-3');
        var arrow = btnhovered.querySelector('.garden-cls-4');
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
      });
    });
    $goBackHerbsBtn.addEventListener('click', function (e) {
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
    $goBackHerbsBtn.addEventListener('mouseenter', function (e) {
      TweenMax.to($backBtnPath2, 0.25, {
        x: -10,
        force3D: true,
        ease: Back.easeOut.config(2)
      });
    });
    $goBackHerbsBtn.addEventListener('mouseleave', function (e) {
      TweenMax.to($backBtnPath2, 1, {
        stroke: '#512d1d',
        x: 0,
        drawSVG: '100%',
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $herbBtns.forEach(function (button) {
      return button.addEventListener('mouseenter', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.herbs-cls-1');
        var block = btnhovered.querySelector('.herbs-cls-2');
        var $_ = btnhovered.querySelector('.price');
        TweenMax.to(line, 1, {
          drawSVG: '0%',
          stroke: '#f0b227',
          strokeWidth: '2px',
          ease: Circ.easeOut
        });
        TweenMax.to(block, .5, {
          fill: '#f0b227',
          x: 5,
          force3D: true,
          ease: Circ.easeOut
        });
        TweenMax.to($_, 1, {
          color: '#512d1d',
          x: 5,
          force3D: true,
          ease: Circ.easeOut
        });
      });
    });
    $herbBtns.forEach(function (button) {
      return button.addEventListener('mouseleave', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.herbs-cls-1');
        var block = btnhovered.querySelector('.herbs-cls-2');
        var $_ = btnhovered.querySelector('.price');
        TweenMax.to(line, 1, {
          drawSVG: '100%',
          stroke: '#512d1d',
          strokeWidth: '2px',
          ease: Circ.easeOut
        });
        TweenMax.to(block, .5, {
          fill: '#512d1d',
          x: 0,
          force3D: true,
          ease: Circ.easeOut
        });
        TweenMax.to($_, 1, {
          color: '#fcfcf5',
          x: 0,
          force3D: true,
          ease: Circ.easeOut
        });
      });
    });
    var page3EnterTl = new TimelineMax({
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

  var page3Leave = function page3Leave() {
    var page3LeaveTl = new TimelineMax({
      delay: 0,
      paused: false,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      smoothChildTiming: true
    }).to('#page3 .yellow', 1, {
      alpha: 0,
      yPercent: 100,
      force3D: true,
      ease: Circ.easeOut
    }, "p3l").to('#page3 h6', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p3l").to('#page3 .white', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p3l").to('#page3 .bg', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p3l").to('#page3 .contain', 1, {
      alpha: 0,
      yPercent: -100,
      force3D: true,
      ease: Circ.easeOut
    }, "p3l");
  };

  return {
    page3Enter: page3Enter,
    page3Leave: page3Leave
  };
}();

var page4Module = function () {
  var page4Enter = function page4Enter() {
    var $donateBtn = document.querySelector('#donate-btn');
    var $donateBtnSvg = document.querySelector('.donate-btn-1');
    var $donateBtnSvgArrow = document.querySelector('.donate-btn-2');
    var $donateBlock1 = document.querySelector('.donate-block-1');
    var $donateBlock2 = document.querySelector('.donate-block-2');
    var $donateButtons = document.querySelectorAll('.donate-btn');
    TweenMax.set([$donateBlock1], {
      display: 'flex'
    });
    TweenMax.set([$donateBlock2], {
      display: 'none'
    });
    $donateBtn.addEventListener('mouseenter', function (e) {
      TweenMax.to($donateBtnSvg, 1, {
        drawSVG: 0,
        stroke: "transparent",
        strokeWidth: '2.21px',
        ease: Circ.easeOut
      });
      TweenMax.to($donateBtnSvgArrow, 1, {
        x: -5,
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $donateBtn.addEventListener('mouseleave', function (e) {
      TweenMax.to($donateBtnSvg, 1, {
        drawSVG: '100%',
        stroke: "#512d1d",
        strokeWidth: '2.21px',
        ease: Circ.easeOut
      });
      TweenMax.to($donateBtnSvgArrow, 1, {
        x: 0,
        force3D: true,
        ease: Circ.easeOut
      });
    });
    $donateBtn.addEventListener('click', function (e) {
      TweenMax.set([$donateBlock1], {
        display: 'none'
      });
      TweenMax.set([$donateBlock2], {
        display: 'flex'
      });
      TweenMax.fromTo($donateBlock2, 0.5, {
        alpha: 0,
        x: 100,
        force3D: true
      }, {
        alpha: 1,
        force3D: true,
        x: 0,
        ease: Expo.easeInOut
      });
    });
    $donateButtons.forEach(function (button) {
      return button.addEventListener('mouseenter', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.donate-cls-1');
        var block = btnhovered.querySelector('.donate-cls-2');
        var price = btnhovered.querySelector('p');
        TweenMax.to(line, 1, {
          drawSVG: '0%',
          stroke: "#f0b227",
          strokeWidth: '2px',
          ease: Circ.easeOut
        });
        TweenMax.to(block, .5, {
          x: 5,
          fill: '#f0b227',
          ease: Circ.easeOut
        });
        TweenMax.to(price, 1, {
          x: 5,
          force3D: true,
          ease: Circ.easeOut
        });
      });
    });
    $donateButtons.forEach(function (button) {
      return button.addEventListener('mouseleave', function (e) {
        var btnhovered = e.target;
        var line = btnhovered.querySelector('.donate-cls-1');
        var block = btnhovered.querySelector('.donate-cls-2');
        var price = btnhovered.querySelector('p');
        TweenMax.fromTo(line, .5, {
          drawSVG: '0%'
        }, {
          drawSVG: '100%',
          stroke: "#512d1d",
          strokeWidth: '2px',
          ease: Circ.easeOut
        });
        TweenMax.to(block, .5, {
          x: 0,
          fill: '#512d1d',
          ease: Circ.easeOut
        });
        TweenMax.to(price, .5, {
          x: 0,
          force3D: true,
          ease: Circ.easeOut
        });
      });
    });
    var page4EnterTl = new TimelineMax({
      delay: 1,
      paused: false,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      smoothChildTiming: true
    });

    if (window.innerWidth < 768) {
      page4EnterTl.to('.bee1', 2, {
        alpha: 1,
        yPercent: -60,
        scale: .3,
        xPercent: -30,
        rotation: 10,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e");
      page4EnterTl.to('.bee2', 2, {
        alpha: 1,
        yPercent: -5,
        xPercent: -30,
        scale: .3,
        rotation: -30,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e");
      page4EnterTl.fromTo('.bee3', 2, {
        alpha: 0,
        yPercent: 0,
        xPercent: 0,
        scale: .1,
        rotation: -90,
        force3D: true,
        ease: Expo.easeInOut
      }, {
        alpha: 1,
        yPercent: -185,
        xPercent: -30,
        scale: .3,
        rotation: 10,
        force3D: true
      }, "p4e");
    } else if (window.innerWidth <= 1185) {
      page4EnterTl.to('.bee1', 2, {
        alpha: 1,
        yPercent: -95,
        scale: .2,
        xPercent: 0,
        rotation: 10,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e");
      page4EnterTl.to('.bee2', 2, {
        alpha: 1,
        yPercent: -123,
        xPercent: -13,
        scale: .2,
        rotation: -30,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e+=.5");
      page4EnterTl.fromTo('.bee3', 2, {
        alpha: 0,
        yPercent: 0,
        xPercent: 0,
        scale: .1,
        rotation: -90,
        force3D: true,
        ease: Expo.easeInOut
      }, {
        alpha: 1,
        yPercent: -120,
        xPercent: 13,
        scale: .2,
        rotation: 20,
        force3D: true
      }, "p4e");
    } else {
      page4EnterTl.to('.bee1', 2, {
        alpha: 1,
        yPercent: -50,
        scale: .3,
        xPercent: 0,
        rotation: 10,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e");
      page4EnterTl.to('.bee2', 2, {
        alpha: 1,
        yPercent: -74,
        xPercent: -16,
        scale: .3,
        rotation: -30,
        force3D: true,
        ease: Expo.easeInOut
      }, "p4e+=.5");
      page4EnterTl.fromTo('.bee3', 2, {
        alpha: 0,
        yPercent: 0,
        xPercent: 300,
        scale: .1,
        rotation: -120,
        force3D: true,
        ease: Expo.easeInOut
      }, {
        alpha: 1,
        yPercent: -85,
        xPercent: 10,
        scale: .3,
        rotation: 10,
        force3D: true
      }, "p4e");
    }

    page4EnterTl.fromTo('#page4 .yellow', 2, {
      alpha: 1,
      xPercent: -100,
      force3D: true
    }, {
      alpha: 1,
      xPercent: 0,
      ease: Expo.easeOut
    }, "p4e");
    page4EnterTl.fromTo('#page4 h6', 2, {
      alpha: 0,
      yPercent: -100,
      force3D: true
    }, {
      alpha: 0.6,
      yPercent: 0,
      ease: Expo.easeOut
    }, "p4e+=.25");
    page4EnterTl.fromTo('#page4 .white', 2, {
      yPercent: 100,
      zIndex: -1,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      zIndex: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p4e+=.75");
    page4EnterTl.fromTo('#page4 .bg', 2, {
      alpha: 0,
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p4e+=1");
    page4EnterTl.fromTo('#page4 .contain', 2, {
      alpha: 0,
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p4e+=1.25");
  };

  var page4Leave = function page4Leave() {
    var page4LeaveTl = new TimelineMax({
      delay: 0,
      smoothChildTiming: true
    });
    page4LeaveTl.to('#page4 .yellow', 1, {
      alpha: 0,
      xPercent: -100,
      force3D: true,
      ease: Expo.easeOut
    }, "p4l");
    page4LeaveTl.to('#page4 h6', 1, {
      alpha: 0,
      yPercent: -50,
      force3D: true,
      ease: Expo.easeOut
    }, "p4l");
    page4LeaveTl.to('#page4 .white', 1, {
      yPercent: -50,
      force3D: true,
      zIndex: -1,
      ease: Expo.easeOut
    }, "p4l");
    page4LeaveTl.to('#page4 .bg', 1, {
      alpha: 0,
      yPercent: -50,
      force3D: true,
      ease: Expo.easeOut
    }, "p4l");
    page4LeaveTl.to('#page4 .contain', 1, {
      alpha: 0,
      yPercent: -50,
      force3D: true,
      ease: Expo.easeOut
    }, "p4l");
  };

  return {
    page4Enter: page4Enter,
    page4Leave: page4Leave
  };
}();

var page5Module = function () {
  var page5Enter = function page5Enter() {
    var $emailInput = document.querySelector('input[type="email"]');
    var $goInput = document.querySelector('button[type="submit"]');
    var $goBtnPath = document.querySelector('#go-btn-path');
    var $form = document.querySelector('#email');
    var $checkoutOverlay = document.querySelector('#overlay-checkout');
    var $checkoutMessageWrap = document.querySelector('.checkout-message-wrap');
    $form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    $emailInput.addEventListener('focus', function (e) {
      TweenMax.to($goBtnPath, 0.75, {
        fill: "#fff",
        x: -5,
        force3D: true,
        ease: Circ.easeOut
      });
      TweenMax.to($goInput, 0.75, {
        color: "#512d1d",
        ease: Circ.easeOut
      });
      TweenMax.to($emailInput, 0.75, {
        x: -5,
        ease: Circ.easeOut
      });
    });
    $emailInput.addEventListener('blur', function (e) {
      TweenMax.to($goBtnPath, 0.75, {
        fill: "#512d1d",
        x: 0,
        force3D: true,
        ease: Circ.easeOut
      });
      TweenMax.to($goInput, 0.75, {
        color: "#fff",
        ease: Circ.easeOut
      });
      TweenMax.to($emailInput, 0.75, {
        x: 0,
        ease: Circ.easeOut
      });
    });
    $goInput.addEventListener('click', function (e) {
      e.preventDefault();
      var message = $checkoutMessageWrap.firstElementChild.firstElementChild.nextElementSibling;
      message.innerHTML = "Thanks for attempting to sign up and save the bees, however this is not a real form.";
      var checkoutOverlayTl = new TimelineMax();
      checkoutOverlayTl.fromTo($checkoutOverlay, 0.5, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        display: 'flex',
        ease: Circ.easeOut
      }).fromTo($checkoutMessageWrap, 0.5, {
        yPercent: 100,
        force3D: true,
        autoAlpha: 0
      }, {
        yPercent: 0,
        force3D: true,
        autoAlpha: 1,
        ease: Back.easeOut.config(1.7)
      });
    });
    $checkoutOverlay.addEventListener('click', function (e) {
      if (e.target !== $checkoutOverlay) {
        return;
      } else {
        var checkoutOverlayOutTl = new TimelineMax();
        checkoutOverlayOutTl.to($checkoutOverlay, 0.5, {
          autoAlpha: 0,
          display: 'none',
          ease: Circ.easeOut
        });
      }
    });
    var page5EnterTl = new TimelineMax({
      delay: 1,
      paused: false,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      smoothChildTiming: true
    });
    page5EnterTl.to('.bee1', 2, {
      alpha: 0,
      yPercent: 100,
      scale: 0,
      xPercent: -100,
      rotation: 100,
      force3D: true,
      ease: Expo.easeInOut
    }, "p5e");
    page5EnterTl.to('.bee2', 2, {
      alpha: 0,
      yPercent: 200,
      xPercent: 100,
      scale: 0,
      rotation: -30,
      force3D: true,
      ease: Expo.easeInOut
    }, "p5e");
    page5EnterTl.to('.bee3', 2, {
      alpha: 0,
      yPercent: 0,
      xPercent: 0,
      scale: 0,
      rotation: -90,
      force3D: true,
      ease: Expo.easeInOut
    }, "p5e");
    page5EnterTl.fromTo('#page5 .yellow', 2, {
      alpha: 1,
      yPercent: 0,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      ease: Expo.easeOut
    }, "p5e");
    page5EnterTl.fromTo('#page5 h6', 2, {
      alpha: 0,
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      ease: Expo.easeOut
    }, "p5e+=.25");
    page5EnterTl.fromTo('#page5 .white', 2, {
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p5e+=.75");
    page5EnterTl.fromTo('#page5 .bg', 2, {
      alpha: 0,
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p5e+=1");
    page5EnterTl.fromTo('#page5 .contain', 2, {
      alpha: 0,
      yPercent: 100,
      force3D: true
    }, {
      alpha: 1,
      yPercent: 0,
      force3D: true,
      ease: Expo.easeOut
    }, "p5e+=1.25");
  };

  var page5Leave = function page5Leave() {
    var page5LeaveTl = new TimelineMax({
      delay: 0,
      paused: false,
      repeat: 0,
      repeatDelay: 0,
      yoyo: false,
      smoothChildTiming: true
    });
    page5LeaveTl.to('#page5 .yellow', 1, {
      alpha: 0,
      yPercent: 100,
      force3D: true,
      ease: Expo.easeOut
    }, "p5l");
    page5LeaveTl.to('#page5 h6', 1, {
      alpha: 0,
      yPercent: 100,
      force3D: true,
      ease: Expo.easeOut
    }, "p5l");
    page5LeaveTl.to('#page5 .white', 1, {
      yPercent: 100,
      force3D: true,
      ease: Expo.easeOut
    }, "p5l");
    page5LeaveTl.to('#page5 .bg', 1, {
      alpha: 0,
      yPercent: 100,
      force3D: true,
      ease: Expo.easeOut
    }, "p5l");
    page5LeaveTl.to('#page5 .contain', 1, {
      alpha: 0,
      yPercent: 100,
      force3D: true,
      ease: Expo.easeOut
    }, "p5l");
  };

  return {
    page5Enter: page5Enter,
    page5Leave: page5Leave
  };
}();
//# sourceMappingURL=bundle.js.map
