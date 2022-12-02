const form=document.querySelector("form");
const fname=document.querySelector("firstname");
const lname=document.querySelector("lastname");
const para=document.querySelector("p");

form.addEventListener('submit',(e)=>{
    if(fname.value===" "||lname.value===" "){
        e.preventDefault();
        para.textContent="don't leave blank";
    }
});

