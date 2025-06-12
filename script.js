document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializa a biblioteca de Animações de Scroll (AOS)
    AOS.init({
        duration: 800, // Duração da animação em milissegundos
        once: true,    // A animação acontece apenas uma vez
        offset: 50,    // Começa a animação 50px antes do elemento aparecer
    });

    // 2. Lógica para mudar o fundo da Navbar ao rolar a página
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        window.onscroll = function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
    }

    // 3. Lógica para o Scroll Suave ao clicar nos links do menu
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão de saltar para a âncora
            e.preventDefault();

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});