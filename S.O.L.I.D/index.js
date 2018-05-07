'use strict';
// https://medium.com/javascript-scene/learn-javascript-b631a4af11f2
// https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
// S.O.L.I.D. STANDS FOR:
// S — Single responsibility principle
// O — Open closed principle
// L — Liskov substitution principle
// I — Interface segregation principle
// D — Dependency Inversion principle

// Single Responsability:

let nombre = 'Marinel';

const LiveBeignPrototype = {
    name: 'predefined by me',
    getFullName () {
        return `${this.name} ${this.lastName}`;
    },
    eat(){
        console.log(`I am ${this.name} and i can eat`);
    },
    sleep(){
        console.log(`I am ${this.name} and i can sleep`);
    }
}

const DogPrototype = {
    bark () {
        console.log(`I am ${this.name} and i can Bark`);
    },
    ask (){
        console.log(`I am ${this.name} and i am asking`);
    }
}
const CatPrototype = {
    meow () {
        console.log(`I am ${this.name} and i can meow`);
    },
    hunt () {
        console.log(`I am ${this.name} and i am hunting`);
    }
}

// # Supports Open/Closed Principle Objects or entities should be open for extension, but closed for modification.
// Open for extension means that we should be able to add new features or components to the application without breaking existing code.
// Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code
/*
Given
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }
}

An then asks for circle area

// VIOLATION
public class AreaCalculator
{
    public double Area(Rectangle[] shapes)
    {
        double area = 0;
        foreach (var shape in shapes)
        {
            area += shape.Width*shape.Height;
        }

        return area;
    }
}

// SOLUTION
public abstract class Shape
{
    public abstract double Area();
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    public override double Area()
    {
        return Width*Height;
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double Area()
    {
        return Radius*Radius*Math.PI;
    }
}

public double Area(Shape[] shapes)
{
    double area = 0;
    foreach (var shape in shapes)
    {
        area += shape.Area();
    }

    return area;
}

*/


// # Liskov Pronciple: a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.
// Lo entiendo como lo mismo pero visto desde el cliente.
// Con el hecho de agregar comportamientos al heredad prototipos en lugar de clases se cumpliría también este principio.
// Factory

/*
public class Task {
    public Status Status { get; private set; }

    public virtual bool CanClose(out String reason) {
        reason = null;
        return true;
    }
    public void Close() {
        String reason;
        // HERE: if (Status == Status.Started) would generate a violation to Liskov Principle.
        // So we create a virtual CanClose Method that is invoked always.
        if (!CanClose(out reason))
            throw new Exception(reason);

        Status = Status.Closed;
    }
}

public ProjectTask : Task {
    public override bool CanClose(out String reason) {
        if (Status != Status.Started)
        {
            reason = "Cannot close a started Project Task";
            return false;
        }
        return base.CanClose(out reason);
    }
}


*/


function createPerson (args) {
    return FactoryInstantiator([LiveBeignPrototype, DogPrototype], args);
}



/**
 * Abstract Factory
 * @param {Array, Object} protos    In case of array, will compose the prototypes, in case of object will apply it as is.
 * @param {Object} args     Enumerable Properties to be passed to the new constructed object
 */
function FactoryInstantiator(protos, args) {
    let proto;
    if (Array.isArray(protos)){
        proto = Object.assign(...protos);
    } else if (typeof protos === 'Object'){
        proto = protos;
    }
    return Object.assign(Object.create(proto), args);
}


var x = createPerson({lastName:'Ruiz'});
var y = createPerson({name:'Tomas2', lastName:'Ruiz'});

// Interface segregation principle: A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.
// Esto básicamente lo que quiere decir es que se debe tener una interface para la ejecución de una función que puede ser ejecutada distinta por los miembros.
// En un mundo con interfaces, lo que aseguras es que existe en el objeto una función que hace una función específica más alla de la implementación particular de cada quien. como todas las interfaces.
// pero lo haces de tal manera que sea una función que abstraiga el comportamiento de tal forma que pueda incluir a todos los prototipos involucrados. Cosas bien generales
// ej: Calcular. Procesar. Etc...
// De esa forma, los prototipos estableces comportamientos heredables, y las interfaces generalizaciones de esos comportamientos a través de los cuales se pueden invocar comportamientos más complejos.
// const manageEatingInterface = (fn) => ({
//     type: 'manageEatingInterface',
//     perform: () => fn()
// })

// Si existiesen interfases, posiblemente en TypeScript, esta función implementaría IPerform
function createDog (args) {
    let dog = FactoryInstantiator([LiveBeignPrototype, DogPrototype], args);
    dog.perform = ()=>{dog.ask(); dog.eat()};
    return dog;
}

// # Dependency inversion principle === Dependency Injection === Inversion of control