function greeting(){
    console.log("hello");
}   
setTimeout(greeting,2000);
setTimeout(greeting,5000);
console.log("display in first");


let count=0;
function counting(){
    count=count+1;
    console.log(count);
}
let id=setTimeout(counting,3000);
clearTimeout(id);
console.log("count is stopped");


