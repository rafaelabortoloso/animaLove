document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Mostrar o botão quando o usuário rolar para baixo
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add("active");
        } else {
            scrollToTopButton.classList.remove("active");
        }
    });

    // Rolar para o topo quando o botão for clicado
    scrollToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        const header = document.getElementById("header-container");
        header.scrollIntoView({ behavior: "smooth" });
    });
});

///////////////////////////////////////////////////////////////////////////////////////////

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('focus', () => {
    searchInput.removeAttribute('placeholder');
});

searchInput.addEventListener('blur', () => {
    if (!searchInput.value) {
        searchInput.setAttribute('placeholder', 'Digite suas preferências de adoção...');
    }
});

const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');

nameInput.addEventListener('focus', () => {
    nameInput.removeAttribute('placeholder');
});

nameInput.addEventListener('blur', () => {
    if (!nameInput.value) {
        nameInput.setAttribute('placeholder', 'Nome:');
    }
});

emailInput.addEventListener('focus', () => {
    emailInput.removeAttribute('placeholder');
});

emailInput.addEventListener('blur', () => {
    if (!emailInput.value) {
        emailInput.setAttribute('placeholder', 'E-mail:');
    }
});

messageInput.addEventListener('focus', () => {
    messageInput.removeAttribute('placeholder');
});

messageInput.addEventListener('blur', () => {
    if (!messageInput.value) {
        messageInput.setAttribute('placeholder', 'Mensagem:');
    }
});

///////////////////////////////////////////////////////////////////////////////////////////

const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const cardWidth = 310; // Largura do card + margem
const totalCards = carousel.children.length;
let currentPosition = 0;

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + totalCards) % totalCards;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
});

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % totalCards;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
});

/////////////////////////////////////////////////////////////////////////////////////////////////

