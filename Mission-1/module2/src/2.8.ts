{
//!__________________________________________________________________________
//*____________________Asynchronous TypeScript_______________________________

    type Todo = {
        id: number;
        userID: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async():Promise<Todo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();

        return data;
    }
    const todo = getTodo();
    console.log(todo);



    type Something = {something: string};

    //simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = {something: "Hello World"};
            if(data){
                resolve(data);
            }else{
                reject("Error");
            }
        });
    }

    //calling createPromise function
    const showData = async (): Promise<Something> => {
        const data : Something = await createPromise();
        return data;
    }


//!__________________________________________________________________________
}