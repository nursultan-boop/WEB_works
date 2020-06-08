
function func1(){
	var x, text;
  x = document.getElementById("phone").value;
  if (isNaN(x)|| x=="") {
    text = "Input not valid";
    document.getElementById(1).style.display = 'none';
  } else {
    text ="";
    var e = document.getElementById("phone").value
    var p = document.getElementById("number").value

  }
  document.getElementById("demo").innerHTML = text;
 console.log(x.length);
 if (x.length==12) {document.getElementById(1).style.display = 'block'; func2();}
}

function func2(){
	var text = document.getElementById("phone").value;
	var text2 = document.getElementById("number").value;
	document.getElementById("text").innerHTML = text;
	document.getElementById("balanse").innerHTML = text2;

}
function operators(){
    var g = document.getElementById("phone");
    var x = document.getElementById("operators");
    if(g.value == "+7747" || g.value == "+7707" || g.value == "+7700" || g.value == "7747" || g.value == "7707" || g.value == "7700"  ){
        x.src="images/tele2.jpg";
    }
    if(g.value == "+7777" || g.value == "+7771" || g.value == "+7705" || g.value == "+7776" || g.value == "7777" || g.value == "7771" || g.value == "7705" || g.value == "7776"   ){
        x.src="images/beeline.jpg";
    }
    if(g.value == "+7701" || g.value == "+7702" || g.value == "+7775" || g.value == "+7778" || g.value == "7701" || g.value == "7702" || g.value == "7775" || g.value == "7778"   ){
        x.src="images/active.jpg";
    }
    if (g.value == ""){x.src="images/operators.jpg";}
}