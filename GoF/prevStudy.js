//*******************************************
// Javascript ways
//*******************************************
// Constructor 
function constructorPattern (){}
constructor.prototype.getName = () => {
    console.log('this is the getName Method');
}
// Class
class classPattern {
    constructor(){}
    getName(){
        console.log('this is the getName Method');
    }
}
//*******************************************
// Gof Creational Patterns
//*******************************************
// Factory
let Bmw = {
    init:(mode, price, maxSpeed) => {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    },
    run: ()=>console.log('I Am a Bmw')
}
let Honda = {
    init:(mode, price, maxSpeed) => {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    },
    run: ()=>console.log('I Am a Honda')
}
let factories = {Bmw, Honda};
let BmwFactory = (brand, args) => {
    return Object.assign(Object.create(factories[brand]), args);
}
// Factory ES6 -- Como en los routers
class BmwFactoryES6 {

    create(type) {
        if (type === 'X5')
            return new BmwES6(type, 108000, 300);
        if (type === 'X6')
            return new BmwES6(type, 111000, 320);
    }
}
class BmwES6 {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
// Abstract Factory
// Abstrae lo que se esta creando... pasame al peleador.. no importa que sea el peleador, solo se que cumple con una interface
let AbstractFactory = (kind, args) => {
    // Pudiese hoy devolver Honda, pero despues Yamaha, y a la aplicacion no le va a importar.
    if (kind.toLowerCase() === 'racing'){
        return Object.assign(Object.create(factories['Honda']), args);
    } else if (kind.toLowerCase() === 'touring'){
        return Object.assign(Object.create(factories['Bmw']), args);
    } else{
        console.log('modelo no conocido');
    }
}
// Prototype
// Clone what already exist
class PrototypePattern {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    clone(){
        return new prototypePattern(this.name, this.age)
    }
}

// Builder
// Builds an Object wich is composed by several other objects.
class RobotBuilder {
    static build(args){
        return { // Calling factories instead of constructors
            // legs : robotLegs(args)
            // arms : robotArms(args)
            // head : robotHead(args)
        }
    }
}

// Singleton
// Crea una sola instancia centralizada del objeto
// Usarlos Sabiamente con Dependency injection.
// Avoid Singletons to Write Testable Code · CodeAhoy
// https://codeahoy.com/2016/05/27/avoid-singletons-to-write-testable-code/
// 
// Use your singletons wisely
// https://www.ibm.com/developerworks/webservices/library/co-single/index.html
// 
// Where Have All the Singletons Gone?
// http://misko.hevery.com/2008/08/21/where-have-all-the-singletons-gone/
class Singleton{
    constructor(){
        if (typeof Singleton.instance === 'object'){
            return this.instance;
        }
        Singleton.instance =this;
        return this;
    }
}

//*******************************************
// Gof Structural
//*******************************************
// Adapter
class AdapterProvider {
    static method1(name){
        // Returns true only if all are lower case
        if (/[a-z]+/g.test(name)){
            return;
        } 
        return true;
    }
}
class AdapterProviderAdapter {
    AdapterMethod1(name){
        return AdapterProvider.method1(name.toLowerCase());
    }
}
class AdapterConsumer {
    constructor(){
        // this will not pass since is uppercase.
        this.name = 'TOMAS';
        this.adapter = new AdapterProviderAdapter();
    }
    perform(){
        adapter.AdapterMethod1(this.name);
    }
}

//Bridge Pattern
// Is like a 

