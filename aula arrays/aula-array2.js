let array = [1,4,6,9,0,4]

/*
for(i = 0; i < array.length; i++){
    console.log(`a posição ${i} tem o valor ${array[i]}`) //ele busca a posicao do array por meio do i no array
}
*/
console.log(`  esta na posicão ${array.indexOf(6)}`)
for(pos in array){
    console.log(array[pos])
}