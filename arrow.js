// function doubleIt(num1){
//     return num1 * 2;
// }

// let doubleIt = function(num1){
//     return num1 * 2;
// }


//single line arrow function
let doubleIt = num1 => num1 * 2;  //arrow function
result = doubleIt(5);
result =  `Result = ${result} `;
console.log (result);

let add = (x , y) => x + y; // multiple variable
result1 = add(5,10);
result1 =  `Result1 = ${result1} `;
console.log (result1);

let give5 = ( ) => 5; // Null variable
result2 = give5(5);
result2 =  `Result3 = ${result2} `;
console.log (result2);


//multiline function arrow function

let toMath =(x,y) =>{
    let add = x + y;
    let div = x -y;
    let multi = add * div;

    return multi;
}

let result3 = toMath(5,3);
result3 =  `Result3 = ${result3} `;
console.log( result3);


