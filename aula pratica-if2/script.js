function verificar() {
  let AnoDeNascimeto = document.getElementById("AnodeNasc");
  let AnoNasc = Number(AnoDeNascimeto.value);
  let data = new Date();
  let AnoAtual = data.getFullYear();
  const idade = AnoAtual - AnoNasc;
  let res = document.querySelector("#res");

  if (AnoNasc.length == 0 || AnoNasc > AnoAtual) {
    alert("erro");
  } else {
    let fsex = document.getElementsByName("radsex");
    let genero = "";
    let img = document.createElement("img"); //cria imagem dinamicamente
    img.setAttribute("id", "foto"); //atribui um id para ela (opcional, para mostrar a funcionabilidade)
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebe-m.jpg"); //atribui o "src" q seria o caminho da foto para o caminho dela
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "jovem-m.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "adulto-m.jpg");
      } else {
        //idoso
        img.setAttribute("src", "homem-idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebe-f.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "jovem-f.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "adulta-f.jpg");
      } else {
        //idoso
        img.setAttribute("src", "idosa-m.jpg");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
