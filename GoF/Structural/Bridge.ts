// For Example A Weapon
interface IClass1{
    perform1:()=>void
}

// For Example an Enchantment
interface IClass2{
    perform2:()=>void
}

class SomeClass1 implements IClass1{
    perform1(){}
}

class SomeClass2 implements IClass2{
    class1Obj:IClass1;  
    constructor(someClass1:IClass1){
        this.class1Obj = someClass1;
    }
    perform2(){
        // Do perform2 Stuffs and
        this.class1Obj.perform1()
    }
}


// The App Client
let x = new SomeClass2(new SomeClass1())
x.perform2()

/* 
Goes Hand in Hand with the inversion of control Principle
Ends to be limiting since you have to know exactly what the Class2 will need in the future.
In this example, if the class2 wants to now incorporate some Class3 Functionality, there will be an issue.
 */
