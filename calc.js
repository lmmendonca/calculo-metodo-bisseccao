function input(x5, x4, x3, x2 ,x1, i){
    x1 = parseFloat(x1.replace("x", i) + "");
    x2 = parseFloat(x2.replace("x", i) + "");
    x3 = parseFloat(x3.replace("x", i) + "");
    x4 = parseFloat(x4.replace("x", i) + "");
    x5 = parseFloat(x5.replace("x", i) + "");
    return parseFloat(x5 + x4 + x3 + x2 + x1);
}

function teste (x5 , x4 , x3 , x2 , x1){
    var listresult = [];
    for (i = -100; i <= 100; i++ ){
        listresult.push(input(x5 , x4 , x3 , x2 , x1, i));
    }
    return listresult;
} 
teste("-3.72*x", "+5.321*x", "-10.91*x", "-5.2*x", "-7*x");