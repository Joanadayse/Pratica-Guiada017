//imprima no console "Ola mundo " e chame a função
function imprimirOla (){
    console.log ("Ola mundo")
}
imprimirOla()

//crie uma função que receba por parametro um nome 
function imprimirNome (nome){
    console.log (`Ola ${nome}`)
}

imprimirNome("joana")
imprimirNome("matheus")
imprimirNome("naianna")

//refaça o exercicio com sintaxe de expressão de função
const imprimirNome = function(nome){
    console.log(`ola ${nome}`)
}
imprimirNome("joana")

//crie um função que receba dois numeros e retorne a soma deles e guarde o retorno dessa função em uma variavel
function imprimirNun (n1,n2){
    return n1+n2
}
const retorno = imprimirNun (2,5)
console.log (retorno)

refarça o exercicio com Array function
const imprimirNun=(n1,n2) =>{
    return n1+n2
}
const retorno = imprimirNun (2,5)
console.log (retorno)

// crie uma function que receba uma array de numeros e retorne um novo array apenas com primeiro e o ultimo
const arrayNum =(array)=>{
    const novoArray=[]
    
    novoArray.push([0], array [array.length -1])
    return novoArray 

}
const retornoArray = arrayNum([2,3,4,5,6,7,8,9])
console.log(retornoArray)

// crie uma function que receba um array de numeros e retorne um novo array apenas com numeros pares.
function retornaPares (array){
    const novoArray=[]
        for (let valor of array){
            if (valor%2===0){
                novoArray.push(valor)
            }
        }
    return novoArray

}
console.log(retornaPares([1,2,3,4,5,6,7,8,9]))

//uma function que receba uma array de numeros, retorne um array com dois numeros ,e divida o primeiro e o ultimo por dois, chame a função com dois arrays diferentes

function arrayNum (array) {
    const novoArray=[]
    novoArray.push(array[0]/2,array.length -1/2)
    return novoArray

}

console.log(arrayNum([2,4,6,8,20]))
console.log(arrayNum([6,8,10,12,24]))