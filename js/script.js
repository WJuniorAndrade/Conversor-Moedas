var converter = document.querySelector(".somar");

converter.addEventListener("click", function (event){
    event.preventDefault();

    var valorInput = parseFloat ( document.getElementById("valor").value);
    

    var moedaSelecionada = document.getElementsByName("moedasEstrangeiras");
    
    for (var i = 0; i < moedaSelecionada.length; i++) {

        if (moedaSelecionada[i].checked) {
            var moeda = moedaSelecionada[i].value;
            console.log( "moeda selecionada " + moeda);
            confirmarMoeda(moeda, valorInput);
        }
    }
});

function confirmarMoeda (moeda, valorInput) {

    var euro = document.querySelector("#euro").value
    var dolarAmericano = document.getElementById("dolar-americano").value;
    var dolarCanadiano = document.getElementById("dolar-canadiano").value;
    var dolarAustraliano = document.getElementById("dolar-australiano").value;
    var bitcoin = document.getElementById("bitcoin").value;
    var ieneJapones = document.getElementById("iene-japones").value;

    var painelConversor = document.getElementById("painelConversor");

    if (moeda == euro) {
        converterEuro ( painelConversor, valorInput );
    }

    if (moeda == dolarAmericano) {
        converterDolarAmericano ( painelConversor, valorInput );
    }

    if (moeda == dolarCanadiano) {
        converterDolarCanadiano (painelConversor, valorInput) ;
    }

    if (moeda == dolarAustraliano) {
        converterDolarAustraliano (painelConversor, valorInput);
    }

    if (moeda == ieneJapones) {
        converterIeneJapones ( painelConversor, valorInput );
    }
    
    if (moeda == bitcoin) {
        converterBtiCoin ( painelConversor, valorInput );
    }
}