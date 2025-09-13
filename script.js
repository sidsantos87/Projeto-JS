const convertButton = document.querySelector(".convert-button") // Classe do botão para converter as moedas.
const currencySelect = document.querySelector(".currency-select") // Classe da opção para converter as moedas.
const convertSelect = document.querySelector(".convert-select")

function convertValues /*= async =>*/  () {// Função criada para converter as moedas.  
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-convert-real",) // Classe para converter o valor do real.
    const currencyValueConverted = document.querySelector(".currency-converted-dollar",) // Classe para converter o valor de outras moedas.

/*    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
            ).them(response => response.json()) */

    const dollarToday = /*data.USDBRL.high*/5.9
    const euroToday = /*data.EURBRL.high*/6.5
    const libraToday = /*data.GPBBRL.high*/7.2
    const bitToday = /*data.BTCBRL.high*/100.000
    const realToday = /*data.BRLBRL.high*/1.0

    if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / dollarToday) // Enqunanto se formata, observar que
        // as aplicações não ficam nas cores padrões, neste momento ROXAS, até serem aplicadas permanecendo 
        // em um tom cinza.
    }

    if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / euroToday)
    }

    if (currencySelect.value == "libra") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB",
        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcoin") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValues / bitToday)
    }

    if (currencySelect.value == "real") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues / realToday)
    }


    if (convertSelect.value == "real") {
        currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-BR", /*"en-US", "de-DE","en-GB", "BTC", */{
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues)
    }

    if (convertSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = Intl.NumberFormat("en-US", /*"de-DE","en-GB", "BTC", */{
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues)
    }

    if (convertSelect.value == "euro") {
        currencyValueToConvert.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues)
    }


    if (convertSelect.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValues)
    }

    if (convertSelect.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValues)
    }

    /*if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / dollarToday) // Enqunanto se formata, observar que
        // as aplicações não ficam nas cores padrões, neste momento ROXAS, até serem aplicadas permanecendo 
        // em um tom cinza.
    }

    if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / euroToday)
    }

    if (currencySelect.value == "libra") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB",
        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcoin") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValues / bitToday)
    }

    if (currencySelect.value == "real") { // Se o select estiver selecionado o valor de dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues / realToday)
}*/

if (currencySelect.value === convertSelect.value) { // Se o select estiver selecionado o valor de dolar, entre aqui.
    
    let currencyFormat;
    let locale;
    
    switch (currencySelect.value){
        case "real":
            locale = "pt-BR";
            currencyFormat= "BRL";
            break;
            case "dolar":
                locale = "en-US";
                currencyFormat= "USD";
                break;
                case "euro":
                    locale = "de-DE";
                    currencyFormat= "EUR";
                    break;
                    case "libra":
                        locale = "en-GB";
                        currencyFormat= "GBP";
                        break;
                        case "bitcoin":
                            locale = "en";
                            currencyFormat= "BTC";
                            break;
    }
    
    currencyValueConverted.innerHTML= new Intl.NumberFormat(locale,{
        style:"currency",
        currency: "currencyFormat"
    }).format(inputCurrencyValues).return

}
}

function changeCurrency() {

    const dolarCurrency = document.getElementById("dolar-currency")// Aqui se trata de um 'ID' da label do dólar americano.
    const currencyImagem = document.querySelector(".currency-imagem") // Imagem dos USA/EURO

    if (currencySelect.value == "dolar") {
        dolarCurrency.innerHTML = "Dólar americano"
        currencyImagem.src = "./assets/eua.png"
    }
    if (currencySelect.value == "euro") {
        dolarCurrency.innerHTML = "Euro"
        currencyImagem.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        dolarCurrency.innerHTML = "Libra"
        currencyImagem.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        dolarCurrency.innerHTML = "Bitcoin"
        currencyImagem.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        dolarCurrency.innerHTML = "Real"
        currencyImagem.src = "./assets/brasil.png"
    }


    convertValues()

}

function changeValueToConvert() {

    const imagemConvert = document.getElementById("imagem-convert")// Aqui se trata de um 'ID' da imagem.
    const labelConvert = document.getElementById("label-convert")

    if (convertSelect.value == "dolar") {
        labelConvert.innerHTML = "Dólar americano"
        imagemConvert.src = "./assets/eua.png"
    }
    if (convertSelect.value == "euro") {
        labelConvert.innerHTML = "Euro"
        imagemConvert.src = "./assets/euro.png"
    }

    if (convertSelect.value == "libra") {
        labelConvert.innerHTML = "Libra"
        imagemConvert.src = "./assets/libra.png"
    }

    if (convertSelect.value == "bitcoin") {
        labelConvert.innerHTML = "Bitcoin"
        imagemConvert.src = "./assets/bitcoin.png"
    }

    if (convertSelect.value == "real") {
        labelConvert.innerHTML = "Real"
        imagemConvert.src = "./assets/brasil.png"
    }

    convertValues()
}

/*function converterMoeda(inputCurrencyValues, currencyValueConverted, currencyValueToConvert) {

    
    // Verifica se as moedas são iguais
    if (currencyValueConverted === currencyValueToConvert) {
        return {
            valorConvertido: currencyValueConverted, // Retorna o valor original
            moeda: currencyValueToConvert // Retorna a moeda original
        };
    }
    
    // Realiza a conversão
    const valorConvertido = inputCurrencyValues;
    return {
        valorConvertido: valorConvertido,
        moeda: currencyValueToConvert // Retorna a moeda de destino
    };
}*/

/*function converterMoeda(inputCurrencyValues, currencyValueConverted, currencyValueToConvert) {
    if (currencyValueToConvert = currencyValueConverted) {
        return inputCurrencyValues; // Retorna o valor original se as moedas forem iguais
    }
    
}*/

convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
convertSelect.addEventListener("change", changeValueToConvert) // Toda essa aoperação é em função do 'button'
// e o clique realizado. Assim, toda ação será realizada por matemática básica. 