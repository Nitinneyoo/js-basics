let x = 5;
let y = 10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);


// Ternery operator

let points = 10;
let type = points > 100 ? 'Gold' : 'silver';
console.log(type);

// Bitwise operator

// For - in loop

const persons = {
    name : 'Nitin Singh',
    age : 24
};

for (let key in persons){
    console.log(key,persons[key]);
}
    

//for - out Loop

const colors = ['red','green','blue'];
  
for (let color of colors ){
    console.log(color);
}
// break and continue Loop

let i= 0;
while (i<=10){
    if(i===5) break;
    console.log(i);
    i++;
}


let j= 0;
while (j<=10){

    if(j%2 === 0){
        j++;
        continue;
    }
   
    
    console.log(j);
    j++;
}
//write a funnction that takes two number and returns the maximum of the two 


let number = max  (10,3);
console.log(number);

function max(num1,num2) {
    return (num1,num2) ? num1 : num2 ;
}


//exercise landscape or portrait


console.log(isLandscape(300,600));
function isLandscape (width,height){
     return (width > height);
}

// FizzBuzz Algorithm

//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not Divisible by 3  or 5 => input
// not a number provided ==> 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){
    if(typeof input !== 'number')
        return NaN;
    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';

    return input ;
}

//Exercise checkspeed 

// speed limit = 70
// every 5 km get ->1 points 
checkSpeed(76);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

 if (speed <= speedLimit){
    console.log('OK');
    return;
 }
 const points = Math.floor((speed - speedLimit ) / kmPerPoint);

    if (points >= 12) 
    console.log('Licence Suspanded');
    
    else 
        console.log('points',points);

}
//show Number 

showNumber(10);

function showNumber(num){
    for(let i = 1; i<=num; i++){
        const message = (i%2===0)? 'EVEN': 'ODD';
        console.log(i,message);
    }
}

// Object is not itterable 

// for-of  loop is use to make object itterable 

// cloning an object 

// const circle = {
//     radius : 1,
//     draw (){
//         console.log('draw');
//     }
// }

// const another = {};

// for (let key in circle)
//     another[key] = circle[key];

// another ['another'] = circle ['radius'];

// console.log(another);
  
// there is one another method object.assign

// const circle = {
//     radius : 1,
//     draw (){
//         console.log('draw');
//     }
// };

// const another = Object.assign({
//     color : 'Red'
// },circle);

// console.log(another);


// more simpler way to cloan the object spread operater ...

const circle = {
    radius : 1,
    draw (){
        console.log('draw');
    }
};
const another = {...circle};

console.log(another);

// string primitive

const message = 'My Name Is Nitin Singh';

// string object 
const Any = new String ('hi');


// Template Literals 

const mes =
`This is my 
First Message`;

//Exercise Address

let address = {
    street :'Ambedkar nagar ',
    city : 'Rewa',
    zipcode : '486226'
     
};

function showAddress (address) {
     for (let key in address)
        console.log(key,address[key]);
}
showAddress(address);

// use factory and constructer function 

 // Factory Function 

 let address1 =createAddress('a','b','c');
 console.log(address1);

 //factory function 
 function createAddress(street,city,zipcode) {
    return {
        street,
        city,
        zipcode
    };
 }

 // constructer function 
 let address2 = new Address2('a','b','c');
 console.log(address2);

 function Address2(street,city,zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
 }


 // Blog Post Object ............


 // title 
 // body 
 // auhtor 
 // views 
 // comments 
 // (author , 'body)
// isLive

let post  = {
    title  : 'a',
    body : 'b',
    auhthor : 'c',
    views : 10,
    comments : [
        {aughtor : 'a', body : 'b'},
        {aughtor : 'c', body : 'd'},
    ],
    isLive : true

};
console.log(post);

//  consturcter Function 

  let post1 = new Post('a','b','c');
  console.log(post1);


  function Post(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }

  // price range 
// tooltip shows when we hover over the object 

 