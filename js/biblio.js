function addMusician(){
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("fname").value;
    let instrus = document.getElementById("instrus").value;

    let table = document.getElementById("librairies");

    if(name == "" || firstname == ""){
        alert("Please fill in the form !");
    }
    else{
        var newRow = table.insertRow(table.length);
        var cell = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        cell.innerHTML = name;
        cell1.innerHTML = firstname;
        cell2.innerHTML = instrus;
    
        cell.style.border = "2px ridge rgb(67, 59, 59)";
        cell1.style.border = "2px ridge rgb(67, 59, 59)";
        cell2.style.border = "2px ridge rgb(67, 59, 59)";
        
    
        var cpt = 0; //on incrémente le compteur
        cpt = table.length - 1;
    
        var result = document.getElementById("result");
        result.innerHTML = "Vous avez " + cpt + " musiciens ajouté(s)";
    }
}