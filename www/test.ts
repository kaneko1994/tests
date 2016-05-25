
var a: any;
var b: any;
var c: any;

function bmi() {

    a = (<HTMLInputElement>document.getElementById("tall")).value;    
    a = a / 100;
    
    b = (<HTMLInputElement>document.getElementById("weight")).value;
    
    //a = document.getElementById("tall").value / 100;
    //b = document.getElementById("weight").value;
    
    c = b/(a*a);
    (<HTMLInputElement>document.getElementById("bmi")).value = c;
    
    alert("あなたのBMIは"+c+"です");
}