document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchBtn");
  const result = document.getElementById("searchResult");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const megaMenu = document.getElementById("megaMenu");

  if (button && input && result) {
    const handleSearch = () => {
      const value = input.value.trim();

      if (value !== "") {
        result.innerHTML = `Você buscou por: "<strong>${value}</strong>"`;
      } else {
        result.innerHTML = "Digite algo para buscar.";
      }
    };

    button.addEventListener("click", handleSearch);

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
  }

  if (menuToggle && megaMenu) {
    menuToggle.addEventListener("click", () => {
      megaMenu.classList.toggle("active");
    });
  }

  if (mobileMenuBtn && megaMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      megaMenu.classList.toggle("active");
    });
  }

  document.querySelectorAll(".swiper").forEach((swiperEl) => {
    const nextBtn = swiperEl.querySelector(".swiper-button-next");
    const prevBtn = swiperEl.querySelector(".swiper-button-prev");

    new Swiper(swiperEl, {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu =
      megaMenu?.contains(event.target) ||
      menuToggle?.contains(event.target) ||
      mobileMenuBtn?.contains(event.target);

    if (!clickedInsideMenu && megaMenu?.classList.contains("active")) {
      megaMenu.classList.remove("active");
    }
  });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});