function Rodizio(){
    var dia = document.getElementById("dia").value;
    var placa = document.getElementById("placa").value;
    var autom = document.getElementById("autom").value;
    var local = document.getElementById("local").value;
    var div = document.getElementById("resultado");

    if((placa == 1) && (dia != 1) && (autom == 1 || autom == 2) && (local == 1)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    } else if((placa == 2) && (dia != 2) && (autom == 1 || autom == 2) && (local == 1)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    }else if((placa == 3) && (dia != 3) && (autom == 1 || autom == 2) && (local == 1)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    }else if((placa == 4) && (dia != 4) && (autom == 1 || autom == 2) && (local == 1)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    }else if((placa == 5) && (dia != 5) && (autom == 1 || autom == 2) && (local == 1)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    }
    else if((local == 2) && (autom == 2)){
        div.innerHTML = "✔ Você poderá circular com seu veículo!";
    }
    else{
        div.innerHTML = "🚫 Você não poderá circular com seu veículo!";
    }
}