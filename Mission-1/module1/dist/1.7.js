"use strict";
//*________________Spread and  Rest Operator__________________
{
    //?Spread Operator
    //?Rest Operator
    //?Destructuring 
    //!            Spread Operator
    const bros1 = ['John', 'Doe', 'Smith'];
    const bros2 = ['Jane', 'Doe', 'Smith'];
    bros1.push(...bros2);
    console.log(bros1); // ['John', 'Doe', 'Smith', 'Jane', 'Doe', 'Smith']
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { city: 'New York', country: 'USA' };
    const mergedObj = Object.assign(Object.assign({}, obj1), obj2);
    console.log(mergedObj); // { name: 'John', age: 30, city: 'New York', country: 'USA' }
    //!            Rest Operator
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
    };
    greetFriends('John', 'Doe', 'Smith'); //Hello John, Doe, Smith
    const greetAllFriends = (...friends) => {
        console.log(`Hello ${friends}`);
        friends.forEach((frnd) => {
            console.log(`Hello ${frnd}`);
        });
    };
    greetAllFriends('John', 'Doe', 'Smith'); //Hello John, Doe, Smith
}
