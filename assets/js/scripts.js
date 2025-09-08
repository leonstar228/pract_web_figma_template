const burgerMenu = document.getElementById('burgerMenu')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const headerNav = document.getElementById('headerNav')

burgerMenu.addEventListener('click', () =>{
    openIcon.classList.toggle('d-none')
    closeIcon.classList.toggle('d-none')
    headerNav.classList.toggle('header-nav__open')
})

const cards = document.querySelectorAll('.catagory-card');

cards.forEach((card, index) => {
    const bgPhoto = card.querySelector('.bg-photo');
    bgPhoto.style.backgroundImage = `url(assets/img/catagory-pic-${index + 1}.png)`;
});
