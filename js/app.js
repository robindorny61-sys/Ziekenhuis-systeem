let pCount = 0;
let sCount = 0;
let aCount = 0;

/* navigatie */
function show(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

/* PATIENT */
function addPatient(){

let naam = naamInput("naam");
let leeftijd = naamInput("leeftijd");
let aandoening = naamInput("aandoening");
let medicatie = naamInput("medicatie");
let verzekering = naamInput("verzekering");

if(!naam) return alert("Naam nodig");

let table = document.getElementById("table");
let row = table.insertRow();

row.insertCell(0).innerHTML = naam;
row.insertCell(1).innerHTML = leeftijd;
row.insertCell(2).innerHTML = aandoening;
row.insertCell(3).innerHTML = medicatie;
row.insertCell(4).innerHTML = verzekering;

/* SPOED */
let spoedBtn = document.createElement("button");
spoedBtn.innerHTML="🚨";

spoedBtn.onclick=function(){
spoedBtn.style.background="red";
sCount++;
document.getElementById("sCount").innerText=sCount;
}

row.insertCell(5).appendChild(spoedBtn);

/* teller */
pCount++;
document.getElementById("pCount").innerText=pCount;

/* reset */
clearInputs();

}

/* AFSPRAKEN */
function addAfspraak(){

let naam = naamInput("aNaam");
let type = document.getElementById("aType").value;
let tijd = naamInput("aTijd");

let li = document.createElement("li");
li.innerHTML = tijd+" - "+naam+" ("+type+")";

document.getElementById("aList").appendChild(li);

aCount++;
document.getElementById("aCount").innerText=aCount;

}

/* NOTITIES */
function saveNote(){

let text = document.getElementById("note").value;

let li = document.createElement("li");
li.innerText = text;

document.getElementById("noteList").appendChild(li);

document.getElementById("note").value="";

}

/* helpers */
function naamInput(id){
return document.getElementById(id).value;
}

function clearInputs(){
document.querySelectorAll("input").forEach(i=>i.value="");
}
