const burgerMenu = document.getElementById('burgerMenu')
const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const headerNav = document.getElementById('headerNav')

burgerMenu.addEventListener('click', () => {
    openIcon.classList.toggle('d-none')
    closeIcon.classList.toggle('d-none')
    headerNav.classList.toggle('header-nav__open')
    
    document.documentElement.style.overflow = 
        document.documentElement.style.overflow === 'hidden' ? '' : 'hidden';
})


const cards = document.querySelectorAll('.catagory-card');

cards.forEach((card, index) => {
    const bgPhoto = card.querySelector('.bg-photo');
    bgPhoto.style.backgroundImage = `url(assets/img/catagory-pic-${index + 1}.webp)`;
});


const endTime = new Date();
endTime.setHours(endTime.getHours() + 60);

function updateTimer() {
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!hoursEl || !minutesEl || !secondsEl) return;

    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);

updateTimer();


const header = document.querySelector('.header');
const root = document.documentElement;
const colors = ['#2B2B2B', '#1B1B1B', '#2B2B2B', '#3B3B3B', '#2B2B2B'];

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const section = Math.floor((scrollTop / docHeight) * colors.length);

  header.style.backgroundColor = colors[section] || colors[colors.length - 1];
});

function updateHeaderHeight() {
  root.style.setProperty('--header-height', `${header.offsetHeight}px`);
}

updateHeaderHeight();

window.addEventListener('resize', updateHeaderHeight);


function handleSubmitFollow(event) {
    event.preventDefault();
    document.getElementById('emailInputFollow').placeholder = '';
    alert('Форма відправлена!');
}

function handleSubmit(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    
    if (emailInput) {
        emailInput.value = '';
        emailInput.placeholder = 'Enter your email here'; 
    }
    
    alert('Форма відправлена!');
}