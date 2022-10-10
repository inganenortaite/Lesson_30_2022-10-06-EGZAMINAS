/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada grąžins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive = function() {
        if (this.budget > 100_000_000) {
            return true;
        } else {
            return false;
        }
    }
}

let movieTitanic = new Movie('Titanic', 'James Cameron', 200_000_000);
let movieBounty = new Movie('The Bounty Hunter', 'Andy Tennant', 40_000_000);

console.log(movieTitanic.wasExpensive());
console.log(movieBounty.wasExpensive());


