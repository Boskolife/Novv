export const burgerMenu = function () {
  const burger = document.querySelector('.burger_menu');
  const navMenu = document.querySelector('.menu');
  const navItem = document.querySelectorAll('.menu_link');

  burger?.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navMenu?.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
  navItem?.forEach((item) => {
    item.addEventListener('click', () => {
      burger?.classList.remove('burger_active');
      navMenu?.classList.remove('menu_active');
      document.body.classList.remove('body_lock');
    });
  });
};
