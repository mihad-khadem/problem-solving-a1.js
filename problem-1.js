function cubeNumber(number){
    if(typeof number != 'number'){
        return 'Its not a number!'
    }
    else{
        return Math.pow(number, 3);
    }
}



// Test 
console.log(cubeNumber(3)); // Output : 27
console.log(cubeNumber(4)); // Output : 64
console.log(cubeNumber('Not number')); // Output : Its not a number.