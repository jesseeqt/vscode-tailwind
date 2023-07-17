const toggle = document.querySelector('.toggle_menu');
const menu = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
});
