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

        const carsList = document.querySelector('#output');

        cars.map((car) => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carsList.append(carItem);

            const brandTitle = document.createElement('h2');
            brandTitle.classList.add('car-brand');
            brandTitle.textContent = car.brand;
            carItem.append(brandTitle);

            const modelList = document.createElement('ul');
            modelList.classList.add('car-models');
            carItem.append(modelList);

            car.models.map((model) => {
                const modelItem = document.createElement('li');
                modelItem.textContent = model;
                modelList.append(modelItem);
            })
        })
    })    

