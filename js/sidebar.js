const menuIcon = document.querySelector('#menu_icon');
const closeIcon = document.querySelector('#close_icon');
const sidebar = document.querySelector('#sidebar_menu');

menuIcon.addEventListener('click', function() {
    sidebar.classList.add('active');
});

closeIcon.addEventListener('click', function() {
    sidebar.classList.remove('active');
});