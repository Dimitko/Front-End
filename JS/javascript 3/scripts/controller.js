function validateForm(event){
    let email = document.getElementsByClassName("text");
    let password = document.getElementsByClassName("password");
    let error = document.getElementById("errors");
    let form = document.getElementById("register-form");
    const smallLetter = /[a-z]/g;
    const capitolLetter = /[A-Z]/g;
    const specialChars = /[!@#$%^&]/g;
    if(!email.includes('@') || !email.includes('.') || email.match(smallLetter).length!=0 || email.match(capitolLetter).length!=0 || email.length<5){
        event.preventDefault();
        error.innerHTML = "Please enter valid e-mail!";
        return false;
    }s
    if(password.length<6 || password.match(specialChars).length!=0 || password.match(capitolLetter).length!=0){
        event.preventDefault();
        error.innerHTML = "Please enter valid password!";
        return false;
    }
}

document.getElementById("register-form").addEventListener('submit', validateForm);
