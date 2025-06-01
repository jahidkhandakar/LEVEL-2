//*__________________Type Alias in TypeScript____________________
{

//!         Type Alias
const student1:{
    name:string,
    age:number,
    isActive:boolean,
    subjects:string[],
    address:{
        city:string,
        state:string
    }
}={
    name:"John",
    age:20,
    isActive:true,
    subjects:["Math","English"],
    address:{
        city:"New York",
        state:"NY"
    }
}

//? Declaring a type alias
//?__________________________________
type Student = {
    name: string,
    age : number,
    contactNo? : string,
    gender : string,
    address : string,
}
//? Making object with type alias
//?__________________________________
const student2 : Student = {
    name: "John",
    age: 20,
    contactNo: "1234567890",
    gender : "Male",
    address : "New York"
}
const student3 : Student = {
    name : "Jahid",
    age : 25,
    contactNo : "9876543210",
    gender : "Male",
    address : "Dhaka"
}
//?______________Variable Type Alias__________________

type isActive = boolean;
const activeStatus : isActive = true;

type userName = string;
const user1 : userName = "John Doe";

//?______________Function Type Alias__________________
type add = (num1: number, num2: number) => number;

const addNumbers: add = (num1, num2) => num1 + num2;

}