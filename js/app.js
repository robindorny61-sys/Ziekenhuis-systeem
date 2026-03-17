let patients = JSON.parse(localStorage.getItem("patients")) || [];
let afspraken = JSON.parse(localStorage.getItem("afspraken")) || [];

/* NAVIGATIE */
function show(id){
document.querySelectorAll(".card").forEach(c=>c.style.display="none");
document.getElementById(id).style.display="block";

render();
renderAfspraak();
}

/* ADD PATIENT */
function add(){

let p = {
naam: v("naam"),
leeftijd: v("leeftijd"),
aandoening: v("aandoening"),
medicatie: v("medicatie"),
verzekering: v("verzekering"),
spoed:false
};

patients.push(p);
save();
render();

alert("Opgeslagen!");
}

/* DELETE */
function del(i){
patients.splice(i,1);
save();
render();
}

/* SPOED TOGGLE */
function toggle(i){
patients[i].spoed = !patients[i].spoed;
save();
render();
}

/* RENDER */
function render(){

let table = document.getElementById("table");
if(!table) return;

table.innerHTML = `
<tr>
<th>Naam</th><th>Leeftijd</th><th>Aandoening</th>
<th>Medicatie</th><th>Verzekering</th>
<th>Status</th><th>Acties</th>
</tr>
`;

let spoed = 0;

patients.forEach((p,i)=>{

let r = table.insertRow();

r.insertCell(0).innerText = p.naam;
r.insertCell(1).innerText = p.leeftijd;
r.insertCell(2).innerText = p.aandoening;
r.insertCell(3).innerText = p.medicatie;
r.insertCell(4).innerText = p.verzekering;

let status = document.createElement("button");
status.innerText = p.spoed ? "🚨 SPOED" : "Normaal";

status.onclick = ()=>toggle(i);

if(p.spoed) spoed++;

r.insertCell(5).appendChild(status);

let delBtn = document.createElement("button");
delBtn.innerText = "❌";
delBtn.onclick = ()=>del(i);

r.insertCell(6).appendChild(delBtn);

});

document.getElementById("count").innerText = patients.length;
document.getElementById("spoed").innerText = spoed;
}

/* AFSPRAKEN */
function addAfspraak(){

let a = {
naam: v("aNaam"),
datum: v("aDatum"),
type: document.getElementById("aType").value
};

afspraken.push(a);
localStorage.setItem("afspraken", JSON.stringify(afspraken));

renderAfspraak();
}

/* RENDER AFSPRAKEN */
function renderAfspraak(){

let ul = document.getElementById("lijst");
if(!ul) return;

ul.innerHTML = "";

afspraken.forEach(a=>{
let li = document.createElement("li");

li.innerText = a.datum+" - "+a.naam+" ("+a.type+")";

if(a.type === "Spoed") li.style.color = "red";

ul.appendChild(li);
});
}

/* SAVE */
function save(){
localStorage.setItem("patients", JSON.stringify(patients));
}

/* HELPER */
function v(id){
return document.getElementById(id).value;
}

/* START */
render();
renderAfspraak();
