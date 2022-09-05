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
        secao: 'Laticínio',
        categoria: 'Leite',
        img: './img/leite.jfif'
    }
]

   
    


let btn = document.querySelector('.btn_vermelho')
let btn1 = document.querySelector('.btn_cinza')

btn1.addEventListener('click',filtrarTodos)
btn.addEventListener('click',filtrarHortifruti)





















function mostrarProdutos(produtos){
   
   const ul = document.querySelectorAll('ul')

    for(let i = 0; i < ul.length; i++)
    {
        document.querySelectorAll('ul')[i].innerHTML = '' 
    }

   for(let i = 0; i < produtos.length; i++)
   {
    document.getElementById('lista').appendChild(document.createElement('ul'))
    
    document.getElementsByTagName('ul')[i].appendChild(document.createElement('li'))

    let tags = ['img','h3','p','span']
    
    tags.forEach(tag =>{

        document.getElementsByTagName('li')[i].appendChild(document.createElement(tag)) 
    })


    document.getElementsByTagName('img')[i].src = produtos[i].img;
    document.getElementsByTagName('img')[i].alt = produtos[i].nome;
    document.getElementsByTagName('h3')[i].innerText = produtos[i].nome;
    document.getElementsByTagName('p')[i].innerText = produtos[i].preco;
    document.getElementsByTagName('span')[i].innerText = produtos[i].secao;
   }
}



function filtrarHortifruti(){

    let hortifruti = ListaProdutos.filter(obj => obj.secao === 'Hortifruti')

      mostrarProdutos(hortifruti)
}

function filtrarTodos(){
    let todos = [...ListaProdutos]

    mostrarProdutos(todos)
}
