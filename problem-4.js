// Problem-4

function findAddress(obj){
    let address = [];
    if(obj.street != undefined){
        address.push(obj.street);
    }
    else{
        address.push("__");
    }
    if(obj.house != undefined){
        address.push(obj.house);
    }
    else{
        address.push("__");
    }
    if(obj.society != undefined){
        address.push(obj.society);
    }
    else{
        address.push("__");
    }
    return address.join();
}



console.log(findAddress({street: 10, house: "15A", society: "Earth Perfect"}));
console.log(findAddress({street: 10,  society: "Earth Perfect"}));
console.log(findAddress({street: 10,  }));
