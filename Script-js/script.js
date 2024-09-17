
// Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// Pop-up
document.addEventListener("DOMContentLoaded", function() {
  // Найти поп-ап элемент
  const popup = document.querySelector(".pop-up-covid");
  // Найти крестик для закрытия поп-апа
  const closeBtn = document.querySelector(".pop-up-covid__cross");

  // Показать поп-ап при загрузке страницы
  popup.style.display = "grid";

  // Добавить событие клика для крестика, чтобы закрыть поп-ап
  closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
  });
});

