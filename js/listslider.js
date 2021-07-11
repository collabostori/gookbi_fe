$.extend($.easing, {
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  },
});

function ListSlider(options) {
  this.$container = $(options.el);
  this.$list = this.$container.find('.list-type-2');
  this.$wrapper = $('<div class="list-slide-wrapper"></div>');
  this.$items = this.$list.find('li');
  this.$prevBtn = $(options.prevBtn);
  this.$nextBtn = $(options.nextBtn);

  this.startx = -1;
  this.starty = -1;
  this.lastx = -1;
  this.lasty = -1;

  this.movedir = null;
  this.chkmove = false;
  this.idx = 0;
  this.minIdx = 0;
  this.maxIdx = 0;

  this.loop = options.loop;
  this.prevClone = null;
  this.nextClone = null;

  this.isMobile = window.innerWidth <= 640;
  this.isMoving = false;

  this.itemWidth = 0;
  this.itemGap = 0;
  this.curLeft = 0;
  this.moveVal = 0;

  this.THRESHOLD_X = 10;
  this.THRESHOLD_Y = 10;

  this.mc = null;

  this.$wrapper.append(this.$list);
  this.$container.append(this.$wrapper);

  if (this.loop) {
    this.addClones();
  }

  this.setSize();
  this.init();
  this.bindEvents();
}

ListSlider.prototype.setSize = function () {
  this.isMobile = window.innerWidth <= 640;
  this.minIdx = 0;
  this.maxIdx = Math.ceil(this.$items.length / 2) - (this.isMobile ? 1 : 2);

  this.itemGap = parseInt(this.$items.eq(this.$items.length - 1).css('marginLeft'));
  this.itemWidth = this.$container.innerWidth() / (this.isMobile ? 1 : 2) - (this.isMobile ? 0 : this.itemGap / 2);

  this.$items.css('width', this.itemWidth);
  if (this.loop && this.prevClone) {
    this.prevClone.css('width', this.itemWidth * 2 + this.itemGap);
    this.nextClone.css('width', this.itemWidth * 2 + this.itemGap);
    this.prevClone.find('li').css('width', this.itemWidth);
    this.nextClone.find('li').css('width', this.itemWidth);
  }
  this.$wrapper.css('width', this.itemWidth + (this.itemWidth + this.itemGap) * (Math.ceil(this.$items.length / 2) - 1));
  this.$wrapper.css('transform', 'translate3D(' + (this.itemWidth * -this.idx + this.itemGap * -this.idx) + 'px,0,0)');

  if (this.loop) {
    this.minIdx--;
    this.maxIdx++;
  }
};

ListSlider.prototype.addClones = function () {
  this.prevClone = $('<ul class="list-type-2 clone-prev"></ul>');
  this.nextClone = $('<ul class="list-type-2 clone-next"></ul>');

  if (this.$items.length % 2 === 0) {
    this.prevClone.append(this.$items.eq(this.$items.length - 4).clone());
  }

  this.prevClone.append(this.$items.eq(this.$items.length - 3).clone());
  this.prevClone.append(this.$items.eq(this.$items.length - 2).clone());
  this.prevClone.append(this.$items.eq(this.$items.length - 1).clone());

  this.nextClone.append(this.$items.eq(0).clone());
  this.nextClone.append(this.$items.eq(1).clone());
  this.nextClone.append(this.$items.eq(2).clone());
  this.nextClone.append(this.$items.eq(3).clone());

  this.$wrapper.prepend(this.prevClone);
  this.$wrapper.append(this.nextClone);
};

ListSlider.prototype.init = function () {
  this.mcs = new Hammer(this.$container[0], {
    domEvents: true,
    touchAction: 'pan-y',
    recognizers: [
      [
        Hammer.Pan,
        {
          pointers: 1,
          direction: Hammer.DIRECTION_HORIZONTAL,
          threshold: 10,
        },
      ],
    ],
  });
};

ListSlider.prototype.bindEvents = function () {
  const self = this;

  this.mcs.on('panleft panright', function (e) {
    self.movedir = e.type;
  });

  this.$container.on('touchstart', function (e) {
    self.startx = e.originalEvent.touches[0].pageX || e.originalEvent.touches[0].screenX;
    self.starty = e.originalEvent.touches[0].pageY || e.originalEvent.touches[0].screenY;
  });

  this.$container.on('touchmove', function (e) {
    self.lastx = e.originalEvent.touches[0].pageX || e.originalEvent.touches[0].screenX;
    self.lasty = e.originalEvent.touches[0].pageY || e.originalEvent.touches[0].screenY;

    self.arrangeThreshold();

    if (!self.chkmove) return;

    self.$container.css('touchAction', 'pan-x');

    if (self.chkmove) {
      if (self.lastx === 0) return;
    }

    if (self.chkmove) {
      self.moveCurrent();
    }
  });

  this.$container.on('touchend', function (e) {
    self.$container.css('touchAction', 'pan-y');

    if (!self.chkmove) return;

    if (self.movedir === 'panright') {
      self.moveSlide('left');
    }
    if (self.movedir === 'panleft') {
      self.moveSlide('right');
    }
    if (self.movedir === null) {
      self.moveSlide('right');
    }
    self.chkmove = false;
  });

  this.mcs.on('swipeleft', function (e) {
    self.moveSlide('right');
  });
  this.mcs.on('swiperight', function (e) {
    self.moveSlide('left');
  });

  this.$prevBtn.on('click', function (e) {
    e.preventDefault();
    self.moveSlide('left');
  });
  this.$nextBtn.on('click', function (e) {
    e.preventDefault();
    self.moveSlide('right');
  });

  $(window).on('resize', function () {
    self.setSize();
  });
};

ListSlider.prototype.arrangeThreshold = function () {
  if (Math.abs(this.starty - this.lasty) < this.THRESHOLD_Y) {
    if (Math.abs(this.startx - this.lastx) > this.THRESHOLD_X) {
      this.chkmove = true;
    }
  }
};

ListSlider.prototype.moveCurrent = function () {
  if (!this.moving) {
    this.moveVal = this.lastx - this.startx;

    this.$wrapper.css('transform', 'translate3D(' + (this.curLeft + this.moveVal) + 'px,0,0)');
  }
};

ListSlider.prototype.moveSlide = function (dir) {
  const self = this;
  let newIdx;

  if (dir === 'left') {
    newIdx = this.idx - 1 < this.minIdx ? this.minIdx : this.idx - 1;
  } else if (dir === 'right') {
    newIdx = this.idx + 1 > this.maxIdx ? this.maxIdx : this.idx + 1;
  } else if (typeof dir === 'number') {
    newIdx = dir;
  }

  if (!this.isMoving && !isNaN(newIdx)) {
    this.isMoving = true;

    this.curLeft += this.moveVal;

    if (this.loop && this.idx === this.minIdx && newIdx === this.minIdx) {
      const maxLeft = (this.itemWidth + this.itemGap) * -(this.isMobile ? this.maxIdx - 1 : this.maxIdx);

      this.curLeft = maxLeft;
      this.curLeft += this.moveVal;

      newIdx = this.maxIdx - (this.isMobile ? 2 : 1);
    } else if (this.loop && this.idx === this.maxIdx && newIdx === this.maxIdx) {
      const minLeft = (this.itemWidth + this.itemGap) * -(this.isMobile ? this.minIdx + 1 : this.minIdx);

      this.curLeft = minLeft;
      this.curLeft += this.moveVal;

      newIdx = this.minIdx + (this.isMobile ? 2 : 1);
    }

    const newLeft = this.itemWidth * -newIdx + this.itemGap * -newIdx;

    $({val: this.curLeft}).animate({ val: newLeft }, {
      duration: 1300,
      easing: 'easeOutCubic',
      step: function (val) {
        self.$wrapper.css('transform', 'translate3D(' + val + 'px,0,0)');
      },
      complete: function () {
        self.isMoving = false;
        self.idx = newIdx;
        self.curLeft = newLeft;
        self.moveVal = 0;
      },
    });
  }
};
