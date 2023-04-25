var dolarAmericano = document.getElementById("dolar-americano")

dolarAmericano.addEventListener("click", function (event) {
    event.preventDefault();

    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")

    converterDolarAmericano(painelConversor, valorInput)

})


var dolarCanadiano = document.getElementById("dolar-canadiano")

dolarCanadiano.addEventListener("click", function (event) {
    event.preventDefault();

    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")
   
    converterDolarCanadiano(painelConversor, valorInput)

})


var dolarAustraliano = document.getElementById("dolar-australiano")

dolarAustraliano.addEventListener("click", function (event) {
    event.preventDefault();

    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")
    
    converterDolarAustraliano(painelConversor, valorInput)

})



var ieneJapones = document.getElementById("iene-japones")

ieneJapones.addEventListener("click", function (event) {
    event.preventDefault();
    
    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")
    
    converterIeneJapones(painelConversor, valorInput)
    
})



var EuroMoeda = document.getElementById("euro-moeda")

EuroMoeda.addEventListener("click", function (event) {
    event.preventDefault();
    
    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")

    converterEuro(painelConversor, valorInput)

})


var bitcoin = document.getElementById("bitcoin")

bitcoin.addEventListener("click", function (event) {
    event.preventDefault();
    
    var valorInput = parseInt ( document.getElementById("valor").value);
    console.log(valorInput);

    var painelConversor = document.querySelector("#painelConversor")

    converterBtiCoin(painelConversor, valorInput)

})