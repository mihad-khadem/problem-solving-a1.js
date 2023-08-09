// Problem-3

function sortMaker(arr) {
  if (arr.length != 2 || typeof arr[(0, 1)] != "number" || arr[(0, 1)] < 0) {
    return "Invalid Input";
  }
  if (arr[0] == arr[1]) {
    return "equal";
  } else {
        let bigger, smaller;
        if (arr[0] > arr[1]) {
            bigger = arr[0];
            smaller = arr[1];
        } 
        else {
            bigger = arr[1];
            smaller = arr[0];
    }
    return [bigger, smaller];
  }
}

// Test
console.log(sortMaker([2, 3])); //Output : [3, 2]
console.log(sortMaker([4, 2])); //Output : [4, 2]
console.log(sortMaker([4, 4])); //Output : equal
console.log(sortMaker([1, 2])); //Output : [2, 1]
console.log(sortMaker([4, -2])); //Output : Invalid Input
