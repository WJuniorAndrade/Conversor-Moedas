function converterEuro(painelConversor, valorInput) {
    let euro = 5.48;
    let conversao = valorInput / euro; 

    painelConversor.textContent = conversao.toLocaleString ( "de-DE", { style: "currency", currency: "EUR" });

    console.log( `Resutado da convesão ${painelConversor.textContent = conversao.toLocaleString ( "de-DE" , {style: "currency" , currency: "EUR" })}` );


}

function converterDolarAmericano(painelConversor, valorInput) {
    let dolarAmericano = 5.03;
    let conversao = valorInput / dolarAmericano; 

    painelConversor.textContent = conversao.toLocaleString ( "en-US", {style: "currency" , currency: "USD" }) ;

    console.log( `Resutado da convesão ${painelConversor.textContent = conversao.toLocaleString ( "en-US" , {style: "currency" , currency: "USD" })}` );

}







/* americano 5,03
canadiano 3,73
australiano 3,37
esterlina 6,26
japones 0,038 */