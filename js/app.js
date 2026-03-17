/* LOGIN */

function login(){
let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

if(user === "dokter" && pass === "1234"){
window.location.href = "dashboard.html";
}else{
alert("Foute login");
}
}

/* LOGOUT */

function logout(){
window.location.href = "index.html";
}

/* NAV */

function show(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

/* DATA */

let patients = JSON.parse(localStorage.getItem("patients")) || [];

/* ADD PATIENT */

function addPatient(){

let naam = naamInput("naam");
let leeftijd = naamInput("leeftijd");
let aandoening = naamInput("aandoening");
let medicatie = naamInput("medicatie");

if(!naam) return alert("Vul naam in");

patients.push({
naam,
leeftijd,
aandoening,
medicatie,
spoed:false
});

save();
render();
}

/* SAVE */

function save(){
localStorage.setItem("patients", JSON.stringify(patients));
}

/* RENDER */

function render(){

let table = document.getElementById("table");

if(!table) return;

table.innerHTML = `
<tr>
<th>Naam</th><th>Leeftijd</th><th>Aandoening</th><th>Medicatie</th><th>Spoed</th>
</tr>
`;

let spoed = 0;

patients.forEach((p,i)=>{

let row = table.insertRow();

row.insertCell(0).innerText = p.naam;
row.insertCell(1).innerText = p.leeftijd;
row.insertCell(2).innerText = p.aandoening;
row.insertCell(3).innerText = p.medicatie;

let btn = document.createElement("button");
btn.innerText = p.spoed ? "SPOED" : "🚨";

btn.onclick = function(){
p.spoed = !p.spoed;
save();
render();
};

if(p.spoed) spoed++;

row.insertCell(4).appendChild(btn);

});

document.getElementById("count").innerText = patients.length;
document.getElementById("spoedCount").innerText = spoed;

}

/* AFSPRAKEN */

function addAfspraak(){

let naam = naamInput("aNaam");
let tijd = naamInput("aTijd");
let type = document.getElementById("aType").value;

let li = document.createElement("li");

li.innerText = tijd + " - " + naam + " (" + type + ")";

if(type === "Dringend") li.style.color = "red";

document.getElementById("aList").appendChild(li);

}

/* HELPER */

function naamInput(id){
return document.getElementById(id).value;
}

/* START */

render();
