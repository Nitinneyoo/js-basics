// Factory Function ---------------------------------------------------------------
// ----------------------------------------------------------------------------

function createCircle (radius){
    return {
        radius,
        draw : function(){
            console.log('draw');
        }
    };
}
const round = createCircle(1);
console.log(round);

//  Constructer Function 
//---------------------------------------------------------------------------------------------------

function Circle1 (radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const Another = new Circle1(1);
console.log(Another);


// value types and reference types 

// Primitive are copied by their value 
// Objects are copied by their reference

// Abstraction ------------------------------------------------------------------------------
// --------------------------------------------------------------------------------


// Exercise Stop Watch

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function (){
        if (running)
            throw new Error ('Stopwatch has already started. ');

        running = true ;
        startTime = new Date();
    };

    this.stop = function (){
        if(!running)
            throw new Error ('Stopwatch is not running. ');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function(){

        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };


    Object.defineProperty (this, 'duration', {
        get : function() { return duration;}
    });

}

// Exercise to move method to prototype-------------
//------------------------------------------------------



// Prototype And prototypical inheritance
 //----------------------------------------------------


// Every object in Javascript except the root object has a prototype or a parent.
 

// prototype vs Instance Members

function Circle11(radius) {
    // Instance members
    this.radius = radius;
    }
    // Prototype members
    Circle11.prototype.draw = function(){
        console.log('draw');
    }
 const c1 = new Circle11(1);
 const c2 = new Circle11(1);

 Circle11.prototype.toString = function (){
    return 'Circle with radius '  + this.radius;
 }

 // iterating Properties
// ------------------------------------------------------------------------------------

 console.log(Object.keys(c1));

 for (let key in c1)
    console.log(key);


// Avoid Extending The Built-in Objects

// Do not Modify Objects you do not own !

Array.prototype.shuffle = function(){
    // 
}
const array = [];
array.shuffle();  

// Create your own Prototypical Inheritance 
// -----------------------------------------------------

  function shape (color){
    this.color = color;
  }
  shape.prototype.duplicate = function (){
    console.log('duplicate');
  }
  function Circle12 (radius,color) {
    shape.call(this, color);
    this.radius =- radius;
  }
// Circle12.prototype.constructor = Circle12;
// new Circle12/prototype.constructor() => new Circle12();
  Circle12.prototype = Object.create(shape.prototype);


  // whenever you reset the prototype of an object you should also reset the constructor.

  Circle12.prototype.constructor = Circle12;

  Circle12.prototype.draw = function (){
    console.log('draw');
  }

  const s = new shape ();
  const c = new Circle12(1, 'red  ');

  // Calling the Super Constructor

  // function Shape (color){
   // this.color = color;
 // }
 // and we will pass the color in Circle function and then call the shape function with color and this operator
 

 // Intermidediate Function Inheritance 

//  function extend (child , parent){
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
//  }
//  function Shape1(){

// }
// Shape1.prototype.duplicate = function(){
//    console.log('duplicate');
// }
// function Circle13(){

// }
// extend(Circle13,Shape1);
// // Method overriding 

// Circle13.prototype.duplicate = function(){
//     Shape1.prototype.duplicate.call(this);

//     console.log('duplicate Circle ');
// }
// const p = new Circle13();




// Polymorphism 
//---------------------------------------------------

function extend (child , parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
 }
 function Shape1(){

}
Shape1.prototype.duplicate = function(){
   console.log('duplicate');
}
function Circle13(){

}
extend(Circle13,Shape1);
// Method overriding 

Circle13.prototype.duplicate = function(){
    Shape1.prototype.duplicate.call(this);

    console.log('duplicate Circle ');
} 
function Square1() {

}
extend(Square1, Shape1);
 
Square1.prototype.duplicate = function (){
    console.log('duplicate Square');
}

const shapes = [
    new Circle13(),
    new Square1()
];
for (let Shape1 of shapes)
    Shape1.duplicate();


// When to use inheritance 

// start with simple object and then if you see a number of these objects share similar features then perhaps you can encapsulate those features inside of a generic object inheritance 

// Problem with inheritance 
//1.hierarchy issue 

// Mixins
function mixin(target, ...sources){
    Object.assign(target, ...sources);
} 


const canEat = {
    eat : function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk : function (){
        console.log('walking');
    }
};

canSwim = {
    swim : function (){
        console.log('swimming');
    }
};


function Human(){

}
mixin(Human.prototype,canEat, canWalk);

const human = new Human();
console.log(human);


function Goldfish(){

}
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
