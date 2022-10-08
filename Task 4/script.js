/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(response => response.json())
    .then(cars => {
        console.log(cars);

        for (let i = 0; i < cars.length; i++) {
            let car = cars[i];
            console.log(car.brand);
            console.log(car.models);

            let outputElement = document.querySelector('#output');

            let cardBrand = document.querySelector('.card');
            cardBrand.innerHTML += '<div>' + car.brand + '</div>';

            let cardModels = document.querySelector('.card');
            cardModels.innerHTML += '<div>' + car.models + '</div>';

            outputElement.style.background = 'darkkhaki';
            outputElement.style.width = '40%';
            outputElement.style.padding = '20px';

        }
    })    

