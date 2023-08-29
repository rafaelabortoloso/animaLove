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

const searchInput = document.getElementById('input');

searchInput.addEventListener('focus', () => {
    searchInput.removeAttribute('placeholder');
});

searchInput.addEventListener('blur', () => {
    if (!searchInput.value) {
        searchInput.setAttribute('placeholder', 'Digite suas preferências de adoção...');
    }
});

const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const cardWidth = 220; // Largura do card + margem
const totalCards = carousel.children.length; // Não é necessário dividir por 2
let currentPosition = 0;

prevButton.addEventListener('click', () => {
    currentPosition = (currentPosition - 1 + totalCards) % totalCards;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
});

nextButton.addEventListener('click', () => {
    currentPosition = (currentPosition + 1) % totalCards;
    carousel.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
});

