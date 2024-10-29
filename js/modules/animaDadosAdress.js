export default function animaDadosAdress() {
  const dados = document.querySelectorAll('[data-dadoinfo]');

  function animarDados() {
    dados.forEach((dado) => {
      let time = dado.dataset.dadotime;
      const dadoRectTop = dado.getBoundingClientRect().top;
      if (dadoRectTop < window.innerHeight) {
        setTimeout(() => {
          dado.classList.add(dado.dataset.dadoinfo);
        }, time);
      } else {
        dado.classList.remove(dado.dataset.dadoinfo);
      }
    });
  }

  window.addEventListener('scroll', animarDados);
}
