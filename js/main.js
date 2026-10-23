// Shared behavior for the small-screen navigation menu.
const menuButton = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

function setMenuOpen(isOpen) {
  mainNavigation.classList.toggle("site-nav--open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuButton.querySelector(".menu-toggle__icon").textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

// The browser checks required fields and the email format; this handler
// keeps the form on the page and displays feedback instead of sending data.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please complete each required field and enter a valid email address.";
      formStatus.classList.add("form-status--error");
      contactForm.reportValidity();
      return;
    }

    formStatus.classList.remove("form-status--error");
    formStatus.textContent = "Thanks for your message! This demo form does not send data to a server.";
    contactForm.reset();
  });
}
