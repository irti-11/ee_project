const modal = document.getElementById("cardModal");
const modalImage = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalText = modal.querySelector(".modal-text");
const closeBtn = modal.querySelector(".close");

document.querySelectorAll(".card_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card_main");

    modalImage.src = card.querySelector(".card_image").src;
    modalTitle.innerText = card.querySelector(".card_title h1").innerText;
    modalText.innerText = btn.dataset.modalText;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelectorAll(".card_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".cards_brushes");

    modalImage.src = card.querySelector(".card_image").src;
    modalTitle.innerText = card.querySelector(".card_title h1").innerText;
    modalText.innerText = btn.dataset.modalText;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelectorAll(".card_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".special_products__forkid");

    modalImage.src = card.querySelector(".card_image").src;
    modalTitle.innerText = card.querySelector(".card_title h1").innerText;
    modalText.innerText = btn.dataset.modalText;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelectorAll(".card_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".electrical");

    modalImage.src = card.querySelector(".card_image").src;
    modalTitle.innerText = card.querySelector(".card_title h1").innerText;
    modalText.innerText = btn.dataset.modalText;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//navbar toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const navelm = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navelm.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navelm.classList.remove("navbar-scrolled");
  }
});
document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("show");
    }
  });
});

document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.parentElement;
    card.classList.toggle("active");
    btn.textContent = card.classList.contains("active")
      ? "Show Less"
      : "Read More";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = this.closest(".card");

      // Safety check
      if (!card) return;

      card.classList.toggle("open");

      // Button text change
      if (card.classList.contains("open")) {
        this.textContent = "Read Less";
      } else {
        this.textContent = "Read More";
      }
    });
  });
});

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("successMsg");
    msg.style.display = "block";
    msg.style.opacity = "0";
    setTimeout(() => {
      msg.style.transition = "0.5s";
      msg.style.opacity = "1";
    }, 50);
    this.reset();
  });

// Fade-in effect on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll(".doctor-card").forEach((card) => {
  observer.observe(card);
});

// Dynamic Map Updater
function updateMap(location) {
  document.getElementById(
    "mapFrame"
  ).src = `https://www.google.com/maps?q=${location}&output=embed`;
  window.scrollTo({
    top: document.getElementById("mapFrame").offsetTop - 100,
    behavior: "smooth",
  });
}

// Fade-in for map and heading
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".cards_container > div");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active button style
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

//professional js

const buttons = document.querySelectorAll(".accordion-btn");
const accordionItems = document.querySelectorAll(".accordion-item");
const contents = document.querySelectorAll(".pro_content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;

    // accordion
    accordionItems.forEach((item) => item.classList.remove("active"));
    button.parentElement.classList.add("active");

    // right panel
    contents.forEach((c) => {
      if (c.id === key) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  });
});
