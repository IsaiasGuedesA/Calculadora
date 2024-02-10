const tela = document.querySelector('section.display').children[0]

const um = document.getElementById("um")
const dois = document.getElementById("dois")
const tres = document.getElementById("tres")
const quatro = document.getElementById("quatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const sete = document.getElementById("sete")
const oito = document.getElementById("oito")
const nove = document.getElementById("nove")
const zero = document.getElementById("zero")
const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const vezes = document.getElementById("vezes")
const divisao = document.getElementById("divisao")
const ponto = document.getElementById("ponto")
const del = document.getElementById("del")
const igual = document.getElementById("igual")
const reset = document.getElementById("reset")

const bts_number = [um,dois,tres,quatro,cinco,seis,sete,oito,nove,zero,ponto]

let operacao = "add"

let number1 = "0"
let number2 = ""

// tela.textContent = ""
function uptela(t){
    (t==1)?tela.textContent = number1:(t==2)?tela.textContent = number2:'none'
}

for (let i=0 ;i<bts_number.length; i++){

    let value_number = (i<9)?String(i+1):(i==9)?'0':'.'
   
    bts_number[i].addEventListener('click',()=>{
        number2 = number2 + value_number
        uptela(2)
    })
    
}

del.addEventListener('click' , ()=>{
    number2 = number2.slice(0, -1);
    uptela(2)
})

reset.addEventListener('click' , ()=>{
    number1 = '0'
    number2 = ''
    uptela(2)
})

mais.addEventListener('click' , ()=>{
    if(number2 != ''){
        caucular(number1 ,number2 ,operacao)
    }
    operacao = "add"
    uptela(1)
})
menos.addEventListener('click' , ()=>{
    if(number2 != ''){
        caucular(number1 ,number2 ,operacao)
    }
    operacao = "men"
    uptela(1)
})
vezes.addEventListener('click' , ()=>{
    if(number2 != ''){
        caucular(number1 ,number2 ,operacao)
    }
    operacao = "mult"
    uptela(1)
})
divisao.addEventListener('click' , ()=>{
    if(number2 != ''){
        caucular(number1 ,number2 ,operacao)
    }
    operacao = "div"
    uptela(1)
})
igual.addEventListener('click' , ()=>{
    if(number2 != ''){
        caucular(number1 ,number2 ,operacao)
    }
    operacao = "add"
    uptela(1)
    // number1 = '0'
})


function caucular(n1 ,n2 ,op){
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    switch(op){
        case "add":
            number1 = String(n1 + n2)
            number2 = ""
            
            break
        case "men":
            number1 = String(n1 - n2)
            number2 = ""
            break
        case "mult":
            number1 = String(n1 * n2)
            number2 = ""
            break
        case "div":
            number1 = String(n1 / n2)
            number2 = ""
            break

    }
}