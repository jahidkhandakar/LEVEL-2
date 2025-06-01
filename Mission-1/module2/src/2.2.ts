{
    //!______________________________________________________________________

    //*    Object and Interface 

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }


    type UserWithRole1 = User1 & {role: string};

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1 : UserWithRole1 = {
        name : "John",
        age : 30,
        role : "Admin"
    };

    const user2 : UserWithRole2 = {
        name : "John",
        age : 30,
        role : "Admin"
    }


    //*  js -> object,  array -> object,  function -> object

    //? array with interface

    type roll1 = number[];

    interface roll2 {
        [index: number]: number;
    }


    const rollNumber1: roll1 = [1,2,3,4,5];
    const rollNumber2: roll2 = [1,2,3,4,5];



    //? function with interface

    type Add1 = (num1: number, num2: number) => number;
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add1 : Add1 = (num1, num2) => num1 + num2;
    const add2 : Add2 = (num1, num2) => num1 + num2;

    console.log(add1(1,2));
    console.log(add2(5,6));





    //!______________________________________________________________________
}