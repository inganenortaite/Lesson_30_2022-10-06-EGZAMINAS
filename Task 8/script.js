/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
    this.sum = function(num1, num2) {
        return num1 + num2;
    }

    this.substraction = function(num1, num2){
        return num1 - num2;
    }

    this.multiplication = function(num1, num2){
        return num1 * num2;
    }

    this.division = function(num1, num2){
        return num1 / num2;
    }
}

let calc = new Calculator();
console.log(calc.sum(2, 5));
console.log(calc.substraction(15, 5));
console.log(calc.multiplication(162, 5));
console.log(calc.division(800, 10));
