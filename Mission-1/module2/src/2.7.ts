//!_______________________________________________________________________________
//*______________Constraints Using KeyOf______________
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = "bike"|"car"|"ship"; //string literal union
    type Owner2 = keyof Vehicle; 


    //*______________Function using genecric and keyof______________

    const user= {
        name: "John",
        age: 30,
        email: "john@gmail.com",
    }
    const bike = {
        bike: "Yamaha",
        car: "BMW",
        ship: "Titanic"
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key];
    }

    const result1 = getPropertyValue(user, "name");//John
    const result2 = getPropertyValue(bike, "car");// BMW




//!_______________________________________________________________________________