$(document).ready(function() {
  $("#btn").click(function() {
    $("#test").text(enviar());
  });
});

function resolver_equacao(x5, x4, x3, x2, x1, numero, valor_x) {
  x1 = parseFloat(x1 * Math.pow(valor_x, 1));
  x2 = parseFloat(x2 * Math.pow(valor_x, 2));
  x3 = parseFloat(x3 * Math.pow(valor_x, 3));
  x4 = parseFloat(x4 * Math.pow(valor_x, 4));
  x5 = parseFloat(x5 * Math.pow(valor_x, 5));
  var somatorio_x = x5 + x4 + x3 + x2 + x1;
  somatorio_x += numero;
  return somatorio_x;
}

/**
 * Metodo pega lista com valores
 * da equacao resolvido e acha a raiz
 * @param {lista com valores} listresult
 */
function find_intervalo_raiz(list_valores) {
  listaIntervalo = [];
  sinalResultComparator = Math.sign(list_valores[0].valor);
  indiceA = list_valores[0].indice;
  for (i = 1; i <= list_valores.length; i++) {
    sinalResult = Math.sign(list_valores[i].valor);
    indiceB = list_valores[i].indice;
    if (sinalResultComparator != sinalResult) {
      listaIntervalo.push(indiceA, indiceB);
      return listaIntervalo;
    }
    sinalResultComparator = sinalResult;
    indiceA = list_valores[i].indice;
  }
  return listaIntervalo;
}

function resolver_bisseca(intervalo1, intervalo2, expo) {
  var epslon = Math.pow(10, expo);
  var Maisproximo = false;
  var rr = 0;
  var k = 0;
  while (Maisproximo == false) {
    rr = in1 = (intervalo1 + intervalo2) / 2;
    if (k % 2 == 0) {
      intervalo2 = in1;
    } else {
      intervalo1 = in1;
    }
    var ss = intervalo1 - intervalo2;
    if (ss < 0) {
      ss = ss * -1;
    }
    if (ss > epslon) {
      Maisproximo = false;
    } else {
      Maisproximo = true;
    }
    k = k + 1;
  }
  return rr;
}

function main(x5, x4, x3, x2, x1, numero, eps) {
  var list_valores_equacao = [];
  for (i = -5; i <= 4; i++) {
    var valor_equacao = {
      indice: i,
      valor: resolver_equacao(x5, x4, x3, x2, x1, numero, i)
    };
    list_valores_equacao.push(valor_equacao);
  }

  var lista_intervalo = find_intervalo_raiz(list_valores_equacao);
  var result_bisscao = resolver_bisseca(
    lista_intervalo[0],
    lista_intervalo[1],
    eps
  );

  var objectResult = {
    Valores: list_valores_equacao,
    Intervalo: lista_intervalo,
    Resultado: result_bisscao
  };
  
  return objectResult;
}

function enviar() {
  x5 = parseInt(document.getElementById("x5").value);
  x4 = parseInt(document.getElementById("x4").value);
  x3 = parseInt(document.getElementById("x3").value);
  x2 = parseInt(document.getElementById("x2").value);
  x1 = parseInt(document.getElementById("x1").value);
  number = parseInt(document.getElementById("number").value);
  epsilon = parseInt(document.getElementById("epsilon").value);
  result = main(x5, x4, x3, x2, x1, number, epsilon);
  return JSON.stringify(result);
}

function convetjsonToHTML(){
  var resultadoJson = enviar();
  for (var j = 0; j < resultadoJson.length; j++) {
      var table = document.getElementById("myTable");
      var row = table.insertRow(j);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);  
      cell1.innerHTML =  Object.values(resultadoJson),
      cell2.innerHTML = student.rank,
      cell3.innerHTML = student.stuclass;
  }
}

// main(1,1,1,1,1,1,1);
