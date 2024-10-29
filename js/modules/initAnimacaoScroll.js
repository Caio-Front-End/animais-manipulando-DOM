export default function initAnimacaoScroll() {
    const jsMenu = document.querySelectorAll('[data-jsScroll]');

    if (jsMenu.length) {
        const windowHeight = window.innerHeight * 0.7;

        function animaScroll() {
            jsMenu.forEach((section) => {
                const sectionRectTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionRectTop < windowHeight;
                if (isSectionVisible) {
                    section.classList.add(section.dataset.jsscroll);
                }
            })
        }

        window.addEventListener('load', function () {
            jsMenu[0].classList.add(jsMenu[0].dataset.jsscroll);
        })

        window.addEventListener('scroll', animaScroll);
    }
}