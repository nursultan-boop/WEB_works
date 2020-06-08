function calculate() {
    var x = document.getElementById('base').value;
    var y = document.getElementById('height').value;
    c = x * y / 2;
    document.getElementById("area").innerHTML = c;

}