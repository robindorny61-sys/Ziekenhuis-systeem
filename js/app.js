/* ================= DATA ================= */

let patients = JSON.parse(localStorage.getItem("patients")) || [];

/* ================= NAVIGATIE ================= */

function show(id){
document.querySelectorAll(".section").forEach(s => s.style.display="none");
document.getElementById(id).style.display="block";

if(id === "lijst"){
renderPatients();
}
}

/* ================= OPSLAAN ================= */

function saveData(){
localStorage.setItem("patients", JSON.stringify(patients));
}

/* ================= PATIENT TOEVOEGEN ================= */

function addPatient(){

let naam = document.getElementById("naam").value.trim();
let leeftijd = document.getElementById("leeftijd").value.trim();
let aandoening = document.getElementById("aandoening").value.trim();
let medicatie = document.getElementById("medicatie").value.trim();
let verzekering = document.getElementById("verzekering").value.trim();

if(naam === "" || leeftijd === ""){
alert("Vul naam en leeftijd in!");
return;
}

let patient = {
naam,
leeftijd,
aandoening,
medicatie,
verzekering,
spoed:false
};

patients.push(patient);
saveData();
updateDashboard();
clearInputs();

alert("Patiënt opgeslagen!");
}

/* ================= RENDER ================= */

function renderPatients(){

let table = document.getElementById("table");

/* reset tabel */
table.innerHTML = `
<tr>
<th>Naam</th>
<th>Leeftijd</th>
<th>Aandoening</th>
<th>Medicatie</th>
<th>Verzekering</th>
<th>Spoed</th>
<th>Acties</th>
</tr>
`;

patients.forEach((p, index) => {

let row = table.insertRow();

row.insertCell(0).innerText = p.naam;
row.insertCell(1).innerText = p.leeftijd;
row.insertCell(2).innerText = p.aandoening;
row.insertCell(3).innerText = p.medicatie;
row.insertCell(4).innerText = p.verzekering;

/* SPOED */
let spoedBtn = document.createElement("button");
spoedBtn.innerText = p.spoed ? "SPOED" : "🚨";

if(p.spoed){
spoedBtn.style.background = "red";
}

spoedBtn.onclick = function(){
p.spoed = !p.spoed;
saveData();
renderPatients();
updateDashboard();
};

row.insertCell(5).appendChild(spoedBtn);

/* ACTIES */
let acties = document.createElement("div");

/* verwijderen */
let delBtn = document.createElement("button");
delBtn.innerText = "❌";
delBtn.onclick = function(){
patients.splice(index,1);
saveData();
renderPatients();
updateDashboard();
};

/* bewerken */
let editBtn = document.createElement("button");
editBtn.innerText = "✏️";
editBtn.onclick = function(){

let nieuweNaam = prompt("Nieuwe naam:", p.naam);
if(nieuweNaam) p.naam = nieuweNaam;

saveData();
renderPatients();
};

acties.appendChild(editBtn);
acties.appendChild(delBtn);

row.insertCell(6).appendChild(acties);

});

}

/* ================= DASHBOARD ================= */

function updateDashboard(){

let totaal = patients.length;
let spoed = patients.filter(p => p.spoed).length;

document.getElementById("pCount").innerText = totaal;
document.getElementById("sCount").innerText = spoed;

}

/* ================= ZOEKEN ================= */

function searchPatient(){

let input = document.getElementById("search").value.toLowerCase();

let rows = document.querySelectorAll("#table tr");

rows.forEach((row, i) => {

if(i === 0) return;

let naam = row.cells[0].innerText.toLowerCase();

row.style.display = naam.includes(input) ? "" : "none";

});

}

/* ================= HELPERS ================= */

function clearInputs(){
document.querySelectorAll("input").forEach(i => i.value="");
}

/* ================= START ================= */

updateDashboard();
