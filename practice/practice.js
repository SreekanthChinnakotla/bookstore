let obj1 ={a:10}
console.log("obj1 old", obj1)
let obj2 = obj1;

obj2.a = 1000;
console.log("obj1 new",obj1);
console.log("changed obj2",obj2);


let target = {
    a:225,
    b:{c:10}
}
let stringified = JSON.stringify(target);
console.log('stringfied obj',stringified);

let final = JSON.parse(stringified);
final.b.c=200;
console.log('final obj and after changing c',final);

 
// call

let obj = {
    firstname:"rajesh",    
}
function intro (lastname){
   console.log(firstname+" "+lastname);
}
intro('sharma');
intro.call(obj,'sharma');