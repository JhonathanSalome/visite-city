// variáveis para mapear quem é quem, para poder configuraer

let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
// let(variável) btnBack(name the variável) Back(back) igual a document(para ir no html) querySelect("traz um item só", no html procura alguém) .(ponto, classe) back(name the classe)

let container = document.querySelector('.container')
let list = document.querySelector('.container .list') // querySelector("pega os items por inteiro"), todos os items grande, pega o item por inteiro
let thumb = document.querySelector('.container .thumb')
// let(variável) thumb(todos os items pequenos) igual a document(para ir no html) querySelect("traz um item só", no html procura alguém) .(ponto, classe) container(name the classe) thumb(name the class)

// saber quando o botão foi clicado, pra executar as ações que precisa

// buttons
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')
// btnBack(name the button, botão) onclick(quando o button for clicado, ou seja, toda vez que clicar) = () =>(forma resumida de se ler uma function), chama a function function moveItemsOnClick, back(tipo do button que é)

// função vai ser chamada quando o botão ser clicado, vai movimenta os items quando a function for se chamado, tanto para frente tanto para traz
function moveItemsOnClick(type){ // function(função) (name the function) type(qual tipo é, se e back or next)
    // console.log(type)

    // mapeados

    let listItems = document.querySelectorAll('.list .list-item') // let(variável) listItems(name the variável) document(para ir no html), querySelectorAll("pega com varios items dentro   ", pegar todos os items, the forma separada) .(ponto, é classe) thumb(thumb) thumb-item(thumb the items), pega todos os thumb-items, pega with vários items dentro

    let thumbItems = document.querySelectorAll('.thumb .thumb-item') // let(variável) thumbItems(name the variável) document(para ir no html), querySelectorAll(pegar todos os items, the forma separada) .(ponto, é classe) list(lista) list-item(list the items), pegar todos os thumb items, pega with vários items dentro

    // se clicar no button next, faz algo
    if(type === 'next'){ // se type(tipo) for igual next(type the button), vai fazer algo
        list.appendChild(listItems[0]) // list(variável list) appendChild(ele coloca na posição zero) listItems(name the variável, the list) 0(posição, primeira posição)

        thumb.appendChild(thumbItems[0]) // thumb(variável thumb) appendChild(ele coloca na posição zero) thumbItems(name the variável, the thumb) 0(posição, primeira posição)

        container.classList.add('next') // container(name the variável, no html div principal) classList(add or tirar uma class) add(adicionar uma class), next(name the class), está adicionando uma class no css

    } else { // se não
        list.prepend(listItems[listItems.length - 1]) // list(variável list) prepend(colocar o item no final da list) listItems(name the variável, the list) 3(posição, última posição), ou listItems(variável) length(tamanho the listItems) -(menos) 1(um) último item the list

        thumb.prepend(thumbItems[thumbItems.length - 1]) // thumb(variável thumb) prepend(colocar o item no final da list) thumbItems(name the variável, the thumb) 3(posição, última posição), ou thumbItems(variável) length(tamanho the thumbItems) -(menos) 1(um) último item the list

        container.classList.add('back') // container(name the variável, no html div principal) classList(add or tirar uma class) add(adicionar uma class), back(name the class), está adicionando uma class no css
    }

    // temporizador(depois de alguns segundos, vai tirar essas classes), fazer com que a class fique apenas alguns segundos, que é o tempo de fazer os efeitos

    setTimeout( () => { // vai executar o que está dentro, depois de tantos segundos

        // remove as classes
        container.classList.remove('next') // container(name the variável, no html div principal) classList(add or tirar uma class) remove(remove uma class), next(name the class), está adicionando uma class no css

        container.classList.remove('back') // container(name the variável, no html div principal) classList(add or tirar uma class) remove(remove uma class), back(name the class), está adicionando uma class no cs

    }, 1000); // timeout(tempo esgotado), the value está em milissegundo
}
