let lista = document.querySelector("#selectNum");
let res = document.querySelector("div#resposta");
let num = document.querySelector("#num1");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let option = document.createElement("option");
    option.text = `valor adicionado: ${Number(num.value)}`;
    lista.appendChild(option);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou ja encontrado na lista");
  }
}
function finalizar() {
  let puxar = valores.length;
  let maior = valores[0];
  let menor = valores[0];
  for (let pos in valores) {
    if (valores[pos] > maior) maior = valores[pos];
    if (valores[pos] < menor) menor = valores[pos];
  }
  res.innerHTML = "";
  res.innerHTML += `O maior valor foi ${maior} </br>`;
  res.innerHTML += `O menor valor foi ${menor}</br>`;
  res.innerHTML += `A lista tem ${puxar} elementos</br>`;
  if (puxar > 1) {
    let soma = valores.reduce(function (acumulador, valorAtual) {
      return acumulador + valorAtual;
    }, 0);

    res.innerHTML += `a soma dos valores é ${soma}</br>`;
    res.innerHTML += `a media dos elementos é ${soma / puxar} `;
  } else {
    res.innerHTML += `a soma dos valores é ${valores}`;
  }
}
