var chgtmdp = document.getElementById('chgtmdp');
var gestiongrps = document.getElementById('gestiongrps');
var gestioncapt = document.getElementById('gestioncapt');

chgtmdp.addEventListener("mouseover", function(){
    document.getElementById('bla1').classList.toggle('closed');
});

chgtmdp.addEventListener("mouseout", function(){
    document.getElementById('bla1').classList.toggle('closed');
});

gestiongrps.addEventListener("mouseover", function(){
    document.getElementById('bla2').classList.toggle('closed');
});

gestiongrps.addEventListener("mouseout", function(){
    document.getElementById('bla2').classList.toggle('closed');
});

gestioncapt.addEventListener("mouseover", function(){
    document.getElementById('bla3').classList.toggle('closed');
});

gestioncapt.addEventListener("mouseout", function(){
    document.getElementById('bla3').classList.toggle('closed');
});