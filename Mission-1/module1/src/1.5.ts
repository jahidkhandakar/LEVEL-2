//*Reference Type -- Object
const user : {
    company: "Nexora IT Solutions", //literal type
    readonly firstName: string, //readonly property, can't be changed
    middleName?: string, //optional property
    lastName: string,
    isMarried?: boolean, //optional property
} = {
    company: "Nexora IT Solutions",
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    isMarried: true,
}

