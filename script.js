document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav .links a, .hero-actions a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            const text = this.textContent.toLowerCase();

            // 1. Se for o link externo do pedido, não faz nada e deixa redirecionar
            if (href.includes("anota.ai")) {
                return; 
            }

            // 2. Cancela o redirecionamento para .html para os outros links
            event.preventDefault();

            // 3. Lógica de rolagem baseada no texto ou link
            if (text.includes("cardápio") || text.includes("cardapio") || href.includes("cardapio")) {
                const section = document.getElementById("produtos");
                scrollToSection(section);
            } 
            else if (text.includes("estamos") || text.includes("localização") || href.includes("localizacao")) {
                const section = document.getElementById("mapa");
                scrollToSection(section);
            } 
            else if (text.includes("início") || text.includes("inicio") || href.includes("index")) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

    // Função auxiliar para rolar com precisão
    function scrollToSection(element) {
        if (!element) return;
        const navHeight = document.querySelector("nav").offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
});