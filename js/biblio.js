function addMusician(){
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("fname").value;
    let instrus = document.getElementById("instrus").value;

    let table = document.getElementById("librairies");
    

    var newLine = table.insertRow(table.rows.length);
    if(name == "" || firstname == "" || instrus == ""){
        alert("Please fill in the form, please !");
    }
    else {
        var cell0 = newLine.insertCell(0);
        var cell1 = newLine.insertCell(1);
        var cell2 = newLine.insertCell(2);

        cell0.innerHTML = name.value;
        cell1.innerHTML = firstname.value;
        cell2.innerHTML = instrus.value;

        cell0.style.border = "2px ridge rgb(67, 59, 59)";
        cell1.style.border = "2px ridge rgb(67, 59, 59)";
        cell2.style.border = "2px ridge rgb(67, 59, 59)";

        //let result = document.getElementById("result");
        //result.textContent = "Vous avez " + table.rows.length-1 + " musiciens ajouté(s)";
    }
}

