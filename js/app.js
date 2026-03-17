let totaal = 0;
let spoed = 0;

function showSection(id){
document.querySelectorAll(".section").forEach(sec => sec.style.display="none");
document.getElementById(id).style.display="block";
}

function addPatient(){

let naam = document.getElementById("naam").value;
let leeftijd = document.getElementById("leeftijd").value;
let aandoening = document.getElementById("aandoening").value;
let medicatie = document.getElementById("medicatie").value;
let type = document.getElementById("type").value;
let verzekering = document.getElementById("verzekering").value;

if(!naam || !leeftijd){
alert("Vul alles in");
return;
}

let table = document.getElementById("table");
let row = table.insertRow();

row.insertCell(0).innerHTML = naam;
row.insertCell(1).innerHTML = leeftijd;
row.insertCell(2).innerHTML = aandoening;
row.insertCell(3).innerHTML = medicatie;
row.insertCell(4).innerHTML = type;
row.insertCell(5).innerHTML = verzekering;

/* SPOED KNOP */
let spoedCell = row.insertCell(6);

let btn = document.createElement("button");
btn.innerHTML = "🚨 Spoed";

btn.onclick = function(){
btn.style.background = "red";
btn.innerHTML = "SPOED!";
spoed++;
document.getElementById("spoedCount").innerText = spoed;
}

spoedCell.appendChild(btn);

/* teller */
totaal++;
document.getElementById("count").innerText = totaal;

/* reset */
document.getElementById("naam").value="";
document.getElementById("leeftijd").value="";
document.getElementById("aandoening").value="";
document.getElementById("medicatie").value="";
document.getElementById("verzekering").value="";

}
