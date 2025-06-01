{
//!_______________________________________________________________________

//*      Interface - generic 

    interface Developer<T, X = null>{
        name: string;
        computer: {
            brand: string;
            model : string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }


    type watch = {
        brand: string;
        model: string;
        display: string;
    }
    interface bike {
        brand: string;
        model: string;
        cc: number;
    }


    const developer1: Developer<watch, bike> = {
        name: "John",
        computer: {
            brand: "Apple",
            model: "MacBook Pro",
            releaseYear: 2020,
        },
        smartWatch: {
            brand: "Apple",
            model: "Series 6",
            display: "Always On Retina",
        },
        bike: {
            brand: "Yamaha",
            model: "R15",
            cc: 155,
        },
    }

    const developer2: Developer<watch> = {
        name: "Jane",
        computer: {
            brand: "Dell",
            model: "XPS 13",
            releaseYear: 2021,
        },
        smartWatch: {
            brand: "Samsung",
            model: "Galaxy Watch 4",
            display: "Super AMOLED",
        },
    }



//!_______________________________________________________________________
}