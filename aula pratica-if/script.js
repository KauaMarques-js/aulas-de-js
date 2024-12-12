let msg = document.querySelector("#msg");
let img = document.querySelector("#img");
let hora = new Date();
let HoraAtual = hora.getHours();

if (HoraAtual < 12 && HoraAtual >= 6) {
  msg.innerHTML = `Bom dia! São ${HoraAtual} horas`;
} else if (HoraAtual >= 12 && HoraAtual < 18) {
  msg.innerHTML = `Boa Tarde! São ${HoraAtual} horas`;
  document.body.style.backgroundColor = "#CD853F";
  img.src = "image/tarde.jpg";
} else if (HoraAtual >= 18) {
  msg.innerHTML = `Boa Noite! São ${HoraAtual} horas`;
  document.body.style.backgroundColor = "#000080";
  img.src = "image/noite.jpg";
} else if (HoraAtual < 6 && HoraAtual >= 1) {
  msg.innerHTML = `Boa Madrugada! São ${HoraAtual} Horas`;
  document.body.style.backgroundColor = "#191970";
  img.src = "image/madrugada.jpg";
} else {
  msg.innerHTML = `Boa Meia Noite!`;
  document.body.style.backgroundColor = "#1C1C1C";
  img.src = "image/noite.jpg";
}
