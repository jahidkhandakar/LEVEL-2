{
//*________________Types____________________*

//?   nullable types

const searchName = (value:string | null)=>{
    if(value){
        console.log("searching");
    }else{
        console.log("No value");
    }
};

searchName("hello");
searchName(null);


//?   unknown types / typeof

const speedInMeterPerSecond = (value:unknown)=>{
    if(typeof value === "number"){
        const convertedSpeed = (value*1000)/3600;
        console.log(`The speed is: ${convertedSpeed} m/s`);

    }else if(typeof value === "string"){
        const[result,unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result)*1000)/3600;
        console.log(`Speed is: ${convertedSpeed} m/s`); 
    }else{
        console.log("Invalid value");
    } 
}

speedInMeterPerSecond(`1000 km/h`);


//?    Never

const throwError = (msg:string):never=>{
    throw new Error(msg);
}

throwError("This is an error");


}