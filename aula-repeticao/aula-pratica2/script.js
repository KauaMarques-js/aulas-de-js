function gerar() {
  let numero = document.querySelector("#num-X");
  let tabuada1 = document.querySelector("#tabuada");

  let num = Number(numero.value);
  if (num == 0) {
    alert("[ERRO] INSIRA UM NUMERO");
  } else {
    tabuada1.innerHTML = ''
    for (let n = 1; n <= 10; n++) {
      let item = document.createElement("option");//ele vai criando a option quando true
      item.text += ` ${num} X ${n} = ${num * n} `;//nao precisa trazer o resultado apenas multiplique os valores
      tabuada1.appendChild(item);
    }
  }
}
