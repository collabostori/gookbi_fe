var gb={controller:{},util:{}};gb.controller.common=function(){const e=$(window);navigator.userAgent.match(/Trident\/7\./)&&$("body").on("mousewheel",function(){event.preventDefault();var e=event.wheelDelta,n=window.pageYOffset;window.scrollTo(0,n-e)}),e.on("load",function(){const r=$("[data-trigger]").get(),i=$("body");r[0]&&"fix-header"===r[0].getAttribute("data-trigger")&&r[0].getBoundingClientRect().top<=0&&i.addClass("fix-header"),e.on("scroll",function(){for(var e=r.length-1;-1<e;e--){var n=r[e].getAttribute("data-trigger"),t=r[e].getBoundingClientRect().top-90<=0;if("fix-header"===n&&t){i.addClass("fix-header");break}if("light"===n&&t){i.removeClass("fix-header");break}i.removeClass("fix-header")}})}),$("select").selectric()},gb.controller.company=function(){new Swiper(".best-swiper",{containerModifierClass:"section-swiper",wrapperClass:"list-type-1-1",slideClass:"list-item",slidesPerView:3,slidesPerGroup:3,simulateTouch:!1,loop:!0,speed:2e3,navigation:{nextEl:".best-swiper .btn-next",prevEl:".best-swiper .btn-prev"}})},gb.controller.course=function(){new Swiper(".premium-swiper",{containerModifierClass:"section-swiper",wrapperClass:"list-type-1",slideClass:"list-item",slidesPerView:3,slidesPerGroup:3,simulateTouch:!1,loop:!0,speed:2e3,navigation:{nextEl:".premium-swiper .btn-next",prevEl:".premium-swiper .btn-prev"}}),new Swiper(".grand-swiper .swiper-container",{navigation:{nextEl:".grand-swiper .btn-next",prevEl:".grand-swiper .btn-prev"},loop:!0,speed:2e3})},gb.controller.courseDetail=function(){const n=$(".btn-tab a"),t=n.get().map(function(e){e=$(e).attr("href");return $(e).offset().top-200});n.on("click",function(){var e=n.index(this);$("html, body").stop().animate({scrollTop:t[e]},300)}),$(window).on("scroll",function(){for(let e=t.length;-1<e;e--)if($(this).scrollTop()>t[e]-1){n.removeClass("on"),n.eq(e).addClass("on");break}})},gb.controller.main=function(){const e=new Swiper(".section-hero .bg-swiper",{effect:"fade",speed:400}),n=new Swiper(".section-hero .content-swiper",{effect:"fade",fadeEffect:{crossFade:!0},speed:400,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,pagination:{el:".content-page .paging",type:"custom",renderCustom:function(e,n,t){return n+'<span class="progress"><span class="bar"></span></span>'+(t<n+1?1:n+1)+'<span class="divide">/</span>'+t}},on:{slideChange:function(){e.slideTo(this.realIndex)}}});$(".content-swiper .toggle-play").on("click",function(){n.autoplay.running?($(".content-page").addClass("pause"),n.autoplay.stop()):($(".content-page").removeClass("pause"),n.autoplay.start())}),function(){const n=$(document.createDocumentFragment()),t=$(".premium-course .swiper-slide");for(let e=0;e<5;e++){const r=e<3?t.clone():t.clone().get().reverse();r=$(r),r.wrapAll('<div class="swiper-container"><div class="swiper-wrapper"></div></div>'),r=r.closest(".swiper-container"),0===e&&r.addClass("swiper-top"),n.append(r)}t.remove(),$(".premium-course .course-swiper").append(n)}(),function(){const t=[],e=$(".premium-course .list-next"),n=$(".premium-course .list-prev");$(".course-swiper .swiper-container").each(function(e,n){t.push(new Swiper(n,{initialSlide:e<3?e:4-e,loop:!0,simulateTouch:!1,speed:1e3,controller:{inverse:!0}}))}),e.on("click",function(){t.forEach(function(e,n){n<3?e.slideNext():e.slidePrev()})}),n.on("click",function(){t.forEach(function(e,n){n<3?e.slidePrev():e.slideNext()})})}();new Swiper(".grand-course .swiper-container",{navigation:{nextEl:".grand-course .list-next",prevEl:".grand-course .list-prev"},loop:!0,speed:2e3});new Sticky(".course-wrapper .header")},gb.controller.search=function(){new Swiper(".section-swiper",{containerModifierClass:"section-swiper",wrapperClass:"list-type-1",slideClass:"list-item",slidesPerView:3,slidesPerGroup:3,simulateTouch:!1,loop:!0,speed:2e3,navigation:{nextEl:".section-swiper .btn-next",prevEl:".section-swiper .btn-prev"}})},$(function(){const e=$("body"),n=e.attr("data-controller"),t=window.innerWidth<800;gb.controller.common(),n&&n.split(" ").forEach(function(e){e=e.replace(/([-_]\w)/g,e=>e[1].toUpperCase())+(t?"Mobile":"");gb.controller[e]&&gb.controller[e]()})});