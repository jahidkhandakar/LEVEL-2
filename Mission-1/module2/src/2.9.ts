{
    //!___________________________________________________________________

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; //conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type rich = {
        bike : string;
        car : string;
        house : string;
        ship : string;
    }

    type checkProperty<T> = T extends keyof rich? true : false;

    type hasPlane = checkProperty<"plane">;
    type hasBike = checkProperty<"bike">;

    //!___________________________________________________________________
}