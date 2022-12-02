let a=2;
switch(a){
    case 1:
        a='one';
        break;
    case 2:
        a='two';
        break;
    default:
        a='not found';
        break;
}
console.log("the value is",a);

// multiple case switch program
let fruit='apple';
switch(fruit){
    case 'mango':
    case 'apple':
    case 'fig':
        console.log(fruit,"is a fruit");
        break;
     default:
        console.log(fruit,"is not a fruit");
        break;
}

// ternory operator
let mark=prompt("enter your mark");
let result=(undefined >=40)? 'pass':'fail';
console.log(result);

    