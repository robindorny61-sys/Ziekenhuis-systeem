import { auth } from "./firebase.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.register = async ()=>{
let e = regEmail.value;
let p = regPass.value;
await createUserWithEmailAndPassword(auth,e,p);
alert("Account gemaakt");
}

window.login = async ()=>{
let e = loginEmail.value;
let p = loginPass.value;
await signInWithEmailAndPassword(auth,e,p);
location.href="dashboard.html";
}
