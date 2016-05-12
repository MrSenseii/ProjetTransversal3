/**
 * Created by Erwana on 04/05/2016.
 */

var button = document.getElementById("bouton");

//var newpass = document.getElementById("mdpchang").value;


var pass = "password";

button.addEventListener("click", function(event){
    event.preventDefault();
    if(document.getElementById("mdp").value == pass){
        document.location.href = "html/changemdp.html";
    } else {
        alert("Le mot de passe enregistré ne correspond pas. Veuillez réessayer");
    }
})
