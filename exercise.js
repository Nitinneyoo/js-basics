// Array From Range  Question 1

const number6 = arrayFromRange(1,9);

console.log(number6);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}


// Question 2 Includes method -----------------------------------------

const number7 = [1,2,3,4];

console.log(includes(number7,9));

function includes(array,searchElement){
    for (let element of array )
        if (element === searchElement)
            return true;
    return false;
}
// Returning False because there is no 9 present in array 

// Exercise question 4 Array except method 
// ------------------------------------------------------------

const number8 = [1,2,3,4,5,1,1,2];

const output1 = except(number8, [1,2]);

console.log(output1);

function except(array, excluded){
    const output1= [];
    for (let element of array)
        if (!excluded.includes(element))
            output1.push(element);
    return output1;
}

// Question 5 Moving an element 
// -----------------------------------------------------------

