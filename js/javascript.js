$(document).ready(function() {





	$("#onclick").click(function() {
		alert('Zur Zeit können leider keine Bewerbungen entgegen genommen werden.');
	});






// Färbt Hintergrund falls man "Schule" oder "Urlaub" ins Textfeld eingibt.
	$("#button1").click(function(){
    var x = document.getElementById("textfeld").value;
               if ( x === 'Schule') {
            $("h4").toggleClass("schule");
        }else if (x === "Urlaub"){
            $("h5").toggleClass("urlaub");
        } else {
            alert("Nur 'Urlaub' oder 'Schule' als Eingabe möglich.");
        }
        
    });








// So bekommt man das eingegeben Datum aus dem ersten Feld
// var y = document.getElementById("datum1").value;
// vergleiche eingegebene Daten mit Kalender und markiere die Felder der beiden stimmenden

});
