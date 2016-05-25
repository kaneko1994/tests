var a;
var b;
var c;

function bmi() {
    a = (document.getElementById("tall")).value;
    a = a / 100;

    b = (document.getElementById("weight")).value;

    c = b / (a * a);
    (document.getElementById("bmi")).value = c;

    alert("あなたのBMIは" + c + "です");
}
