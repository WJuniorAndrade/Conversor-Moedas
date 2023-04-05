var converter = document.querySelector(".somar");

converter.addEventListener("click", function (event){
    event.preventDefault()

    var moedaSelecionada = document.getElementsByName("moedasEstrangeiras")
    
    for (var i = 0; i < moedaSelecionada.length; i++) {

        if (moedaSelecionada[i].checked) {
            var moeda = moedaSelecionada[i].value;
            console.log(moeda);
            confirmarMoeda(moeda)
        }
    }
});

function confirmarMoeda (moeda) {

    var euro = document.querySelector("#euro").value
    var dolarAmericano = document.getElementById("dolar-americano").value
    var dolarCanadiano = document.getElementById("dolar-canadiano").value
    var dolarAustraliano = document.getElementById("dolar-australiano").value
    var libraEsterlina = document.getElementById("libra-esterlina").value
    var ieneJapones = document.getElementById("iene-japones").value

    var escrever = document.getElementById("escrever")

    if (moeda == euro) {
        converterEuro(escrever)
    }
    if (moeda == dolarAmericano) {
        converterDolarAmericano(escrever)
    }
    if (moeda == dolarCanadiano) {
        console.log("converter");
    }
    if (moeda == dolarAustraliano) {
        console.log("converter");
    }
    if (moeda == libraEsterlina) {
        console.log("converter");
    }
    if (moeda == ieneJapones) {
        console.log("");
    }
}




function converterEuro(escrever) {
    escrever.textContent = "euro" 
}

function converterDolarAmericano(escrever) {
    escrever.textContent = "Dolar Americano" 
}

















/* var converter = document.querySelector(".converter")


converter.addEventListener("click", function(event){
    event.preventDefault();
    
    /* pega o valor do formulario */
    /* var formulario = document.querySelector(".formulario");
    var valor = parseInt ( document.getElementById("valor").value ); 

    console.log(valor);

    opcaoMoeda(valor)
    console.log( *//* "---------------"); */ 

   /*  var moedas = parseFloat( document.getElementById("moedas").value );
    console.log(moedas);

    opcaoMoeda() */
/* }); */


/* function opcaoMoeda(valor) { */
    /* var moedasEstrangeiras = document.querySelector(".moeda-estrangeira") */
    
/*     for (var i = 0; i < valor.length; i++) {
        var valorEscolhido = valor[i];
        
        console.log(`sua moeda é : ${valorEscolhido}`);
    }

} */



/*     
    var mood = 1000;
    
    console.log(mood.toLocaleString("pt-br", {style: "currency", currency: "BRL"}));
 */