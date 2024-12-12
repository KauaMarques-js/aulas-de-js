function fatorial(x){
   if( x == 1){
    return 1
   }else{
    return x *= fatorial(x-1)//ele ira buscar a mesma função o fatorial q ele fez assim criando um loop
   }
}
console.log(fatorial(5))