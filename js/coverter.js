function converterDolarAmericano(painelConversor, valorInput) {
    var dolarAmericano = 5.03;
    var conversao = valorInput / dolarAmericano;

    painelConversor.textContent = conversao.toLocaleString("en-US", { style: "currency", currency: "USD" });

    console.log(`Resutado da convesão ${conversao.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
}

function converterDolarCanadiano(painelConversor, valorInput) {
    var dolarCanadiano = 3.73;
    var conversao = valorInput / dolarCanadiano;

    painelConversor.textContent = conversao.toLocaleString("fr-CA", { style: "currency", currency: "CAD" });

    console.log(`Resutado da convesão ${conversao.toLocaleString("fr-CA", { style: "currency", currency: "CAD" })}`);

}

function converterDolarAustraliano(painelConversor, valorInput) {
    var dolarAustraliano = 3.37;
    var conversao = valorInput / dolarAustraliano;

    painelConversor.textContent = conversao.toLocaleString("en-AU", { style: "currency", currency: "AUD" });

    console.log(`Resutado da convesão ${conversao.toLocaleString("en-AU", { style: "currency", currency: "AUD" })}`);

}


function converterIeneJapones(painelConversor, valorInput) {
    var dolarIeneJapones = 0.038;
    var conversao = valorInput / dolarIeneJapones;

    painelConversor.textContent = conversao.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

    console.log(`Resutado da convesão ${conversao.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })}`);

}

function converterEuro(painelConversor, valorInput) {
    var euro = 5.48;
    var conversao = valorInput / euro;

    painelConversor.textContent = conversao.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

    console.log(`Resutado da convesão ${conversao.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}`);
} 


function converterBtiCoin(painelConversor, valorInput) {
    var BTC = 138271.49;
    var conversao = valorInput * BTC;
    painelConversor.textContent = conversao.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    console.log(`Resutado da convesão ${conversao}`);

}