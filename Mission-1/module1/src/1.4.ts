//*______________________Basic Data Types_______________________________

//string---------------------------------------------
let firstName: string = "Jahid"
//number
let roll: number = 123
//boolean
let isActive: boolean = true
//undefined
let x : undefined = undefined
//null
let y : null = null

//Array-----------------------------------------------
let frinds: string[] = ["Jahid", "Sakib", "Shakib"]
let rolls: number[] = [1, 2, 3, 4, 5]

rolls.push(6) //push method is used to add a new element in the array

//Tuple-----------------------------------------------
//Tuple-> array-> order-> type of values
let coOrdinates : [number, number] = [12.34, 45.67]

let ageName : [number, string, boolean] = [23, "Jahid", true]

ageName.push(45)
ageName.push("Sakib")
ageName.push(false)

ageName[0] = 47

console.log(ageName) // 47