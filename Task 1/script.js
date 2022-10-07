/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.querySelector('#search').value;
    console.dir(searchInput * 2.2046);
    let kgToLb = searchInput * 2.2046;
    let kgToG = searchInput / 0.001;
    let kgToOz = searchInput * 35.274;
    let lbOutput = document.querySelector('#output');
    lbOutput.textContent = `Your weight is converted to ${kgToLb} lb; ${kgToG} g; ${kgToOz} oz`,
    console.log(`Your weight is converted to ${kgToLb} lb; ${kgToG} g; ${kgToOz} oz.`);
})