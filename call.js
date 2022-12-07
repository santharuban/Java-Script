function greet(name,callback){
    callback();
    console.log("Hi"+name);
   
    console.log("1");
}
function call(){
    console.log("call backfunction");
}
greet('santha',call)
// ***************************************************
function greeting(){
    console.log("hello world");
}
function sayname(name){
    console.log("hello"+" "+name);
}
setTimeout(greeting,1000);
setTimeout(sayname,2000,"ruban");
// ****************************************************

