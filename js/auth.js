/* USERS OPSLAAN */

let users = JSON.parse(localStorage.getItem("users")) || [];

/* REGISTER */

function register(){

let user = document.getElementById("regUser").value;
let pass = document.getElementById("regPass").value;

if(user === "" || pass === ""){
alert("Vul alles in");
return;
}

users.push({user, pass});
localStorage.setItem("users", JSON.stringify(users));

alert("Account gemaakt!");
}

/* LOGIN */

function login(){

let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;

let found = users.find(u => u.user === user && u.pass === pass);

if(found){

localStorage.setItem("currentUser", user);
window.location.href = "dashboard.html";

}else{
alert("Foute login");
}

}
