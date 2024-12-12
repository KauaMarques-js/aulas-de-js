let agora = new Date();
let horas = agora.getHours();
console.log(`Agora são Exatamente ${horas} Horas`)
if(horas < 12 && horas >= 6){
    console.log('Bom dia!')
}else if(horas == 0){
    console.log(`Boa Meia-Noite`)
}else if(horas < 18 && horas >= 12){
    console.log('Boa Tarde')
}else if(horas >= 18){
    console.log('Boa Noite')
}else{
    console.log('Boa Madrugada')
}