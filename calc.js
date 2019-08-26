function resolver_equacao(x5, x4, x3, x2, x1, i) {
    x1 = parseFloat(x1 * Math.pow(i, 1));
    x2 = parseFloat(x2 * Math.pow(i, 2));
    x3 = parseFloat(x3 * Math.pow(i, 3));
    x4 = parseFloat(x4 * Math.pow(i, 4));
    x5 = parseFloat(x5 * Math.pow(i, 5));
    return parseFloat(x5 + x4 + x3 + x2 + x1);
}

function gera_intervalo(listresult) {
    listaIntervalo = [];
    sinalResultComparator = Math.sign(listresult[0]);
    for (i = 1; i <= listresult.length(); i++) {
        sinalResult = Math.abs(listresult[i]);
        if (sinalResultComparator != sinalResult) {
            listaIntervalo.push([sinalResultComparator, sinalResult]);
            sinalResultComparator =  sinalResult;
        }
    }
    return listaIntervalo;
    
}

function main(x5, x4, x3, x2, x1) {
    var listresult = [];
    for (i = -5; i <= 5; i++) {
        listresult.push(resolver_equacao(x5, x4, x3, x2, x1, i));
    }
    listaIntervalo = gera_intervalo(listresult);
    return listresult;
}


main("-3.72", "+5.321", "-10.91", "-5.2", "-7");