// Função para rolar o dado
function rolarDado(faces) {
  const dado = document.getElementById('dice');
  
  // Remove todas as classes de dado
  dado.classList.remove('dice-d4', 'dice-d6', 'dice-d8', 'dice-d10', 'dice-d12', 'dice-d20');

  // Adiciona a classe correspondente ao dado
  dado.classList.add(`dice-d${faces}`);
  dado.style.animation = 'rollDice 1s ease-in-out'; // Inicia a animação

  setTimeout(() => {
    const resultado = Math.floor(Math.random() * faces) + 1;
    dado.textContent = resultado; // Atualiza o resultado no dado
    dado.style.animation = 'none'; // Reseta a animação após terminar
    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
  }, 1000); // Tempo da animação em milissegundos (1 segundo)
}

// Função para buscar personagem
function pesquisar() {
  const nomeBuscado = document.getElementById("campoBusca").value.toLowerCase();
  const resultados = dados.filter(dados =>
    dados.titulo.toLowerCase().includes(nomeBuscado)
  );

  exibirResultados(resultados);
}

// Função para exibir os resultados da busca
function exibirResultados(resultados) {
  const resultadosDiv = document.getElementById("resultados-pesquisa");
  resultadosDiv.innerHTML = ""; // Limpa os resultados anteriores

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "<p>Nenhum personagem encontrado.</p>";
  } else {
    resultados.forEach(dados => {
      resultadosDiv.innerHTML += `
      <div class="item-resultado">
           <h2>
             <a href="#" target="_blank">${dados.titulo}</a>
           </h2>
           <p class="descricao-meta">${dados.descricao}</p>
           <a href=${dados.link} target="_blank">Mais informações</a>
      </div>`;
    });
  }
}