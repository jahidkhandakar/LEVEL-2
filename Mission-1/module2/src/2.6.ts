{
  //!_____________________________________________________________________________

  //?            Constraints

  const addCourse = <T extends { id: number }>(student: T) => {
    const course = "Next Level";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>({
    id: 111,
    name: "John",
    age: 20,
    email: "john@gmail.com",
  });

  const student2 = addCourse<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>({
    id: 222,
    name: "Jane",
    age: 22,
    email: "jane@gmail.com",
  });

  //*__________________________________

  const addToCart = <T extends { id: number }>(item: T) => {
    const service = "Food Delivery";
    return {
      ...item,
      service,
    };
  };

  const cart1 = addToCart<{
    id: number;
    name: string;
    price: number;
  }>({
    id: 1,
    name: "Pizza",
    price: 20,
  });

  const cart2 = addToCart<{
    id: number;
    name: string;
    price: number;
  }>({
    id: 2,
    name: "Pasta",
    price: 30,
  });

  console.log(cart1);
  console.log(cart2);

  //!_____________________________________________________________________________
}
