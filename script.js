let meterUser = prompt('chilometri percorsi?')
let etaUser = prompt('eta passeggero?')



if (etaUser <= 17) {
    let meterEuro = meterUser * 0.21;
    let discount = (meterEuro * 20) / 100;
    totEuro = meterEuro - discount;
    totEuro = totEuro.toFixed(2)
    document.getElementById('travel').innerHTML = totEuro

} else if (etaUser >= 65) {
    let meterEuro = meterUser * 0.21;
    let discountMag = (meterEuro * 40) / 100;
    totEuro = meterEuro - discountMag;
    totEuro = totEuro.toFixed(2)
    document.getElementById('travel').innerHTML = totEuro
} else {
    let meterEuro = meterUser * 0.21;
    document.getElementById('travel').innerHTML = meterEuro
}
