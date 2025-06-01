//*________________Spread and  Rest Operator__________________
{
    //?Spread Operator
    //?Rest Operator
    //?Destructuring 

    //!            Spread Operator
    const bros1: string[] = ['John', 'Doe', 'Smith'];
    const bros2: string[] = ['Jane', 'Doe', 'Smith'];

    bros1.push(...bros2);
    console.log(bros1); // ['John', 'Doe', 'Smith', 'Jane', 'Doe', 'Smith']


    const obj1 = { name: 'John', age: 30 };
    const obj2 = { city: 'New York', country: 'USA' };

    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj); // { name: 'John', age: 30, city: 'New York', country: 'USA' }

    //!            Rest Operator
    const greetFriends = (
        friend1:string, 
        friend2:string, 
        friend3:string)=>{
            console.log(`Hello ${friend1}, ${friend2}, ${friend3}`);
        }

    greetFriends('John', 'Doe', 'Smith'); //Hello John, Doe, Smith

    const greetAllFriends = (
        ...friends:string[])=>{
            console.log(`Hello ${friends}`);
            
            friends.forEach((frnd:string)=>{
                console.log(`Hello ${frnd}`);
            });
        }
    greetAllFriends('John', 'Doe', 'Smith'); //Hello John, Doe, Smith


    }