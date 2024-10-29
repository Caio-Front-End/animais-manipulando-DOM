export default function showText() {
    const listaImgs = document.querySelectorAll('.js-tabmenu li');
    const animaisSection = document.querySelectorAll('[data-animasect]');

    if (listaImgs.length && animaisSection.length) {
        window.addEventListener('load', function () {
            animaisSection[0].classList.add(animaisSection[0].dataset.animasect);
        })

        function manipulaClasse(index) {
            animaisSection.forEach((section) => {
                const dataValue = section.dataset.animasect;
                if (section.classList.contains(dataValue)) {
                    section.classList.remove(dataValue);
                }
            })
            animaisSection[index].classList.add(animaisSection[index].dataset.animasect);
        }

        listaImgs.forEach((img, index) => {
            img.addEventListener('click', function () {
                manipulaClasse(index);
            })
        })
    }
}
