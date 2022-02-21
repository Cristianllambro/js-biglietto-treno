let meterUser = prompt('chilometri percorsi?')
let etaUser = prompt('eta passeggero?')



if (etaUser <= 17) {
    let meterEuro = meterUser * 0.21;
    let discount = meterEuro * 20 % 100;
    document.getElementById('travel').innerHTML = discount
}
