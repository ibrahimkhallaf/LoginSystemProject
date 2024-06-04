var signupNameInput = document.getElementById("NameInput");
var signupEmailInput = document.getElementById("EmailInput");
var signupPassInput = document.getElementById("passInput");
var btnSignup = document.getElementById("passInput");
var signupPassInput = document.getElementById("passInput");
var UpWarning = document.getElementById("UpWarn");
var msgNameup = document.getElementById("msgNameup");
var msgemailup = document.getElementById("msgemailup");
var msgpassup = document.getElementById("msgpassup");
var loginEmailInput = document.getElementById("loginEmailInput");
var loginPassInput = document.getElementById("loginPassInput");
var loginWarn = document.getElementById("loginWarn");

var userslist = [];
if (localStorage.getItem("userdatalist") !== null){
    userslist = JSON.parse(localStorage.getItem("userdatalist"));
}

function Signup(event) {
    event.preventDefault();
    if( NameValidation() && PassValidation() && EmailValidation() && EmailAvailabilty()){
        var userdata = {
            name : signupNameInput.value,
            email : signupEmailInput.value,
            pass : signupPassInput.value
        }
        userslist.push(userdata);
        localStorage.setItem("userdatalist", JSON.stringify(userslist) );
        console.log("succes")
        window.location.href = "index2.html";
    }else if ( EmailAvailabilty() == false ){
        UpWarning.classList.remove("d-none")
    }else{
    };
}
function Login(event) {
    event.preventDefault();
    var email = loginEmailInput.value;
    var password = loginPassInput.value;
    var user = userslist.find(user => user.email === email && user.pass === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        window.location.href = "index3.html";
    } else {
        loginWarn.classList.remove("d-none");
        console.log("Invalid email or password");
    }
}

    
function EmailAvailabilty(){
    var emailExists = userslist.some(user => user.email === signupEmailInput.value);
    if (emailExists) {
        UpWarning.classList.remove("d-none");
        return false;
    } else {
        UpWarning.classList.add("d-none");
        return true;
    }
}
function NameValidation(){
    var text = signupNameInput.value;
    var nameregex = /^[a-zA-Z]{3,}$/;
    if(nameregex.test(text)){
        signupNameInput.classList.add("is-valid");
        signupNameInput.classList.remove("is-invalid");
        return true;
    }else{
        signupNameInput.classList.remove("is-valid");
        signupNameInput.classList.add("is-invalid");
        return false;
    }
}
function PassValidation(){
    var text2 = signupPassInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(passwordRegex.test(text2)){
        signupPassInput.classList.add("is-valid");
        signupPassInput.classList.remove("is-invalid");
        msgpassup.classList.add("d-none");
        return true;
    }else{
        signupPassInput.classList.remove("is-valid");
        signupPassInput.classList.add("is-invalid");
        msgpassup.classList.remove("d-none");
        return false;
    }
}
function EmailValidation(){
    var text3 = signupEmailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(text3)){
        signupEmailInput.classList.add("is-valid");
        signupEmailInput.classList.remove("is-invalid");
        msgemailup.classList.add("d-none");
        return true;
    }else{
        signupEmailInput.classList.remove("is-valid");
        signupEmailInput.classList.add("is-invalid");
        msgemailup.classList.remove("d-none");
        return false;
    }
}
