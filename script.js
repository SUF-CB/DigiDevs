window.onload=type;
var i = 0;
var txt = "Welcome to our Website!";

var speed = 50;

function type() {
    if (i < txt.length) {
        document.getElementById("DigiDevs").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
