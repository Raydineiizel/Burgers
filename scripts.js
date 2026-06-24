/* SELEÇÃO DE ELEMENTOS DO HTML (DOM) */
const list = document.querySelector('ul')                 // Seleciona a lista onde os cards serão renderizados
const buttonShowAll = document.querySelector('.show-all') // Botão para mostrar todos os produtos
const buttonMapAll = document.querySelector('.map-all')   // Botão para aplicar desconto (mapear itens)
const sumAll = document.querySelector('.sum-all')         // Botão para somar o valor de todos os itens
const filterAll = document.querySelector('.filter-all')   // Botão para filtrar apenas os itens veganos

/* FUNÇÃO AUXILIAR DE FORMATAÇÃO */

// Formata valores numéricos para a moeda brasileira (Ex: 10 -> R$ 10,00)
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency',
        currency: 'BRL',
     })

     return newValue
}

/* FUNÇÕES PRINCIPAIS DE MANIPULAÇÃO DO MENU */

// Renderiza os cards na tela a partir de um array de produtos enviado por parâmetro
function showAll(productsArray) {
    let myLi = ' ' // Inicializa uma string vazia para acumular o HTML de cada card

    // Percorre cada produto do array criando a estrutura de HTML correspondente
    productsArray.forEach((product) => {
        myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">${formatCurrency(product.price)}</p> 
    </li>
  `
    })

    list.innerHTML = myLi // Substitui o conteúdo da lista HTML pelos cards gerados
}

// Cria um novo array aplicando 10% de desconto em cada produto do menu original
function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,                 // Copia todas as propriedades originais do produto (spread operator)
        price: product.price * 0.9, // Sobrescreve apenas o preço aplicando 10% de desconto
    }))

    showAll(newPrices) // Atualiza a tela exibindo os novos produtos mapeados com desconto
}

// Soma o preço de todos os produtos do menu utilizando o reduce
function sumAllItems() {
    // acc = acumulador (começa em 0), curr = item atual do loop
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    
    // Exibe o valor total acumulado dentro de um card único na tela
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
    </li>
    `
}

// Filtra o menu original mantendo apenas os produtos que são veganos
function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}

/* OUVINTES DE EVENTOS (CLICK DOS BOTÕES) */
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
