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
$(document).ready(function () {
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

  function initSrTagsMarquee(targets) {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const containers = targets
      ? Array.from(targets)
      : Array.from(document.querySelectorAll(".sr-tags.sr-tags--auto-marquee")); // ✅ opt-in only

    containers.forEach((container) => {
      if (!container.dataset.srTagsOriginal) {
        container.dataset.srTagsOriginal = container.innerHTML;
      }

      if (!isMobile) {
        if (container.dataset.srMarquee === "true") {
          container.innerHTML = container.dataset.srTagsOriginal;
          container.classList.remove("sr-tags--marquee");
          delete container.dataset.srMarquee;
        }
        return;
      }

      if (container.dataset.srMarquee === "true") return;

      const buildMarquee = (attempt = 0) => {
        container.innerHTML = container.dataset.srTagsOriginal;
        const originalItems = Array.from(container.children);
        if (originalItems.length <= 1) return;

        const group = document.createElement("div");
        group.className = "sr-tags-group";
        originalItems.forEach((item) =>
          group.appendChild(item.cloneNode(true)),
        );

        const marquee = document.createElement("div");
        marquee.className = "sr-tags-marquee";
        marquee.appendChild(group);
        container.innerHTML = "";
        container.appendChild(marquee);
        container.classList.add("sr-tags--marquee");
        container.dataset.srMarquee = "true";

        requestAnimationFrame(() => {
          const groupWidth = group.scrollWidth;

          if (!groupWidth) {
            if (attempt < 5) {
              container.innerHTML = container.dataset.srTagsOriginal;
              container.classList.remove("sr-tags--marquee");
              delete container.dataset.srMarquee;
              requestAnimationFrame(() => buildMarquee(attempt + 1));
            }
            return;
          }

          const containerWidth = container.clientWidth || groupWidth;
          const baseItems = Array.from(group.children);
          let guard = 0;
          while (group.scrollWidth < containerWidth * 1.5 && guard < 20) {
            baseItems.forEach((item) =>
              group.appendChild(item.cloneNode(true)),
            );
            guard++;
          }

          const clone = group.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          marquee.appendChild(clone);
        });
      };

      buildMarquee();
    });
  }

  let srTagsResizeTimer;
  function scheduleSrTagsMarquee() {
    clearTimeout(srTagsResizeTimer);
    srTagsResizeTimer = setTimeout(() => {
      document
        .querySelectorAll(".sr-tags.sr-tags--auto-marquee[data-sr-marquee]")
        .forEach((el) => {
          // ✅ opt-in only
          el.innerHTML = el.dataset.srTagsOriginal;
          el.classList.remove("sr-tags--marquee");
          delete el.dataset.srMarquee;
        });
      initSrTagsMarquee();
    }, 150);
  }

  initSrTagsMarquee();
  $(window).on("load", initSrTagsMarquee);
  $(window).on("resize", scheduleSrTagsMarquee);

  if ("IntersectionObserver" in window) {
    const srTagsObserver = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          initSrTagsMarquee([entry.target]);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    document
      .querySelectorAll(".sr-tags.sr-tags--auto-marquee")
      .forEach((container) => {
        // ✅ opt-in only
        srTagsObserver.observe(container);
      });
  }

  if ("MutationObserver" in window) {
    const srTagsMutationObserver = new MutationObserver((mutations) => {
      const targets = [];
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches && node.matches(".sr-tags.sr-tags--auto-marquee"))
            targets.push(node); // ✅ opt-in only
          if (node.querySelectorAll) {
            node
              .querySelectorAll(".sr-tags.sr-tags--auto-marquee")
              .forEach((el) => targets.push(el)); // ✅ opt-in only
          }
        });
      });
      if (targets.length) initSrTagsMarquee(targets);
    });

    srTagsMutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
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
