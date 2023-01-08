function showAccount(){
    let create = document.getElementsByClassName("create_account");
    let button = document.getElementById("change");
    
    button.addEventListener("click", () => {
        let signupDis = document.getElementsByClassName("create_account");
        if(signupDis.style.display == "none"){
            signupDis.style.display = "flex";
        }
        else if(signupDis.style.visibility == "hidden"){
            signupDis.style.visibility == "visible";
        }
    })
}


function Login(){
    let loginForm = document.forms["connect"];

    if(loginForm[0].value == "" && loginForm[1] == ""){
        alert("Please, you need to fill your email and password !");
    }
    else if(loginForm[0].value == "" && loginForm[1].value != ""){
        alert("Your email is missing !");
    }
    else if(loginForm[0].value != "" && loginForm[1].value == ""){
        alert("Your password is missing !");
    }
    else{
        let pra = document.getElementById("username");
        pra.innerText = "Bonjour " + loginForm[0] + "";
    }
}
