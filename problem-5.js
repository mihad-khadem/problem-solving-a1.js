// Problem 5
function canPay(changeArray, totalDue){
    if(!Array.isArray(changeArray) || changeArray.length == 0){
        return 'Input Plz!!';
    }
    let totalChange = 0;
    for(let i =0; i < changeArray.length; i++){
        totalChange += changeArray[i];
    }
    if(totalChange >= totalDue){
        return true;
    }
    else{
        return false;
    }
}

// Test
console.log(canPay([1, 5, 5], 10));