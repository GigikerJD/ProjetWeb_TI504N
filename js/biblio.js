function addMusician(){
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("fname").value;
    let instrus = document.getElementById("instrus").value;

    let newLine = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    newLine.appendChild(cell1);
    newLine.appendChild(cell2);
    newLine.appendChild(cell3);

    let table = document.getElementById("librairies");

    if(name == "" || firstname == "" || instrus == ""){
        alert("Please fill in the form !");
    }
    else{
        table.appendChild(newLine);
        cell1.textContent = name;
        cell2.textContent = firstname;
        cell3.textContent = instrus;
    
        cell1.style.border = "2px ridge rgb(67, 59, 59)";
        cell2.style.border = "2px ridge rgb(67, 59, 59)";
        cell3.style.border = "2px ridge rgb(67, 59, 59)";
        
    
        var cpt = 0; //on incrémente le compteur
        cpt = table.length - 1;
    
        var result = document.getElementById("result");
        result.innerHTML = "Vous avez " + cpt + " musiciens ajouté(s)";
    }
}