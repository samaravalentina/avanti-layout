document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchBtn");
  const result = document.getElementById("searchResult");

  button.addEventListener("click", function () {
    const value = input.value.trim();

    if (value !== "") {
      result.innerHTML = `Você buscou por: "<strong>${value}</strong>"`;
      result.scrollIntoView({ behavior: "smooth" });
    } else {
      result.innerHTML = "Digite algo para buscar.";
    }
  });

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      button.click();
    }
  });


  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });


  const menuToggle = document.getElementById("menuToggle");
const megaMenu = document.getElementById("megaMenu");

menuToggle.addEventListener("click", () => {
  megaMenu.classList.toggle("active");
});
  
});
