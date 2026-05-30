const accountForm = document.getElementById("accountForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const clearBtn = document.getElementById("clear");

accountForm.addEventListener("submit", function(event){
    event.preventDefault();

    const username = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(username === ""){
        alert("Username Can't Be Blank");
        return;
    }else if(username.length < 8 || username.length > 20){
        alert("Username Can't Be Under eight and Upper 20");
        return;
    }else if(!(/\d/.test(username))){
        alert("Username Need to Be Number Included");
        return;
    }else if(/[!@#$%^&*()]/.test(username)){
        alert("Username Can't Be Special Chars Included");
        return;
    }

    if(email === ""){
        alert("Email Can't Be Blank");
        return;
    }else if(!email.includes("@")){
        alert("Email Need to Be '@' Included");
        return;
    }

    if(password === ""){
        alert("Password Can't Be Blank");
        return;
    }else if(password.length < 8 || password.length > 20){
        alert("Password Can't Be Under eight and Upper 20");
        return;
    }else if(!(/\d/.test(password))){
        alert("Password Need to Be Number Included");
        return;
    }else if(!(/[!@#$%^&*()]/.test(password))){
        alert("Password Need to Be Special Chars Included");
        return;
    }
    
})

clearBtn.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
})