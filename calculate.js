function calculate() {

    var length = document.getElementsByClassName("length");
    var width = document.getElementsByClassName("width");
    var thickness = document.getElementsByClassName("thickness");
    var unitPrice = document.getElementsByClassName("unitprice");
    var valLength = [];
    var valWidth = [];
    var valThick = [];
    var volume = 0;
    var price = 0;

    for (var i = 0; i < length.length; i++) {
        valLength.push((length[i].value));
        valWidth.push((width[i].value));
        valThick.push((thickness[i].value));
        volume += (valLength[i] * valWidth[i] * valThick[i])
    }
    price = volume*(unitPrice[0].value);

    document.getElementById("volume").innerHTML = volume.toFixed(1) + " m3";
    document.getElementById("price").innerHTML = " RM " + price.toFixed();

};
