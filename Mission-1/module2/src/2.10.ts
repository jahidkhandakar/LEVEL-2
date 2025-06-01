{
    //!___________________________________________________________________

    //mapped types
    const arrayOfNumbers: number[] = [1, 2, 3];

    const arrayOfStrings: string[] = arrayOfNumbers.map((number) => number.toString());

    console.log(arrayOfStrings);


    type AreaNumber = {
        height : number;
        width : number;
    };

    type AreaString1 = {
        [key in keyof AreaNumber] : string;
    };
    
    type AreaString2<T> = {
        [key in keyof T] : T[key];
    };

    const area: AreaString2<{height: string, width: number}>= {
        height: "100",
        width: 50,
    };

    //!___________________________________________________________________
}