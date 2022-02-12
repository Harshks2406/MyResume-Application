let userName = document.getElementById('fullName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let btn = document.getElementById('submitBtn')
let msg1 = document.getElementById('msg1')


const smit = async(event)=>{
    event.preventDefault(event);
    let nameVal = userName.value;
    let emailVal = email.value;
    let passwordVal = password.value;
    if(nameVal === "" ){
        msg1.innerText = `Name Cannot be empty.`
    }
    else{
        msg1.innerText = ``
    }
    if(emailVal === "" ){
        msg2.innerText = `Email Cannot be empty.`
    }
    else{
        msg2.innerText = ``
    }
    if(passwordVal === "" ){
        msg3.innerText = `Password Cannot be empty.`
    }
    else{
        msg3.innerText = ``
    }
    
}

btn.addEventListener('click',smit)