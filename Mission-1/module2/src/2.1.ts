{//!_________________________________________________________________________

    //* ___________________Type Assertion___________________
    let anything : any ;
    
    anything = "Hello World";
    anything = 10;
    
    //(anything as string)
    (anything as number).toString();
    
    
    const kgToGm = (value: string|number): string|number|undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is: ${convertedValue}`
        } else if (typeof value === "number") {
            return value * 1000;
        } else {
            return undefined;
        }
    }
    
    const result1 = kgToGm(5) as number;
    const result2 = kgToGm("5") as string;
    
    console.log(result1," ", result2); // 5000
    
    
    
    //* Error Handling
    
    type CustomError = {
        message: string;
    }
    
    try{
    
    }catch(error){
        console.log((error as CustomError).message);
    }

//!_____________________________________________________________________________
}