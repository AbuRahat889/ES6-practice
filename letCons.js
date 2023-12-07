function add(num1 , num2 = 15){
    // // num2 = num2 || 2;
    // if (num2==undefined){
    //     num2 = 0;
    // }
    sum = num1 + num2;
    return sum;
}
 

let total = add(10,10);
console.log(total);

total = add(10);
console.log(total);