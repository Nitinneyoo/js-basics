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


// Prototype And prototypical inheritance
 //----------------------------------------------------
 

