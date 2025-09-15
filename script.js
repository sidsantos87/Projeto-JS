const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertSelect = document.querySelector(".convert-select")

const convertValues = async () => {
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-convert-real")
    const currencyValueConverted = document.querySelector(".currency-converted-dollar")

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
    ).then(response => response.json())

    const dollarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GPBBRL.high
    const bitToday = data.BTCBRL.high
    const realToday = data.BRLBRL.high

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / dollarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValues / bitToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues / realToday)
    }


    if (convertSelect.value == "real") {
        currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValues)
    }

    if (convertSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = Intl.NumberFormat("en-US", {
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

    if (currencySelect.value === convertSelect.value) {

        let currencyFormat;
        let locale;

        switch (currencySelect.value) {
            case "real":
                locale = "pt-BR";
                currencyFormat = "BRL";
                break;
            case "dolar":
                locale = "en-US";
                currencyFormat = "USD";
                break;
            case "euro":
                locale = "de-DE";
                currencyFormat = "EUR";
                break;
            case "libra":
                locale = "en-GB";
                currencyFormat = "GBP";
                break;
            case "bitcoin":
                locale = "en";
                currencyFormat = "BTC";
                break;
        }

        currencyValueConverted.innerHTML = new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currencyFormat
        }).format(inputCurrencyValues).return

    }
}

function changeCurrency() {

    const dolarCurrency = document.getElementById("dolar-currency")
    const currencyImagem = document.querySelector(".currency-imagem")

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


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
convertSelect.addEventListener("change", changeValueToConvert)

