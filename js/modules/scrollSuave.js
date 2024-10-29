export default function scrollSuave() {
    
    function addScrollSuave(e) {
        const hrefSection = e.currentTarget.getAttribute('href');
        const section = document.querySelector(hrefSection);
        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
        e.preventDefault();
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {
        link.addEventListener('click', addScrollSuave)
    })

    //Forma alternativa:

    // const topoDaSection = section.offsetTop;
    // window.scrollTo({
    //     top: 'topo',
    //     behavior: 'smooth',
    // });

}
