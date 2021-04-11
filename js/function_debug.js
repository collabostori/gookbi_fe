var gb = {
  controller: {},
  util: {},
};


gb.controller.common = function () {
  var $win = $(window);

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
        var triggerPos = triggers[i].getBoundingClientRect().top <= 0;
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
  var heroSwiper = new Swiper('.section-hero .swiper-container', {
    speed: 400,
  });
  var premiumSwiper = new Swiper('.premium-course .swiper-container', {
    navigation: {
      nextEl: '.premium-course .list-next',
      prevEl: '.premium-course .list-prev',
    },
    loop: true,
    speed: 400,
  });
  var grandSwiper = new Swiper('.grand-course .swiper-container', {
    navigation: {
      nextEl: '.grand-course .list-next',
      prevEl: '.grand-course .list-prev',
    },
    loop: true,
    speed: 400,
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