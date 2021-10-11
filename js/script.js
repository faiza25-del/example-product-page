function hideAll(){
    document.getElementById("id1").style.display="none";
    document.getElementById("id2").style.display="none";
    document.getElementById("id3").style.display="none";
    document.getElementById("id4").style.display="none";
    document.getElementById("id5").style.display="none";
    document.getElementById("id6").style.display="none";
    document.getElementById("id7").style.display="none";
    document.getElementById("id8").style.display="none";
    document.getElementById("id9").style.display="none";
    document.getElementById("id10").style.display="none";
    document.getElementById("id12").style.display="none";
    document.getElementById("id13").style.display="none";
    document.getElementById("id14").style.display="none";
    document.getElementById("id15").style.display="none";
    document.getElementById("id16").style.display="none";
    document.getElementById("id17").style.display="none";
    document.getElementById("id18").style.display="none";
}
function show(elementId){
    hideAll();
    document.getElementById(elementId).style.display="block";
}