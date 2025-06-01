{
    //!_______________________________________________________________________________

    //*        Utility Types
    //pick 
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>;


    //omit
    type Person2 = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type PersonWithoutContact = Omit<Person2, 'contactNo'>;


    //Required 
    type PersonRequired = Required<Person>;

    //Partial
    type PersonPartial = Partial<Person>;

    //Readonly
    type PersonReadonly = Readonly<Person>;

    //Record
    type PersonRecord = Record<'name' | 'age', string>;

    type obj = Record<string,string>;
    //example
    const obj1: obj = {
        name: "string",
        age: "string"
    }
    const obj2 : Record<string, unknown>={};



    //!_______________________________________________________________________________
}