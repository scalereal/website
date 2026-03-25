AOS.init();

const EXTRA_ANCHOR_GAP = -50;
const NO_PADDING_EXTRA_OFFSET = 100;

function getAnchorOffset() {
  return ($(".navbar").outerHeight() || 0) + EXTRA_ANCHOR_GAP;
}

function setGlobalAnchorPadding() {
  document.documentElement.style.scrollPaddingTop = `${getAnchorOffset()}px`;
}

function scrollToHashTarget(hash, duration = 120) {
  const cleanHash = (hash || "").replace(/^#/, "");
  if (!cleanHash) return;

  const targetSection = document.getElementById(decodeURIComponent(cleanHash));
  if (!targetSection) return;

  const sectionPaddingTop =
    parseInt($(targetSection).css("padding-top"), 10) || 0;
  const extraOffset = sectionPaddingTop === 0 ? NO_PADDING_EXTRA_OFFSET : 0;

  const targetTop =
    $(targetSection).offset().top - getAnchorOffset() - extraOffset;
  $("html, body")
    .stop()
    .animate({ scrollTop: Math.max(targetTop, 0) }, duration);
}

$(window).on("load", function () {
  setGlobalAnchorPadding();

  if (window.location.hash) {
    scrollToHashTarget(window.location.hash, 120);
  }
});

$(window).on("resize", setGlobalAnchorPadding);

$(window).on("hashchange", function () {
  scrollToHashTarget(window.location.hash, 120);
});

function buildChipMarquee(root) {
  if (!root || root.dataset.marqueeReady === "true") return;

  var items = Array.from(root.children);
  if (items.length === 0) return;

  var track = document.createElement("div");
  track.className = "chip-marquee-track";

  var primaryGroup = document.createElement("div");
  primaryGroup.className = "chip-marquee-group";

  items.forEach(function (item) {
    primaryGroup.appendChild(item);
  });

  var cloneGroup = primaryGroup.cloneNode(true);
  cloneGroup.setAttribute("aria-hidden", "true");

  track.appendChild(primaryGroup);
  track.appendChild(cloneGroup);
  root.appendChild(track);
  root.classList.add("chip-marquee-ready");
  root.dataset.marqueeReady = "true";
}

function updateChipMarquee(root) {
  var primaryGroup = root.querySelector(".chip-marquee-group");
  if (!primaryGroup) return;

  var speed = parseFloat(root.dataset.marqueeSpeed || "70");
  var width = Math.ceil(primaryGroup.getBoundingClientRect().width);
  if (!width) return;

  root.style.setProperty("--chip-marquee-distance", "-" + width + "px");
  root.style.setProperty(
    "--chip-marquee-duration",
    Math.max(width / speed, 12) + "s",
  );
}

function initChipMarquees() {
  var marquees = document.querySelectorAll(".js-chip-marquee");
  if (marquees.length === 0) return;

  marquees.forEach(function (root) {
    buildChipMarquee(root);
    updateChipMarquee(root);
  });
}

$(document).ready(function () {
  initChipMarquees();

  // Homepage Projects and Testimonial sliders
  $(".owl-one, .owl-two").owlCarousel({
    nav: false,
    loop: true,
    margin: 0,
    dots: true,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    autoplayHoverPause: true,
    animateOut: "slideOutLeft",
    animateIn: "slideInRight",
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      1199: {
        items: 1,
      },
    },
  });

  // Hamburger icons toggle for mobile view
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
  });

  var current = location.pathname;
  $(".navbar-nav .nav-link").each(function (index) {
    var $this = $(this);
    // if the current path is like this link, make it active
    if (
      (current === "/" && index === 0) ||
      (current !== "/" && ($this.attr("href") + "/").indexOf(current) !== -1)
    ) {
      $this.addClass("active");
    }
  });

  $(".js-blog-carousel").owlCarousel({
    nav: true,
    loop: false,
    margin: 20,
    dots: false,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    autoplayHoverPause: true,
    responsiveClass: true,
    // items: 2,
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      767: {
        items: 2,
        loop: true,
      },
      991: {
        items: 3,
        loop: true,
      },
    },
  });

  const buttons = document.getElementsByClassName("owl-dot");
  if (buttons.length !== 0) {
    Array.from(buttons).forEach((element) => {
      element.setAttribute("aria-label", "button");
    });
  }

  function initServicesCarousel() {
    var $carousel = $(".js-feature-card-carousal");
    if ($carousel.length === 0) return;

    var isMobile = window.matchMedia("(max-width: 767.98px)").matches;

    if (isMobile) {
      if (!$carousel.hasClass("owl-carousel")) {
        $carousel.addClass("owl-carousel");
        $carousel.owlCarousel({
          nav: false,
          loop: true,
          margin: 16,
          dots: true,
          slideBy: 1,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplaySpeed: 600,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
          },
        });

        $carousel.on(
          "mousedown.owlHold touchstart.owlHold pointerdown.owlHold",
          ".feature-card",
          function () {
            $carousel.trigger("stop.owl.autoplay");
          },
        );
        $carousel.on(
          "mouseup.owlHold mouseleave.owlHold touchend.owlHold pointerup.owlHold",
          ".feature-card",
          function () {
            $carousel.trigger("play.owl.autoplay");
          },
        );
      }
    } else if ($carousel.hasClass("owl-carousel")) {
      $carousel.trigger("destroy.owl.carousel");
      $carousel.off(".owlHold");
      $carousel.removeClass("owl-carousel owl-loaded");
      $carousel.find(".owl-stage-outer").children().unwrap();
      $carousel.find(".owl-stage").children().unwrap();
    }
  }

  initServicesCarousel();
  $(window).on("resize", initServicesCarousel);
  $(window).on("load resize", initChipMarquees);

  function initAiCapabilitiesCarousel() {
    var $carousel = $(".js-ai-capabilities-carousel");
    if ($carousel.length === 0) return;

    var isTabletOrMobile = window.matchMedia("(max-width: 991.98px)").matches;

    if (isTabletOrMobile) {
      if (!$carousel.hasClass("owl-carousel")) {
        $carousel.addClass("owl-carousel");
        $carousel.owlCarousel({
          nav: false,
          loop: true,
          margin: 16,
          dots: true,
          slideBy: 1,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplaySpeed: 600,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 1,
            },
          },
        });

        $carousel.on(
          "mousedown.owlHold touchstart.owlHold pointerdown.owlHold",
          ".ai-capabilities-card",
          function () {
            $carousel.trigger("stop.owl.autoplay");
          },
        );
        $carousel.on(
          "mouseup.owlHold mouseleave.owlHold touchend.owlHold pointerup.owlHold",
          ".ai-capabilities-card",
          function () {
            $carousel.trigger("play.owl.autoplay");
          },
        );
      }
    } else if ($carousel.hasClass("owl-carousel")) {
      $carousel.trigger("destroy.owl.carousel");
      $carousel.off(".owlHold");
      $carousel.removeClass("owl-carousel owl-loaded");
      $carousel.find(".owl-stage-outer").children().unwrap();
      $carousel.find(".owl-stage").children().unwrap();
    }
  }

  initAiCapabilitiesCarousel();
  $(window).on("resize", initAiCapabilitiesCarousel);

  function initMilestoneScrollReveal() {
    const timeline = document.querySelector(".milestones-timeline");
    if (!timeline) return;

    const items = Array.from(timeline.querySelectorAll(".milestone-item"));
    if (items.length === 0) return;

    timeline.classList.add("is-animated");

    items.forEach((item, index) => {
      item.style.setProperty("--milestone-delay", `${index * 120}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );

    items.forEach((item) => observer.observe(item));
  }

  initMilestoneScrollReveal();

  // CURRENT
  var senderSubMain = $(".sender-sub-main").offset();
  var footerOffset = $("footer").offset().top;

  if (senderSubMain) {
    var mainOffset = senderSubMain.top;

    $(window).scroll(function () {
      if ($(window).scrollTop() > mainOffset) {
        $(".sender-sub-main").addClass("sticky-subscription-box");
      } else {
        $(".sender-sub-main").removeClass("sticky-subscription-box");
      }

      if (parseInt($(window).scrollTop()) + 400 >= parseInt(footerOffset)) {
        $(".sender-sub-main").removeClass("sticky-subscription-box");
      }
    });
  }

  function submitGR(token) {
    if (grecaptcha.getResponse().length > 0) {
      document.getElementById("submit-button").setAttribute("captcha", "false");
      document
        .getElementById("recaptcha-failed-message")
        .setAttribute("hidden", "");
    } else {
      document.getElementById("submit-button").setAttribute("captcha", "true");
      document
        .getElementById("recaptcha-failed-message")
        .removeAttribute("hidden");
    }
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("submit-button").setAttribute("captcha", "true");
  });
});

// INCOMING
if ($(".careers-accordion").length > 0) {
  $(document).ready(function () {
    var url = window.location.href;
    var start = url.substr(url.indexOf("#"));
    if (start !== "/") $(start).collapse("show");
  });
}

$(".careers-accordion").on("show.bs.collapse", function (a) {
  var curr = $(a.target).attr("id");
  var url = window.location.href;
  var start = window.location.hash;
  if (start.length > 0) {
    window.location.href = url.replace(start, "#" + curr);
  } else {
    window.location.href = url + "#" + curr;
  }
});
