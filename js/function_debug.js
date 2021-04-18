var gb = {
  controller: {},
  util: {},
};


gb.controller.common = function () {
  var $win = $(window);

  // IE 스크롤 떨림 제거
  if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
    $('body').on("mousewheel", function () {
        // remove default behavior
        event.preventDefault();

        //scroll without smoothing
        var wheelDelta = event.wheelDelta;
        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  }

  // 로고, gnb컬러 변경
  $win.on('load', function () {
    var triggers = $('[data-bgcolor]').get();
    var $body = $('body');

    if (
      triggers[0] &&
      triggers[0].getAttribute('data-bgcolor') === 'invert' &&
      triggers[0].getBoundingClientRect().top <= 0
    ) {
      $body.addClass('bg-invert');
    }

    $win.on('scroll', function () {
      for (var i = triggers.length - 1; i > -1; i--) {
        var colorCode = triggers[i].getAttribute('data-bgcolor');
        var triggerPos = triggers[i].getBoundingClientRect().top - 90 <= 0;

        if (colorCode === 'invert' && triggerPos) {
          $body.addClass('bg-invert');
          break;
        } else if (colorCode === 'light' && triggerPos) {
          $body.removeClass('bg-invert');
          break;
        }
        $body.removeClass('bg-invert');
      }
    });
  });

  // selectric
  $('select').selectric();
};

gb.controller.main = function () {
  // 상단 배경 슬라이드
  var heroBgSwiper = new Swiper('.section-hero .bg-swiper', {
    effect: 'fade',
    speed: 400,
  });


  // 상단 내용 슬라이드
  var heroContentSwiper = new Swiper('.section-hero .content-swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    pagination: {
      el: '.content-page .paging',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return current +
          '<span class="progress"><span class="bar"></span></span>' +
          (current + 1 > total ? 1 : current + 1) +
          '<span class="divide">/</span>' +
          total;
      }
    },
    on: {
      slideChange: function() {
        heroBgSwiper.slideTo(this.realIndex);
      }
    }
  });

  $('.content-swiper .toggle-play').on('click', function() {
    var state = heroContentSwiper.autoplay.running;

    if (state) {
      $('.content-page').addClass('pause');
      heroContentSwiper.autoplay.stop();
    } else {
      $('.content-page').removeClass('pause');
      heroContentSwiper.autoplay.start();
    }
  });


  // 프리미엄 교육 슬라이드
  function buildPremiumSwiper() {
    var swipers = $(document.createDocumentFragment());
    var items = $('.premium-course .swiper-slide');

    for (var i = 0; i < 5; i++) {
      var slides = i < 3 ? items.clone() : items.clone().get().reverse();

      slides = $(slides)
      slides.wrapAll('<div class="swiper-container"><div class="swiper-wrapper"></div></div>');
      slides = slides.closest('.swiper-container');

      if (i === 0) {
        slides.addClass('swiper-top');
      }

      swipers.append(slides);
    }

    items.remove();
    $('.premium-course .course-swiper').append(swipers);
  }

  function initPremiumSwiper() {
    var premiumSwipers = [];
    var btnNext = $('.premium-course .list-next');
    var btnPrev = $('.premium-course .list-prev');
    var maxCount = 4;

    $('.course-swiper .swiper-container').each(function(idx, swiper) {
      premiumSwipers.push(new Swiper(swiper, {
        initialSlide: idx < 3 ? idx : maxCount - idx,
        loop: true,
        speed: 400,
        controller: {
          inverse: true,
        },
      }));
    });

    btnNext.on('click', function() {
      premiumSwipers.forEach(function(swiper, idx) {
        idx < 3 ? swiper.slideNext() : swiper.slidePrev();
      });
    });

    btnPrev.on('click', function() {
      premiumSwipers.forEach(function(swiper, idx) {
        idx < 3 ? swiper.slidePrev() : swiper.slideNext();
      });
    });
  }

  buildPremiumSwiper();
  initPremiumSwiper();


  // 그랜드 교육 슬라이드
  var grandSwiper = new Swiper('.grand-course .swiper-container', {
    navigation: {
      nextEl: '.grand-course .list-next',
      prevEl: '.grand-course .list-prev',
    },
    loop: true,
    speed: 400,
  });


  // 프리미엄, 그랜드 교육 제목 스크롤 고정
  var win = $(window);
  var headers = $('.premium-course .header, .grand-course .header');

  $('.premium-course, .grand-course').each(function(idx, item) {
    var course = $(item);
    var elTop = course.offset().top;
    var pt = 0;
    var max = idx ? 403 : 600;

    win.on('scroll', function() {
      var  st = win.scrollTop();

      if (st > elTop) {
        pt = st - elTop;
      }

      pt = pt < 0 ? 0 : pt;
      pt = pt > max ? max : pt;

      headers.eq(idx).css('paddingTop', pt);
    });
  });
};

$(function() {
  var $body;
  var controller;
  var isMobile = window.innerWidth < 800;

  $body = $('body');

  controller = $body.attr('data-controller');

  gb.controller.common();

  if (controller) {
    controller.split(' ').forEach(function(key) {
      var fn = key + (isMobile ? 'Mobile' : '');

      gb.controller[fn] && gb.controller[fn]();
    });
  }
});