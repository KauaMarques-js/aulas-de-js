let num = [5, 8, 9, 3, 2]
num[5] = 4//pega a posição colocada depois da variavel e recebe o valor do =
num.push(7)//adiciona no ultimo o valor entre parenteses 
//num.sort()coloca em ordem crescente
num.length//lê quantas elementos existem na variavel do array
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`Nosso vetor é ${num}`)
console.log(`a primeira posicao do num é ${num[0]}`)
num.sort()
console.log(`Nosso vetor é em ordem crescente ${num}`)
console.log(`a primeira posicao do vetor em ordem crescente é ${num[0]}`)