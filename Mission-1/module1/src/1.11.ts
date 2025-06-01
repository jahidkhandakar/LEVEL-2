{
    //*________ternary operator______optional chaining_________nullish coalescing__________*\\

    const age: number = 15;

    const isAdult = age >=18 ? "adult" : "not adult";
    console.log(isAdult); // not adult



    //*null or defined - make decisions

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "Guest";
    console.log(result1);


    type User = {
        name : string,
        address : {
            city : string,
            country : string,
            presentAddress : string,
            permanentAddress? : string,
        }
    }

    const user: User = {
        name : "John",
        address : {
            city : "Dhaka",
            country : "Bangladesh",
            presentAddress : "Mirpur-1",
        }
    }

    const newAddress = user?.address?.permanentAddress ?? "Not Available";

    console.log(newAddress); // Not Available
    console.log({newAddress}); // { permanentAddress: 'Not Available' }


}