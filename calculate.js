function calculate() {
    //kasaran
    var lengthKas = document.getElementsByClassName("lengthKas");
    var widthKas = document.getElementsByClassName("widthKas");
    var thicknessKas = document.getElementsByClassName("thicknessKas");
    var unitPriceKas = document.getElementsByClassName("unitpriceKas");


    var valLengthKas = [];
    var valWidthKas = [];
    var valThickKas = [];
    var volumeKas = 0;
    var priceKas = 0;
    var weightKas = 0;



    for (var i = 0; i < lengthKas.length; i++) {
        valLengthKas.push((lengthKas[i].value));
        valWidthKas.push((widthKas[i].value));
        valThickKas.push((thicknessKas[i].value));
        volumeKas += (valLengthKas[i] * valWidthKas[i] * valThickKas[i])
    }
    priceKas = volumeKas * (unitPriceKas[0].value);
    weightKas = volumeKas * 2;

    //Asphalt

    var lengthAsp = document.getElementsByClassName("lengthAsp");
    var widthAsp = document.getElementsByClassName("widthAsp");
    var thicknessAsp = document.getElementsByClassName("thicknessAsp");
    var unitPriceAsp = document.getElementsByClassName("unitpriceAsp");

    var valLengthAsp = [];
    var valWidthAsp = [];
    var valThickAsp = [];
    var volumeAsp = 0;
    var priceAsp = 0;
    var weightAsp = 0;


    for (var i = 0; i < lengthAsp.length; i++) {
        valLengthAsp.push((lengthAsp[i].value));
        valWidthAsp.push((widthAsp[i].value));
        valThickAsp.push((thicknessAsp[i].value));
        volumeAsp += (valLengthAsp[i] * valWidthAsp[i] * valThickAsp[i])
    }
    priceAsp = volumeAsp * (unitPriceAsp[0].value);
    var totalprice = priceKas + priceAsp;

    document.getElementById("volumeKas").innerHTML = volumeKas.toFixed(1) + " m3";
    document.getElementById("weightKas").innerHTML = weightKas.toFixed(1) + " ton";
    document.getElementById("volumeAsp").innerHTML = volumeAsp.toFixed(1) + " m3";
    document.getElementById("weightAsp").innerHTML = weightAsp.toFixed(1) + " ton";
    document.getElementById("price").innerHTML = " RM " + totalprice.toFixed();

};
