{
    //*___________________Functions_____________________
//Learning Function
//Normal Function
//Arrow Function

function add(num1: number, num2: number){
    return num1 + num2;
}

add(2, 3); //5


//Arrow Function
const addArrow = (num1: number, num2: number) : number => num1 + num2;


//*__________________Method_______________________
//Function inside an object is called method
const poorUser = {
    name : "Jahid",
    age : 23,
    balance : 1000,
    addBalance(balance: number): string{
        return `My alance is: ${this.balance + balance}`;
    }
} 
console.log(poorUser.addBalance(1000));

const arr: number[] = [1,3,10]
const arrNew: number[] = arr.map((elem:number):number=>elem*elem); 

}