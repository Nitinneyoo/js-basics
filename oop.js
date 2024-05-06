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
const Another = new circle1(1);
console.log(Another);


