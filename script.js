let num = [5, 8, 7, 6, 4]

console.log(`${num.length}`)
num.push(9) //adiociona um valor no final
console.log(`${num.length}`) //mostra o tamanho do vetor
console.log(`${num}`)
num.sort() //ordena o vetor em ordem crescente
console.log(`${num}`)

for (let pos = 0; pos < num.length; pos++){ //percorre o vetor e mostra na tela
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}

for (let pos in num) { //for otimizado para vetores e objetos, tem a mesma função de percorrer
    console.log(`${num[pos]}`) //se lê para cada posição em num mostra o num pos
} 

let pos = num.indexOf() //localiza o valor dentro do vetor e mostra a posição, caso não tenha o valor no vetor o valor retorna -1
console.log(`O valor 5 está na posição ${pos}`)
