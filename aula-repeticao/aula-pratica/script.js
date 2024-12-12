function contar() {
  let num1 = document.querySelector("#num-1");
  let num2 = document.querySelector("#num-2");
  let passo = document.querySelector("#passo-num");
  let Inicio = Number(num1.value);
  let Fim = Number(num2.value);
  let Passo = Number(passo.value);
  let res = document.querySelector("#resposta");
  if (Inicio == 0 || Fim == 0 || Passo == 0) {
    alert("[ERRO]");
  } else if (Inicio > Fim) {
    res.innerHTML = "contando:";
    for (let c = Inicio; c >= Fim; c -= Passo) {
      res.innerHTML += ` ${c}...`;
    }
  } else {
    res.innerHTML = "contando:";
    for (let c = Inicio; c <= Fim; c += Passo) {
      res.innerHTML += ` ${c}...`;
    }
  }
}
