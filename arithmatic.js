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

 
// Adding Element 
// push use to add number in end
// splice use to add number in middile
// upShift use to add number at beginning 


// element Finding  primitive type
// using indexOf and lastIndexOf 

const numbers = [1,2,3,1,4,3];

console.log(numbers.indexOf(1,2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);

// includes can also be used to check the element in array 

console.log(numbers.includes(3));


// finding element reference type
// it will return when it will find the element and if did not get that object then it will return undefined

 const courses = [
    {id : 1, name : 'a'},
    {id : 2, name : 'b'},
 ];
 const course = courses.find(function(course) {
    return course.name === 'a';

 }
   
);
 console.log(course);

 // Arrow Function 

 const courses1 = [
    {id : 1, name : 'a'},
    {id : 2, name : 'b'},
 ];

 const course2 = courses1.find(course2 => course2.name === 'b');
 console.log(course2);


// iteration of an array 
const number1 = [1,2,3];
for (let number of number1)
 console.log(number);
number1.forEach(number => console.log(number));

// joining array 

const numb = [1,2,3];
const joined = numb.join(',');
console.log(joined);
// seprating The Array 
const sms = 'My name is Nitin Singh';
const part = sms.split(' ');
console.log(part);

const attach = part.join(' ');
console.log(attach);


//  sorting An Array 

 const sub = [
    {id : 1 ,name : 'Node.js' },
    {id : 2 , name : 'javascript'}
 ];

 sub.sort(function(a,b){

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
 });
 console.log(sub);

// Testing the element of an array ....................
//......................................................
 // every() used to check to see if every element in a given array matches the given critaria 
 // some() checks to see if we have atleast one element that matches the given critaria.


 // filtering an array based on search..............................
 // .................................................

 const number3 = [1,2,3,-1];
//  const filtered = number3.filter(function(value){
//     return value >= 0;
//  });

 //another way to do by using arrow function 

 const filtered = number3.filter(n => n >=0);
 // mapping an array 

 const items = filtered.map(n =>({value : n}) );
 console.log(items);

 
// Mapping An Array ...................................
//.....................................................

// const items = filtered.map(value =>({n : value}) );


const number4 = [1,2,3,4,-1];
const item= number4
    .filter(n => n >= 0)
    .map(n => ({value : n}))
    .filter(obj => obj.value >1)
    .map(obj => obj.value);

console.log(item);
  
// redusing an array --------------------------------------------------------

const  number5 = [1,2,3,4,-2];

const sum = number5.reduce (
    (accumulator,currentValue) => accumulator + currentValue);
// let sum = 0;
// for (let n of number5) 
//     sum += n;

console.log(sum);


// The rest Operator -----------------------------------------
//(...restoperator)

function add (...args) {
    return args.reduce((a, b) => a + b);
}
console.log(add(1,2,3,4,5,10));


// Discount on any product ---------------------------------

function dis(discount, ...prices) {
    const totaldis = prices.reduce((a, b) => a +b);
    return totaldis * (1 - discount);
}

console.log(dis(0.2,20,60));


// default parameter ----------------------------------------------------------
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years; 
}
console.log(interest(10000));


// Getters and Setters --------------------------------------
// -----------------------------------------------------------
// getters => access properties
// setters => change (mutate) them 
 
// const identity= {
//     firstName : 'Nitin',
//     lastName : 'Singh',
//     get fullName() {
//         return `${identity.firstName} ${identity.lastName}`;
//     },
//     set fullName(value){
//         const between = value.split(' ');
//         this.firstName = between [0];
//         this.lastName = between [1];
//     }
// };

// identity.fullName = 'Ashwani Gupta';

// console.log(identity);


// Error Handling --------------------------------------------------------------

// if we did not pass any value object to 
// identity.fullName = 'null;
// then we have to use the error handling above the code

// const identity= {
//     firstName : 'Nitin',
//     lastName : 'Singh',
//     set fullName(value){
//         if (typeof value !== 'string') return ;


//         const between = value.split(' ');
//         this.firstName = between [0];
//         this.lastName = between [1];
//     }
// };

// identity.fullName = null;

// console.log(identity);

// throw an error  try and catch

// const identity= {
//     firstName : 'Nitin',
//     lastName : 'Singh',
//     set fullName(value){
//         if (typeof value !== 'string')
//             throw new Error('Value is not a String.') ;


//         const between = value.split(' ');
//         this.firstName = between [0];
//         this.lastName = between [1];
//     }
// };

// try {
//     identity.fullName = null;
// }
// catch (e) {
//     alert(e);
// }

// console.log(identity);

// Local variable / function take precedance over global function / variable
// --------------------------------------------------------------------------------


// let vs var
// ------------------------------------------------------------------------------------------

//var ==> crreate function-scoped variable
// ES6 (ES2015): let, const => block-scoped variable



// This Keyword --=> The object that is executing the current Function
// If the function is the part of the object then we call it method 

const video = {
    title : 'a',
    play(){
        console.log(this);
    }
};
video.stop = function (){
    console.log(this);
};
video.stop();



// If that function is regular function 


