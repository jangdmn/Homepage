function button() {
    var finalText = "<textarea id=control rows=20 cols=152></textarea>";
    document.getElementById('final').innerHTML = finalText;
    text = "*" + document.getElementById("heading").value + "*" + "\n" + "*Frist:* " + "\n" + document.getElementById("frist").value + "\n\n\n" + 
    "*Aufgabenbeschreibung:* " + "\n" + document.getElementById("aufgabe").value + "\n\n\n" +
    "*Ziel:* " + "\n" + document.getElementById("ziel").value;

    document.getElementById("control").value = text;
    document.getElementById("control").focus();
    document.getElementById("control").select();
    document.execCommand('copy');
}