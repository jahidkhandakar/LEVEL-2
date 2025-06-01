"use strict";
{
    //*___________________Functions_____________________
    //Learning Function
    //Normal Function
    //Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3); //5
    //Arrow Function
    const addArrow = (num1, num2) => num1 + num2;
    //*__________________Method_______________________
    //Function inside an object is called method
    const poorUser = {
        name: "Jahid",
        age: 23,
        balance: 1000,
        addBalance(balance) {
            return `My alance is: ${this.balance + balance}`;
        }
    };
    console.log(poorUser.addBalance(1000));
    const arr = [1, 3, 10];
    const arrNew = arr.map((elem) => elem * elem);
}
