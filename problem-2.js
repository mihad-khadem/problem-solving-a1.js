function matchFinder(string1, string2){
    if(typeof string1 != 'string' || typeof string2 != 'string' ){
        console.log('Sorry!! Input one or two strings');
    }
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}

// Test

console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
console.log(matchFinder("Not a string"));