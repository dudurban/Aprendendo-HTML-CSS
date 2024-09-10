function pesquisar() {
    // Busca o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section
    let section = document.getElementById("resultados-pesquisa");
  
    // Imprime o elemento section no console para fins de depuração (pode ser removido em produção)
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (dado) no array de dados
    for (let dado of dados) {
      // Cria uma nova string de HTML para cada resultado, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui a string com os resultados ao conteúdo HTML do elemento section
    section.innerHTML = resultados;
  }