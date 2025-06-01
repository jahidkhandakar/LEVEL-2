{
    //*        Union Types       *//

type FrontendDeveloper = 'fakibaj developer'|'junior developer'

type BackendDeveloper = 'olosh developer'|'Senior developer'

type FullStackDeveloper = FrontendDeveloper | BackendDeveloper

const newDeveloper : FrontendDeveloper = 'junior developer'
console.log(newDeveloper)

const newDeveloper2 : FullStackDeveloper = 'Senior developer'
console.log(newDeveloper2)

//?_____________Object Type Alias + Union Types___________________
type User = {
    name : string,
    email? : string,
    gender : 'Male'|'Female',
    bloodGroup : 'A+'|'B+'|'O+'|'AB+'|'A-'|'B-'|'O-'|'AB-',
}
const user1 : User = {
    name : "John",
    gender : 'Male',
    bloodGroup : 'A+'
}

//?________________________________________________________
type ComputerEngineer = {
    skills : string[],
    designation1 : 'Software Engineer'|'System Engineer',
}
type AeronauticalEngineer = {
    skills : string[],
    designation2 : 'Aerospace Engineer'|'Drone Engineer',
}

type Engineer = ComputerEngineer & AeronauticalEngineer

const engineer1 : Engineer = {
    skills : ['JavaScript','Python','C++'],
    designation1 : 'Software Engineer',
    designation2 : 'Drone Engineer',
}
const engineer2 : Engineer = {
    skills : ['JavaScript','Python','C++'],
    designation1 : 'System Engineer',
    designation2 : 'Aerospace Engineer',
}



}