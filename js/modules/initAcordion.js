export default function initAccordion() {
    const faqDts = document.querySelectorAll('.js-dt-list dt');
    const faqDds = []
    faqDts.forEach((dt) => {
        faqDds.push(dt.nextElementSibling);
    });

    function manipulaDds(index) {
        faqDds[index].classList.add('animarDD');
        faqDts[index].classList.add('dt-ativo');
    }

    faqDts.forEach((dt, index) => {
        window.addEventListener('scroll', function () {
            const dtRectTop = dt.getBoundingClientRect().top;
            if (dtRectTop <= window.innerHeight * .8) {
                manipulaDds(index);
            } else if (dtRectTop > this.window.innerHeight * .9) {
                faqDds[index].classList.remove('animarDD');
                faqDts[index].classList.remove('dt-ativo');
            }
        })
    })
}
