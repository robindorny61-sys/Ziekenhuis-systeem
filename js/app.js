import { db } from "./firebase.js";
import {
collection, addDoc, getDocs, deleteDoc, doc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* NAV */
window.show = (id)=>{
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
if(id==="patients") load();
}

/* ADD */
window.addPatient = async ()=>{
await addDoc(collection(db,"patients"),{
naam:naam.value,
leeftijd:leeftijd.value,
aandoening:aandoening.value,
medicatie:medicatie.value,
verzekering:verzekering.value,
spoed:false
});
alert("Opgeslagen");
}

/* LOAD */
async function load(){

let table = document.getElementById("table");

table.innerHTML=`
<tr>
<th>Naam</th><th>Leeftijd</th><th>Aandoening</th>
<th>Medicatie</th><th>Verzekering</th><th>Spoed</th><th>Acties</th>
</tr>
`;

let data = await getDocs(collection(db,"patients"));

let spoedCount=0;
let totaal=0;

data.forEach(d=>{

let p=d.data();
let row=table.insertRow();

row.insertCell(0).innerText=p.naam;
row.insertCell(1).innerText=p.leeftijd;
row.insertCell(2).innerText=p.aandoening;
row.insertCell(3).innerText=p.medicatie;
row.insertCell(4).innerText=p.verzekering;

/* SPOED */
let btn=document.createElement("button");
btn.innerText=p.spoed?"SPOED":"🚨";

if(p.spoed){btn.style.background="red";spoedCount++;}

btn.onclick=async ()=>{
await updateDoc(doc(db,"patients",d.id),{
spoed:!p.spoed
});
load();
};

row.insertCell(5).appendChild(btn);

/* DELETE */
let del=document.createElement("button");
del.innerText="❌";
del.onclick=async ()=>{
await deleteDoc(doc(db,"patients",d.id));
load();
};

row.insertCell(6).appendChild(del);

totaal++;

});

pCount.innerText=totaal;
sCount.innerText=spoedCount;

}

/* SEARCH */
window.search=()=>{
let val=search.value.toLowerCase();
document.querySelectorAll("#table tr").forEach((r,i)=>{
if(i===0)return;
r.style.display=r.innerText.toLowerCase().includes(val)?"":"none";
});
}

/* AFSPRAKEN */
window.addAppointment=()=>{
let li=document.createElement("li");
li.innerText=aTijd.value+" - "+aNaam.value+" ("+aType.value+")";
if(aType.value==="Dringend") li.style.color="red";
aList.appendChild(li);
}

/* LOGOUT */
window.logout=()=>location.href="index.html";
