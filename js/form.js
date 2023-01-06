let inscription_link = document.getElementById("account");

inscription_link.addEventListener("click", showAccount);

function showAccount(){
    let create = document.getElementsByClassName("create_account");
    if(create.style.display == "none") {
        create.style.display == "flex";
    }
}


function Login(){
    let loginForm = document.get

    if(loginForm[0].value == "" || loginForm[1] == ""){
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
        pra.innerHTML = "Bonjour " + loginForm[0];
    }
}
