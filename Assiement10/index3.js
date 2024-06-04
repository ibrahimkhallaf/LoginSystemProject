
var currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
    document.getElementById("currentusername").innerHTML = currentUser.name;
} else {
    window.location.href = "index2.html";
}
document.getElementById("Logoutbtn").addEventListener("click", Logout)
function Logout() {
    localStorage.removeItem("currentUser"); 
}
