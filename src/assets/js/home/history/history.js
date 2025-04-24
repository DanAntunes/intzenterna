// jQuery + Typewriter
$(function(){
  const texto = "Em 2014, um conselho visionário deu origem à INTZ, nascida no coração do Brás, em São Paulo. Com mais de 70 títulos, a equipe revolucionou os eSports no Brasil, unindo estratégia e paixão em cada etapa do seu crescimento. Descubra como uma visão ousada transformou a INTZ em referência no cenário dos jogos eletrônicos.";
  const $el = $("#history-text");
  let idx = 0;
  const velocidade = 40;

  function digitar() {
    if (idx < texto.length) {
      $el.append(texto[idx++]);
      setTimeout(digitar, velocidade);
    } else {
      $el.append('<span class="cursor">|</span>');
    }
  }

  // Quando o usuário rolar até a seção
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        digitar();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#historia"));

  // Exemplo de ação do botão
  $("#history-btn").on("click", () => {
    $("html, body").animate({
      scrollTop: $("#outra-section").offset().top
    }, 600);
  });
});
