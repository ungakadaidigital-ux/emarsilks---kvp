/* EMAR SILKS — main.js (vanilla, no dependencies) */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "914632220717"; // update with live WhatsApp business number
  var PHONE_NUMBER = "+919994917732";

  document.addEventListener("DOMContentLoaded", function () {
    initLoader();
    initHeader();
    initNavToggle();
    initActiveLink();
    initRevealOnScroll();
    initScrollTop();
    initWhatsAppLinks();
    initLightbox();
    initContactForm();
    initYear();
  });

  /* Page load animation */
  function initLoader() {
    var loader = document.querySelector(".page-loader");
    if (!loader) return;
    window.addEventListener("load", function () {
      setTimeout(function () { loader.classList.add("hidden"); }, 250);
    });
  }

  /* Sticky header background on scroll */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile nav toggle */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* Highlight current page in nav */
  function initActiveLink() {
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }

  /* Scroll-triggered reveal animations */
  function initRevealOnScroll() {
    var items = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!("IntersectionObserver" in window) || !items.length) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* Scroll-to-top button */
  function initScrollTop() {
    var btn = document.querySelector(".scroll-top");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Build WhatsApp links from data-whatsapp-msg attributes + floating button */
  function initWhatsAppLinks() {
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      var msg = el.getAttribute("data-whatsapp-msg") || "Vanakkam EMAR Silks! I'd like to know more about your collections.";
      el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    document.querySelectorAll("[data-call]").forEach(function (el) {
      el.setAttribute("href", "tel:" + PHONE_NUMBER);
    });
  }

  /* Lightweight lightbox gallery */
  function initLightbox() {
    var items = document.querySelectorAll(".gallery-item img");
    var lightbox = document.querySelector(".lightbox");
    if (!items.length || !lightbox) return;
    var lbImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox-close");
    var prevBtn = lightbox.querySelector(".lightbox-prev");
    var nextBtn = lightbox.querySelector(".lightbox-next");
    var list = Array.prototype.slice.call(items);
    var current = 0;

    function open(i) {
      current = i;
      lbImg.src = list[current].src;
      lbImg.alt = list[current].alt || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }
    function nav(dir) {
      current = (current + dir + list.length) % list.length;
      lbImg.src = list[current].src;
      lbImg.alt = list[current].alt || "";
    }

    list.forEach(function (img, i) {
      img.parentElement.addEventListener("click", function () { open(i); });
    });
    closeBtn && closeBtn.addEventListener("click", close);
    prevBtn && prevBtn.addEventListener("click", function () { nav(-1); });
    nextBtn && nextBtn.addEventListener("click", function () { nav(1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") nav(-1);
      if (e.key === "ArrowRight") nav(1);
    });
  }

  /* Contact form — client-side only; wire to backend / form service on deploy */
  function initContactForm() {
    var form = document.querySelector(".contact-form");
    if (!form) return;
    var success = document.querySelector(".form-success");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var message = form.querySelector("#message").value.trim();
      var msg = "Vanakkam, I am " + name + " (" + phone + "). " + message;
      if (success) success.classList.add("show");
      form.reset();
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
    });
  }

  function initYear() {
    document.querySelectorAll(".current-year").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }
})();

