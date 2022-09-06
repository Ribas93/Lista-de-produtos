const ListaProdutos = [
    {
        nome: 'Banana',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/banana.jfif'
    },
    {
        nome: 'Morango',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/morango.jfif'
    },
    {
        nome: 'Maçã',
        preco: 2,
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './img/maca.jfif'
    },
    {
        nome: 'Pão',
        preco: 4,
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './img/pao.jfif'
    },
    {
        nome: 'Leite',
        preco: 5,
        secao: 'Laticinio',
        categoria: 'Leite',
        img: './img/leite.jfif'
    }
]


   
let btn = document.querySelector('.btn_vermelho')
let btn1 = document.querySelector('.btn_cinza')
let btn2 = document.querySelector('.btn_black')


let res = document.querySelector('#res')


btn2.addEventListener('click', filtrarUm)
btn1.addEventListener('click',filtrarTodos)
btn.addEventListener('click',filtrarHortifruti)


function filtrarHortifruti(){

    let hortifruti = ListaProdutos.filter(obj => obj.secao === 'Hortifruti')

     mostrarProdutos(hortifruti)
}

function filtrarTodos(){
    let todos = [...ListaProdutos]

    mostrarProdutos(todos)
}

function filtrarUm(){
    
    let valor = document.querySelector('.btn_input').value

    let selecionarUm = ListaProdutos.filter(obj => obj.nome === valor || obj.secao === valor)

     selecionarUm.length !== 0 ?  mostrarProdutos(selecionarUm) : res.innerHTML = `O produto/seção "<u>${valor}</u>" não existe!`
 
}



function mostrarProdutos(produtos){
   
    apagarTags('ul')
    

   for(let i = 0; i < produtos.length; i++)
   {

    adicionarTag(document.getElementById('lista'),'ul')
    
    
    adicionarTag(document.getElementsByTagName('ul')[i],'li')

    let tags = ['img','h3','p','span']
    
    adicionarTags(document.getElementsByTagName('li')[i], tags)
    
    let img = document.getElementsByTagName('img')[i]
    let h3 = document.getElementsByTagName('h3')[i]
    let p = document.getElementsByTagName('p')[i]
    let span = document.getElementsByTagName('span')[i]

    adicionarConteudoTag(img,'src',produtos[i].img)
    adicionarConteudoTag(img,"alt",produtos[i].nome)
    adicionarConteudoTag(h3,"innerText",produtos[i].nome)
    adicionarConteudoTag(p,"innerText",produtos[i].preco)
    adicionarConteudoTag(span,"innerText",produtos[i].secao)

   }

   let somar = produtos.map(obj => Number(obj.preco)).reduce((inicio,proximo) => {return inicio + proximo})

   res.innerHTML = `R$ ${somar}`
}




function apagarTags(tag){

    let tags = document.querySelectorAll(tag)

    for(let i = 0; i < tags.length; i++)
    {
        document.querySelectorAll(tag)[i].innerHTML = '' 
    }
}

function adicionarTag(elementoSelecionado, tag){

    elementoSelecionado.appendChild(document.createElement(tag))
}

function adicionarTags(elementoSelecionado, tags){

    for(let i = 0; i < tags.length; i++)
    {
        elementoSelecionado.appendChild(document.createElement(tags[i]))
    }

}

function adicionarConteudoTag(tag,chave,valor){
    tag[chave] = valor
}


