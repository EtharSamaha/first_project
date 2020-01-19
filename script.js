function myFunction1() {
var x = document.getElementById("input2").value;
var y = document.getElementById("input3").value;

if(y.length >= 8 && x.length > 0) {
    var h = window.prompt("Enter your name");
    alert("Welcome " + h);
    document.write('<h1>' + h + '</h1>');


}else if(y.length < 8 && y.length>0){
    alert("Password must be more than 8");

}else alert("Fill all fields");

}

