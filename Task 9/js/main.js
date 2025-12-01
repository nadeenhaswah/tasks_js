let register = document.querySelector('#register');

let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let errName = document.querySelector('.errName');

let BD = document.querySelector('.BD');
let errBD = document.querySelector('.errBD');

let email = document.querySelector('.email');
let errEmail = document.querySelector('.errEmail');

let coEmail = document.querySelector('.coEmail');
let errEmailCo = document.querySelector('.errEmailCo');

let password = document.querySelector('.password');
let errPass = document.querySelector('.errPass');

let coPassword = document.querySelector('.coPassword');
let errPassCo = document.querySelector('.errPassCo');

let mobile = document.querySelector('.mobile');
let errMobile = document.querySelector('.errMobile');


register.onsubmit = function () {

    let allValid = true; // عشان نعرف لو في Error عام

    // -----------------------------------------
    // 1) First name + Last name letters only
    // -----------------------------------------
    let namePtr = /^[A-Za-z]+$/i;
    if (!namePtr.test(fname.value.trim()) || !namePtr.test(lname.value.trim())) {
        fname.style.border = "1px solid red";
        lname.style.border = "1px solid red";
        errName.classList.remove("hidden");
        errName.innerHTML = "The name should include letters only";
        allValid = false;
    } else {
        errName.classList.add("hidden");
        fname.style.border = "none";
        lname.style.border = "none";
    }


    // -----------------------------------------
    // 2) Check Birth Date
    // -----------------------------------------
    if (BD.value === "") {
        BD.style.border = "1px solid red";
        errBD.classList.remove("hidden");
        errBD.innerHTML = "Please enter your birth date";
        allValid = false;
    } else {
        let userDate = new Date(BD.value);
        let now = new Date();
        let age = now.getFullYear() - userDate.getFullYear();

        if (age < 10 || age > 90) {
            BD.style.border = "1px solid red";
            errBD.classList.remove("hidden");
            errBD.innerHTML = "Please enter a valid age";
            allValid = false;
        } else {
            BD.style.border = "none";
            errBD.classList.add("hidden");
        }
    }


    // -----------------------------------------
    // 3) Check Email Structure (Regex)
    // -----------------------------------------
    let emailPtr = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPtr.test(email.value.trim())) {
        email.style.border = "1px solid red";
        errEmail.classList.remove("hidden");
        errEmail.innerHTML = "Invalid email format";
        allValid = false;
    } else {
        email.style.border = "none";
        errEmail.classList.add("hidden");
    }


    // -----------------------------------------
    // 4) Check if emails match
    // -----------------------------------------
    if (email.value.trim() !== coEmail.value.trim()) {
        coEmail.style.border = "1px solid red";
        errEmailCo.classList.remove("hidden");
        errEmailCo.innerHTML = "Emails do not match";
        allValid = false;
    } else {
        coEmail.style.border = "none";
        errEmailCo.classList.add("hidden");
    }


    // -----------------------------------------
    // 5) Password checks
    // -----------------------------------------

    // a) starts with capital letter  
    let passCap = /^[A-Z]/;

    // b) at least two numbers  
    let passNum = /(.*[0-9]){2,}/;

    // c) at least one special character  
    let passSym = /[!@#$%^&*(),.?":{}|<>]/;

    // e) length 8–32
    let passLen = password.value.length >= 8 && password.value.length <= 32;

    if (!passCap.test(password.value) || !passNum.test(password.value) || !passSym.test(password.value) || !passLen) {
        password.style.border = "1px solid red";
        errPass.classList.remove("hidden");
        errPass.innerHTML = 
        "Password must start with a capital letter, include at least 2 numbers, 1 symbol, and be 8–32 characters.";
        allValid = false;
    } else {
        password.style.border = "none";
        errPass.classList.add("hidden");
    }


    // d) Password confirmation
    if (password.value !== coPassword.value) {
        coPassword.style.border = "1px solid red";
        errPassCo.classList.remove("hidden");
        errPassCo.innerHTML = "Passwords do not match";
        allValid = false;
    } else {
        coPassword.style.border = "none";
        errPassCo.classList.add("hidden");
    }


    // -----------------------------------------
    // 6) Mobile Number (10 digits)
    // -----------------------------------------
    let mobilePtr = /^[0-9]{10}$/;

    if (!mobilePtr.test(mobile.value.trim())) {
        mobile.style.border = "1px solid red";
        errMobile.classList.remove("hidden");
        errMobile.innerHTML = "Mobile number must be exactly 10 digits";
        allValid = false;
    } else {
        mobile.style.border = "none";
        errMobile.classList.add("hidden");
    }

    return false;
}
