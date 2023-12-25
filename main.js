var butaoGerar = document.getElementById("butaoGerar");

butaoGerar.addEventListener("click", function (event) {
  event.preventDefault();
  funcaoGerar();
});

function funcaoGerar() {
  var numeroTabuada = document.getElementById("numeroTabuada").value.trim();
  var numeroT = 0;
  var resultadoDiv = document.getElementById("resultadoDiv");
  var resultado = document.getElementById("resultado");
  var resultadoTabuada = document.getElementById("resultadoTabuada");
  var tabuada = "";

  if (numeroTabuada === "") {
    alert("Por favor, digite um número!");
    resultado.innerHTML = "Por favor, digite um número!";
    resultadoDiv.style.background = "#E82D4D";
  } else if (!isNaN(numeroTabuada)) {
    while (numeroT <= 10) {
      tabuada += `${numeroTabuada} X ${numeroT} = ${numeroTabuada * numeroT}\n`;
      numeroT++;
    }
    resultadoTabuada.value = tabuada;
    resultado.innerHTML = `Tabuada do número ${numeroTabuada} gerada!`;
    resultadoDiv.style.background = "#2EFFB7";
  } else {
    alert("Por favor, digite um número válido!");
    resultado.innerHTML = "Por favor, digite um número válido!";
    resultadoDiv.style.background = "#E82D4D";
  }
}
