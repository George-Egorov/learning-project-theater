
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
document.addEventListener("DOMContentLoaded", function () {
  // Найти поп-ап элемент
  const popup = document.querySelector(".pop-up-covid");
  // Найти крестик для закрытия поп-апа
  const closeBtn = document.querySelector(".pop-up-covid__cross");

  // Показать поп-ап при загрузке страницы
  popup.style.display = "grid";

  // Добавить событие клика для крестика, чтобы закрыть поп-ап
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});


// Burger-menu
// document.addEventListener("DOMContentLoaded", function() {
//   // Найти элементы кнопки открытия и кнопки закрытия
//   const burgerOpen = document.querySelector(".header__menu-burger");
//   const burgerClose = document.querySelector(".header__nav-burger-cross");
//   const menu = document.querySelector(".header__nav-list-burger");

//   // Открытие меню при нажатии на кнопку открытия
//   burgerOpen.addEventListener("click", function() {
//       menu.classList.add("active");
//   });

//   // Закрытие меню при нажатии на кнопку закрытия
//   burgerClose.addEventListener("click", function() {
//       menu.classList.remove("active");
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  burgerOpen();
  burgerClose();
})

function burgerOpen() {
  const button = document.querySelector('.header__menu-burger');
  const burgerMenuContainer = document.querySelector('.header__burger-background');
  const body = document.querySelector('body');

  if (button) {
    button.addEventListener('click', function () {
      if (burgerMenuContainer) {
        burgerMenuContainer.classList.add('visible');
        body.classList.add('hiden')
      }
    })
  }
}

function burgerClose() {

  const buttonClose = document.querySelector('.header__nav-burger-cross');
  const burgerMenuContainer = document.querySelector('.header__burger-background');
  const body = document.querySelector('body');

  if (buttonClose) {
    buttonClose.addEventListener('click', function () {
      if (burgerMenuContainer) {
        burgerMenuContainer.classList.remove('visible');
        body.classList.remove('hiden');
      }
    })
  }

  if (burgerMenuContainer) {
    burgerMenuContainer.addEventListener('click', function () {
      if (burgerMenuContainer) {
        burgerMenuContainer.classList.remove('visible');
        body.classList.remove('hiden');
      }
    })
  }
}

