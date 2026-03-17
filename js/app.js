/* ================= TELLERS ================= */

let patientCount = 0;
let spoedCount = 0;
let afspraakCount = 0;

/* ================= NAVIGATIE ================= */

function show(id){
document.querySelectorAll(".section").forEach(section => {
section.style.display = "none";
});

document.getElementById(id).style.display = "block";
}

/* ================= PATIENT TOEVOEGEN ================= */

function addPatient(){

let naam = document.getElementById("naam").value.trim();
let leeftijd = document.getElementById("leeftijd").value.trim();
let aandoening = document.getElementById("aandoening").value.trim();
let medicatie = document.getElementById("medicatie").value.trim();
let verzekering = document.getElementById("verzekering").value.trim();

/* CHECK */
if(naam === "" || leeftijd === ""){
alert("Vul naam en leeftijd in!");
return;
}

let table = document.getElementById("table");

if(!table){
alert("Ga naar 'Patiënten' om te zien!");
return;
}

/* NIEUWE RIJ */
let row = table.insertRow();

/* DATA */
row.insertCell(0).innerText = naam;
row.insertCell(1).innerText = leeftijd;
row.insertCell(2).innerText = aandoening;
row.insertCell(3).innerText = medicatie;
row.insertCell(4).innerText = verzekering;

/* SPOED KNOP */
let spoedBtn = document.createElement("button");
spoedBtn.innerText = "🚨";

spoedBtn.onclick = function(){

if(spoedBtn.innerText === "🚨"){
spoedBtn.innerText = "SPOED";
spoedBtn.style.background = "red";

spoedCount++;
}else{
spoedBtn.innerText = "🚨";
spoedBtn.style.background = "";

spoedCount--;
}

document.getElementById("sCount").innerText = spoedCount;

};

/* TOEVOEGEN */
row.insertCell(5).appendChild(spoedBtn);

/* TELLER */
patientCount++;
document.getElementById("pCount").innerText = patientCount;

/* RESET */
document.getElementById("naam").value = "";
document.getElementById("leeftijd").value = "";
document.getElementById("aandoening").value = "";
document.getElementById("medicatie").value = "";
document.getElementById("verzekering").value = "";

alert("Patiënt opgeslagen!");

}

/* ================= AFSPRAKEN ================= */

function addAfspraak(){

let naam = document.getElementById("aNaam").value.trim();
let type = document.getElementById("aType").value;
let tijd = document.getElementById("aTijd").value.trim();

if(naam === "" || tijd === ""){
alert("Vul alles in!");
return;
}

let li = document.createElement("li");
li.innerText = tijd + " - " + naam + " (" + type + ")";

/* kleur bij dringend */
if(type === "Dringend"){
li.style.color = "red";
}

document.getElementById("aList").appendChild(li);

/* teller */
afspraakCount++;
document.getElementById("aCount").innerText = afspraakCount;

/* reset */
document.getElementById("aNaam").value = "";
document.getElementById("aTijd").value = "";

}

/* ================= NOTITIES ================= */

function saveNote(){

let text = document.getElementById("note").value.trim();

if(text === ""){
alert("Schrijf iets!");
return;
}

let li = document.createElement("li");
li.innerText = text;

document.getElementById("noteList").appendChild(li);

document.getElementById("note").value = "";

}
