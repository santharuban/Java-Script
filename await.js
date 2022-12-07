let promise=new Promise(function(resolved,rejected){
    setTimeout(function(){
        resolved("promise resolved")},3000) ;
        // rejected("promise rejected")},2000);
    });
    async function value(){
        try{
            let result=await promise;
            console.log(result);
        }
        catch(error){
            console.log(error);
        }
    }
value();

// let promise1;
// let promise2;
// let promise3;

// async function sum() {
//     let result1 = await promise1;
//     let result2 = await promise2;
//     let result3 = await promise3;

//     console.log(result1);
//     console.log(result1);
//     console.log(result1);
// }
// sum();