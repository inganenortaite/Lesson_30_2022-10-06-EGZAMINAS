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
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const outputElement = document.querySelector('#output');
    const searchInput = document.querySelector('#search').value;

    const kgToLb = (searchInput * 2.2046).toFixed(2);
    const kgToG = (searchInput / 0.001).toFixed(2);
    const kgToOz = (searchInput * 35.274).toFixed(2);

    const h3Element = document.querySelector('.calculated');
    const outputList = document.querySelector('.output-list');

    h3Element.innerHTML = `Your weight is ${searchInput} kg converted to: `;
    outputList.innerHTML = '<li>' + 'Pounds: ' + kgToLb + ' lb' + '<br>' + '</li>' + '<li>' + 'Grams: ' + kgToG + ' g' + '<br>' + '</li>' + '<li>' + 'Ounces: ' + kgToOz + ' oz' + '</li>';

    console.log(`Your weight is ${searchInput} kg converted to ${kgToLb} lb; ${kgToG} g; ${kgToOz} oz.`);

    outputElement.style.background = 'antiquewhite';
    outputElement.style.width = '80%';
    outputElement.style.padding = '20px';
    outputElement.style.margin = 'auto';
    outputList.style.listStyleType = 'none';
    h3Element.style.fontSize = '25px';
    h3Element.style.color = 'rgb(158, 56, 56)';
    h3Element.style.marginBottom = '15px';
})