fetch(
  "https://api.currencyfreaks.com/latest?apikey=f030cd26ef124bcfad3c05931f597426"
)
  .then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);

    // console.log(currency.rates);
    console.log(currency.rates["EGP"]);
    console.log(currency.rates["SAR"]);
  });
