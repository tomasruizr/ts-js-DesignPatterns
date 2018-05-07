// Me quede en ver como hacen para no utilizar this
// Ver como llevar todo esto a typescript

'use strict'
function Dog(sound = 'guau') {
    this.sound = sound
}

Dog.prototype.bark = function() {
    console.log(this);
    console.log('I bark: ', this.sound);
}

function Person(saying = 'que paso pana mio') {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log('I say : ', this.saying);
}

let someProto = {
    testFunction(){
        console.log('some function');
    }
}

function createNew(constructors, args={}) {
    let newObj = {};
    let protos = [];
    let newProto = {};
    if (!Array.isArray(constructors)) constructors = [constructors]
    for (let index = 0; index < constructors.length; index++) {
        if (typeof constructors[index] === 'function'){
            constructors[index].apply(newObj, args[constructors[index].name])
            protos.push(constructors[index].prototype)
        } else {
            protos.push(constructors[index])
        }
        debugger
        console.log(constructors[index].name);
    }
    let prototype = Object.assign({}, ...protos);
    Object.setPrototypeOf(newObj, prototype)
    return newObj;
}

let x = createNew([Person, Dog, someProto], {Dog:['Dog Params'], Person:['Person Params']})
let y = createNew(Dog)
x.bark()
// x.talk()


/**
   *Constructors violate the open/closed principle because they couple all
callers to the details of how your object gets instantiated. Making an HTML5
game? Want to change from new object instances to use object pools so you can
recycle objects and stop the garbage collector from trashing your frame rate?
Too bad. You’ll either break all the callers, or you’ll end up with a hobbled
factory function.

If you return an arbitrary object from a constructor function, it will break
your prototype links, and the `this` keyword will no longer be bound to the
new object instance in the constructor. It’s also less flexible than a real
factory function because you can’t use `this` at all in the factory; it just
gets thrown away.

Constructors that aren’t running in strict mode can be downright dangerous,
too. If a caller forgets `new` and you’re not using strict mode or ES6
classes [sigh], anything you assign to `this` will pollute the global
namespace. That’s ugly.

Prior to strict mode, this language glitch caused hard-to-find bugs at two
different startups I worked for, during critical growth periods when we
didn’t have a lot of extra time to chase down hard-to-find bugs.

In JavaScript, factory functions are simply constructor functions minus the
`new` requirement, global pollution danger and awkward limitations (including
that annoying initial capitalized letter convention).

JavaScript doesn’t need constructor functions because any function can return
a new object. With dynamic object extension, object literals and
`Object.create()`, we have everything we need — with none of the mess. And
`this` behaves just like it does in any other function. Hurray!
   */