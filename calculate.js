function myFunction() {
    window.print();
}

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
    priceKas = volumeKas *1* (unitPriceKas[0].value);
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

    //Harga Bahan cal
    priceAsp = volumeAsp * (unitPriceAsp[0].value);
    var priceBahan = priceKas + priceAsp;

    // senarai harga
    var priceBuruh = document.getElementsByClassName("priceBuruh");
    var pricePerangkut = document.getElementsByClassName("pricePerangkut");
    var priceLain = document.getElementsByClassName("priceLain");
    //total price
    var priceJumlah = priceBahan+1* (priceBuruh[0].value)+1*(pricePerangkut[0].value)+1*(priceLain[0].value);
    //show result
    document.getElementById("volumeKas").innerHTML = volumeKas.toFixed(1) + " m3";
    document.getElementById("weightKas").innerHTML = weightKas.toFixed(1) + " ton";
    document.getElementById("volumeAsp").innerHTML = volumeAsp.toFixed(1) + " m3";
    document.getElementById("weightAsp").innerHTML = weightAsp.toFixed(1) + " ton";
    document.getElementById("priceBahan").innerHTML = " RM " + priceBahan.toFixed();
    document.getElementById("priceJumlah").innerHTML = " RM " + priceJumlah.toFixed();

};

