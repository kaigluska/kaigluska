// Kai Gluska site — shared behavior

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 40) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.textContent = "Menu";
      });
    });
  }

  // Respect reduced-motion: strip the SMIL pluck animation, leave a static line
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    document.querySelectorAll(".string-divider animate").forEach(function (node) {
      node.remove();
    });
  }

  // Mailing list form: no backend wired up yet — placeholder confirmation only
  var mailForm = document.querySelector(".mail-form");
  if (mailForm) {
    mailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = mailForm.querySelector(".mail-status");
      if (status) {
        status.textContent = "Not connected yet — hook this up to Mailchimp/ConvertKit to go live.";
      }
    });
  }
});
