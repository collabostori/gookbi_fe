var gb = {
  controller: {},
  util: {},
};


gb.controller.common = function () {
  const $win = $(window);

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

  // header 고정
  $win.on('load', function () {
    const triggers = $('[data-trigger]').get();
    const $body = $('body');

    if (
      triggers[0] &&
      triggers[0].getAttribute('data-trigger') === 'fix-header' &&
      triggers[0].getBoundingClientRect().top <= 0
    ) {
      $body.addClass('fix-header');
    }

    $win.on('scroll', function () {
      for (var i = triggers.length - 1; i > -1; i--) {
        const colorCode = triggers[i].getAttribute('data-trigger');
        const triggerPos = triggers[i].getBoundingClientRect().top - 90 <= 0;

        if (colorCode === 'fix-header' && triggerPos) {
          $body.addClass('fix-header');
          break;
        } else if (colorCode === 'light' && triggerPos) {
          $body.removeClass('fix-header');
          break;
        }
        $body.removeClass('fix-header');
      }
    });

    // $win.on('scroll', function () {
    //   if ($win.scrollTop() > 50) {
    //     $body.addClass('fix-header');
    //   } else {
    //     $body.removeClass('fix-header');
    //   }
    // });
  });

  // var isHeaderInverted = false;
  // var $header = $('.main-header');

  // $header.on('mouseenter', function() {
  //   isHeaderInverted = $('body').hasClass('fix-header');
  //   $('body').addClass('fix-header');
  // });
  // $header.on('mouseleave', function() {
  //   if (!isHeaderInverted) {
  //     $('body').removeClass('fix-header');
  //   }
  // });

  // selectric
  $('select').selectric();


  // layer
  $('[data-layer-btn]').on('click', function() {
    const target = $(this).attr('href');

    if (target) {
      $(target).addClass('on');
    }
  });

  $('[data-layer-close').on('click', function() {
    $(this).closest('.layer').removeClass('on');
  });

};

gb.controller.company = function () {
  // best swiper
  new Swiper('.best-swiper', {
    containerModifierClass: 'section-swiper',
    wrapperClass: 'list-type-1-1',
    slideClass: 'list-item',
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: '.best-swiper .btn-next',
      prevEl: '.best-swiper .btn-prev',
    }
  });
};

gb.controller.course = function () {
  // premium swiper
  new Swiper('.premium-swiper', {
    containerModifierClass: 'section-swiper',
    wrapperClass: 'list-type-1',
    slideClass: 'list-item',
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: '.premium-swiper .btn-next',
      prevEl: '.premium-swiper .btn-prev',
    }
  });

  // 그랜드 교육 슬라이드
  new Swiper('.grand-swiper .swiper-container', {
    navigation: {
      nextEl: '.grand-swiper .btn-next',
      prevEl: '.grand-swiper .btn-prev',
    },
    loop: true,
    speed: 2000,
  });
};

gb.controller.courseDetail = function () {
  const tabBtns = $('.btn-tab a');
  const pos = tabBtns.get().map(function(item) {
    const href = $(item).attr('href');

    return $(href).offset().top - 200;
  });

  tabBtns.on('click', function() {
    const idx = tabBtns.index(this);

    $('html, body').stop().animate({
      scrollTop: pos[idx],
    }, 300);
  });

  $(window).on('scroll', function() {
    for (let i = pos.length; i > -1; i--) {
      if ($(this).scrollTop() > pos[i] - 1) {
        tabBtns.removeClass('on');
        tabBtns.eq(i).addClass('on');
        break;
      }
    }
  });

  $('[data-share-btn]').on('click', function() {
    $('.share-box').toggleClass('on');
  });
};

gb.controller.cs = function () {
  $('.faq-list').on('click', 'dt', function() {
    const self = $(this);
    const parent = self.parent();

    if (parent.hasClass('on')) {
      parent.removeClass('on');
    } else {
      $('.faq-item').removeClass('on');
      parent.addClass('on');
    };
  });
};

gb.controller.main = function () {
  // 상단 배경 슬라이드
  const heroBgSwiper = new Swiper('.section-hero .bg-swiper', {
    effect: 'fade',
    speed: 400,
  });


  // 상단 내용 슬라이드
  const heroContentSwiper = new Swiper('.section-hero .content-swiper', {
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
    const state = heroContentSwiper.autoplay.running;

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
    const swipers = $(document.createDocumentFragment());
    const items = $('.premium-course .swiper-slide');

    for (let i = 0; i < 5; i++) {
      let slides = i < 3 ? items.clone() : items.clone().get().reverse();

      slides = $(slides)
      slides.wrapAll('<div class="swiper-block"><div class="swiper-container"><div class="swiper-wrapper"></div></div></div>');
      slides = slides.closest('.swiper-block');

      if (i === 0) {
        slides.addClass('swiper-top');
      }

      swipers.append(slides);
    }

    items.remove();
    $('.premium-course .course-swiper').append(swipers);
  }

  function initPremiumSwiper() {
    const premiumSwipers = [];
    const btnNext = $('.premium-course .list-next');
    const btnPrev = $('.premium-course .list-prev');
    const maxCount = 4;

    $('.course-swiper .swiper-container').each(function(idx, swiper) {
      premiumSwipers.push(new Swiper(swiper, {
        initialSlide: idx < 3 ? idx : maxCount - idx,
        loop: true,
        simulateTouch: false,
        speed: 1000,
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

  function setSize(curBox, img) {
    var iWidth = img.naturalWidth;
    var iHeight = img.naturalHeight;
    var hRatio = curBox.offsetWidth / iWidth;
    var vRatio = curBox.offsetHeight / iHeight;

    var max = Math.max(hRatio, vRatio);

    img.width = iWidth * max;
    img.height = iHeight * max;
  };

  function setSwiperImgSize () {
    var imgBox = document.querySelectorAll('.premium-course .thumb');

    for (var i = 0; i < imgBox.length; i++) {
      (function (i) {
        var curBox = imgBox[i];
        var img = curBox.querySelector('img');
        img.onload = function () {
          setSize(curBox, img);
        };
        setSize(curBox, img);
      })(i);
    }
  };

  buildPremiumSwiper();
  setSwiperImgSize();
  initPremiumSwiper();

  $(window).on('resize', setSwiperImgSize);


  // 그랜드 교육 슬라이드
  const grandSwiper = new Swiper('.grand-course .swiper-container', {
    navigation: {
      nextEl: '.grand-course .list-next',
      prevEl: '.grand-course .list-prev',
    },
    loop: true,
    speed: 2000,
  });


  // 프리미엄, 그랜드 교육 제목 스크롤 고정
  new Sticky('.course-wrapper .control');

  // var win = $(window);
  // var headers = $('.premium-course .header, .grand-course .header');

  // $('.premium-course, .grand-course').each(function(idx, item) {
  //   var course = $(item);
  //   var elTop = course.offset().top;
  //   var pt = 0;
  //   var max = idx ? 403 : 600;

  //   win.on('scroll', function() {
  //     var  st = win.scrollTop();

  //     if (st > elTop) {
  //       pt = st - elTop;
  //     }

  //     pt = pt < 0 ? 0 : pt;
  //     pt = pt > max ? max : pt;

  //     headers.eq(idx).css('paddingTop', pt);
  //   });
  // });

};

gb.controller.search = function () {
  // premium swiper
  new Swiper('.section-swiper', {
    containerModifierClass: 'section-swiper',
    wrapperClass: 'list-type-1',
    slideClass: 'list-item',
    slidesPerView: 3,
    slidesPerGroup: 3,
    simulateTouch: false,
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: '.section-swiper .btn-next',
      prevEl: '.section-swiper .btn-prev',
    }
  });
};

$(function() {
  const $body = $('body');
  const controller = $body.attr('data-controller');
  const isMobile = window.innerWidth < 800;

  gb.controller.common();

  if (controller) {
    controller.split(' ').forEach(function(key) {
      const camelKey = key.replace(/([-_]\w)/g, g => g[1].toUpperCase());
      const fn = camelKey + (isMobile ? 'Mobile' : '');

      gb.controller[fn] && gb.controller[fn]();
    });
  }
});