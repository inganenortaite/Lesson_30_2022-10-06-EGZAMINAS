/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const buttonShowUsers = document.querySelector('#btn');
buttonShowUsers.addEventListener('click', () => {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#message').remove(); 

            let userList = document.querySelector('#output');

            for (let i = 0; i < data.length; i++) {

                let userElement = `<div class="user-item">
                                        <h3 class="login-title">${data[i].login}</h3>
                                        <img class="photo" src="${data[i].avatar_url}">
                                   </div>`
                    
                userList.innerHTML += userElement;
            }
        })   
})


