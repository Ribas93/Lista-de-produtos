const ListaProdutos = [
    {
        nome: 'Banana',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/banana.jfif',
        id: 'ban1'
    },
    {
        nome: 'Morango',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/morango.jfif',
        id: 'mor2'
    },
    {
        nome: 'Maçã',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/maca.jfif',
        id: 'mac3'
    },
    {
        nome: 'Pão',
        preco: 4,
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './img/pao.jfif',
        id: 'pao4'

    },
    {
        nome: 'Leite',
        preco: 5,
        secao: 'Laticinio',
        categoria: 'Leite',
        img: './img/leite.jfif',
        id: 'lei5'
    }
]


   
let btn = document.querySelector('.btn_vermelho')
let btn1 = document.querySelector('.btn_cinza')
let btn2 = document.querySelector('.btn_black')





let resInp = document.querySelector('#resInp')
let res = document.querySelector('#res')
res.innerHTML = `R$ 0,00`


btn2.addEventListener('click', filtrarUm)
btn1.addEventListener('click',filtrarTodos)
btn.addEventListener('click',filtrarHortifruti)





function filtrarHortifruti(){

    let hortifruti = ListaProdutos.filter(obj => obj.secao === 'Hortifruti');

    mostrarProdutosFiltro(hortifruti);
}

function filtrarTodos(){

    let todos = [...ListaProdutos];

    mostrarProdutosFiltro(todos);
}

function filtrarUm(){
    
    let valor = document.querySelector('.btn_input').value;

    
    let selecionarPeloInput = ListaProdutos
    .filter(obj => obj.nome.toLowerCase().includes(valor.toLowerCase()) || obj.secao.toLowerCase().includes(valor.toLowerCase()));
     
    selecionarPeloInput.length !== 0 ?  mostrarProdutosFiltro(selecionarPeloInput) : resInp.innerHTML = `O produto/seção "<u>${valor}</u>" não existe!`;
 
}



function mostrarProdutosFiltro(produtos){
   
    apagarTags('#listaProcurar ul')
    
    resInp.innerHTML = "" 

    for (let i = 0; i < produtos.length; i++)
    {
        
        adicionarTag(document.getElementById('listaProcurar'),'ul')
    
        adicionarTag(document.querySelectorAll('#listaProcurar ul')[i],'li')
        
        let tags = ['img','h3','p','span','button']
        adicionarTags(document.getElementsByTagName('li')[i], tags)
        
        let img = document.getElementsByTagName('img')[i]
        let h3 = document.getElementsByTagName('h3')[i]
        let p = document.getElementsByTagName('p')[i]
        let span = document.getElementsByTagName('span')[i]
        let button = document.getElementsByTagName('button')[i]
        
        adicionarConteudoTag(img,'src',produtos[i].img)
        adicionarConteudoTag(img,"alt",produtos[i].nome)
        adicionarConteudoTag(h3,"innerText",produtos[i].nome)
        adicionarConteudoTag(p,"innerText",produtos[i].preco)
        adicionarConteudoTag(span,"innerText",produtos[i].secao)
        adicionarConteudoTag(button,"innerText",'Comprar')
        adicionarConteudoTag(button,"id",produtos[i].id)
        button.setAttribute("class","btn")
   }

   

   let banana = document.querySelector('#ban1')
   let morango = document.querySelector('#mor2')
   let maca = document.querySelector('#mac3')
   let pao = document.querySelector('#pao4')
   let leite = document.querySelector('#lei5')

   banana.addEventListener('click',function(){mostrarProdutosCompras('ban1')})
   morango.addEventListener('click',function(){mostrarProdutosCompras('mor2')})
   maca.addEventListener('click',function(){mostrarProdutosCompras('mac3')})
   pao.addEventListener('click',function(){mostrarProdutosCompras('pao4')})
   leite.addEventListener('click',function(){mostrarProdutosCompras('lei5')})

   

}



function mostrarProdutosCompras(ids){

    resInp.innerHTML = "" 
    
    let carrinho = document.getElementById('listaCarrinho')
    let btnCompra = document.querySelectorAll("#botoes input")[0]
    let btnLimpar =document.querySelectorAll("#botoes input")[1]
     
    carrinho.style.border = '2px ridge black'
    btnCompra.style.display = "block"
    btnLimpar.style.display = "block"
    
       let prod = ListaProdutos.filter(obj => obj.id === ids)
        
        adicionarTag(document.getElementById('listaCarrinho'),'ul')
        
        let ul = document.querySelectorAll('#listaCarrinho ul')

        adicionarTag(document.querySelectorAll('#listaCarrinho ul')[ul.length - 1],'li')
        
        let tags = ['img','h3','p']
        adicionarTags(document.querySelectorAll('#listaCarrinho li')[ul.length - 1], tags)
        
        let img = document.querySelectorAll('#listaCarrinho img')[ul.length - 1]
        let h3 = document.querySelectorAll('#listaCarrinho h3')[ul.length - 1]
        let p = document.querySelectorAll('#listaCarrinho p')[ul.length - 1]
        
        
        adicionarConteudoTag(img,'src',prod[0].img)
        adicionarConteudoTag(img,"alt",prod[0].nome)
        adicionarConteudoTag(h3,"innerText",prod[0].nome)
        adicionarConteudoTag(p,"innerText",`R$ ${prod[0].preco}`)
        
        let somar = somaProds('#listaCarrinho p')

         res.innerHTML = `R$ ${somar}`

            btnLimpar.addEventListener('click', function(){
                apagarTags("#listaCarrinho ul")
                carrinho.style.border = 'none'
                btnCompra.style.display = 'none'
                btnLimpar.style.display = 'none'
                res.innerHTML = "R$ 0,00"
            })

}

function somaProds(tag){

   let arrayTags =  document.querySelectorAll(tag)
   
   let soma = 0;

   for (let i = 0; i < arrayTags.length; i++)
   {
    soma += somenteNumeros(document.querySelectorAll(tag)[i].innerHTML)
   }

   return soma
}

function somenteNumeros(string)
{
    
    let numStr = string.replace(/[^0-9]/g,'')

    return parseInt(numStr)

}

function apagarTags(tag){

    let tags = document.querySelectorAll(tag)

    for (let i = 0; i < tags.length; i++)
    {
        document.querySelectorAll(tag)[0].remove() 
    }
}

function adicionarTag(elementoSelecionado, tag){

    elementoSelecionado.appendChild(document.createElement(tag))
}

function adicionarTags(elementoSelecionado, tags){

    for (let i = 0; i < tags.length; i++)
    {
        elementoSelecionado.appendChild(document.createElement(tags[i]))
    }

}

function adicionarConteudoTag(tag,chave,valor){
    tag[chave] = valor
}


