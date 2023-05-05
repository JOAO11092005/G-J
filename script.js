document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
  });

  function obterMensagem(n) {
    if (n < 10 || n > 100 || isNaN(n)) return "Amor o numero é invalido so pode digitar de 10 A 100";
    if (n <= 10) return "vou ficar triste!!";
    if (n <= 20) return "Isso é muito pouco!!";
    if (n <= 30) return "Eu Acho Que é Mais! ";
    if (n <= 40) return "Pode Melhorar né?";
    if (n <= 50) return "Eu acho que e bem mais do que isso!!";
    if (n <= 60) return "asim tambem é pouco!!";
    if (n <= 80) return "essa nota ta mais ou menos!!";
    if (n <= 90) return "Quase la acho que pode dar mais um esforço!!";
    return "Que lindo amor, Mas Claramente Eu Te Amo Mais!";
  }

  let timeout 

  function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero =document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {
      caixaDeMensagem.style.display = 'none'
    }, 2000)
  }