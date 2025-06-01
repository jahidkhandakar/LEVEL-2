{
//!______________________________________________________________________

//*       Functions with Generics

    const createArray = (param: string): string[] => {
        return [param];
    }

    const arrayWithGeneric = <T>(param: T) : T[] =>{
        return [param];
    }

    const result1 = createArray("Hello");

    const result2 = arrayWithGeneric<string>("Hello");
    const result3 = arrayWithGeneric<number>(123);
    const result4 = arrayWithGeneric<boolean>(true);

    const result5 = arrayWithGeneric<{name: string, age: number}>({name: "John", age: 30});

    //*?--------------using type alias------------------
    type User = {
        name: string;
        age: number;
    }

    const result6 = arrayWithGeneric<User>({name: "John", age: 30});
    const result7 = arrayWithGeneric<User[]>([{name: "John", age: 30}, {name: "Jane", age: 25}]);

    //?--------------Tuple with Generics------------------
    const createArrayWithTuple = <T1, T2>(param1: T1, param2: T2): [T1, T2] => {
        return [param1, param2];
    }

    createArrayWithTuple<string, number>("Hello", 123);
    createArrayWithTuple<number, string>(123, "Hello");
    createArrayWithTuple<string, {name: string}>("Bangladesh", {name: "Dhaka"}); //passing object
    createArrayWithTuple<{name: string, age: number}, boolean>({name: "Jahid", age: 25}, true); //passing object

    //?--------------Any Tyepe Function with Generics------------------
    const addCourseToStudent = <T>(student: T) => {
        const year = "Senior Year";
        return {
            ...student,
            year,
        }
    }
    const student1 = addCourseToStudent({name: "John", age: 25, courseName:"JavaScript"}, );
    const student2 = addCourseToStudent({name: "Jane", age: 30, courseName:"Java"}, );

    console.log(student1);
    console.log(student2);

//!______________________________________________________________________
}