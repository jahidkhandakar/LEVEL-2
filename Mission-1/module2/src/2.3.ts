{
    //!______________________________________________________________________

    //*        Generic Types
    type GenericArray<T> = Array<T>;

    //number type
    const numberArray: GenericArray<number> = [1, 2, 3, 4, 5];
    //string type
    const stringArray: GenericArray<string> = ["a", "b", "c", "d", "e"];
    //boolean type
    const booleanArray: GenericArray<boolean> = [true, false, true, false];

    //object type
    const user : GenericArray<{name: string, age: number}> = [
        {
            name: "John",
            age: 30,
        },
        {
            name: "Jane",
            age: 25,
        },
    ];

    //*       Generic Tuple
    type GenericTuple<T1, T2> = [T1, T2];

    const tuple1: GenericTuple<number, string> = [1, "one"];

    const tuple2: GenericTuple<{name: string, email: string}, boolean> 
        = [{name: "Jahid", email: "jahid@gmail.com"}, true];



    //!______________________________________________________________________
}