"use strict";
{
    //*_______________________Destructuring__________________________
    //!          Ojbect Destructuring
    const user = {
        id: 1,
        name: {
            firstName: 'John',
            middleName: 'Smith',
            lastName: 'Doe',
        },
        contactNo: '1234567890',
        address: "USA",
    };
    const { name: { middleName: midName }, contactNo: poneNo, } = user;
    //!          Array Destructuring
    const myArray = ["John", "Doe", "Smith", "Jahid", "Khandakar"];
    const [, , bestFriend, ...rest] = myArray;
    console.log(myArray),
        console.log(bestFriend); //Smith
    console.log(rest); //["Jahid", "Khandakar"]
}
