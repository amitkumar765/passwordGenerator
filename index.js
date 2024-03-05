const lengthp = document.querySelector("#length_number");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");
const passinp = document.querySelector("#pass_input");
const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

console.log(lengthp.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(number.checked);
console.log(symbol.checked);

const upperCaseStr = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowerCaseStr = 'qwertyuiopasdfghjklzxcvbnm';
const numberStr = '0123456789';
const symbolStr = '`~!@#$%^&*()-_+={[}]:<,>.?';
let password ='';

generate.addEventListener('click', ()=>{

    let str = '';
    if (upper.checked){
        str += upperCaseStr;

    }
    if(lower.checked){
        str += lowerCaseStr;
    }
    if(number.checked){
        str += numberStr;
    }
    if(symbol.checked){
        str += symbolStr;
    }
    console.log(str,"str");
    
    for(let i=0; i <lengthp.value; i++){
        console.log(str.length,"str.length")
        let index = Math.floor(Math.random()*str.length);
        console.log(index,"index");
        console.log("Math.random()", Math.random());
        console.log("Math.random() * str.length",Math.random()*str.length);
        console.log("Math.floor(Math.random()*str.length)",Math.floor(Math.random()*str.length));
        console.log(str[index]);
        password += str[index];
    }
    console.log(password,"password");
    passinp.value = password; 
});
copy.addEventListener('click',()=>{
    if(passinp.value ===''){
        alert('Please Generate a Password Frist');
    }else{
        const newele = document.createElement('textarea');
        newele.value= passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to clipboard');
        newele.remove();
    }
});

