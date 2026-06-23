const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
    <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
    </li>
  `

    })

    list.innerHTML = myLi
}
function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // Dar 10% de desconto.
    }))

    //Spread Operatore
    console.log(newPrices)
}

buttonShowAll.addEventListener('click', showAll)
buttonMapAll.addEventListener('click', mapAllItens)