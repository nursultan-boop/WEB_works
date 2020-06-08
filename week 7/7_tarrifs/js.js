      function function_2()
      {

        var enteredPrise = document.getElementById("find").value
        if(enteredPrise >1389 && (enteredPrise <10000 ))
        {

         if ((enteredPrise <2990 )) {
           document.getElementById("1").style.display = "block"
          document.getElementById("2").style.display = "none"
          document.getElementById("3").style.display = "none"
         }
          if ((enteredPrise >=2990) && (enteredPrise <4900) ) {
           document.getElementById("1").style.display = "block"
          document.getElementById("2").style.display = "none"
          document.getElementById("3").style.display = "block "
         }
          if ((enteredPrise >=4900) ) {
           document.getElementById("1").style.display = "block"
          document.getElementById("2").style.display = "block"
          document.getElementById("3").style.display = "block"
         }
         }
        if (enteredPrise>10000){
          document.getElementById("qoy").innerHTML = "Койей слишком";
        }
        if(isNaN(enteredPrise)){
          document.getElementById("qoy").innerHTML = "BAD INPUT";
                     document.getElementById("1").style.display = "block"
          document.getElementById("2").style.display = "block"
          document.getElementById("3").style.display = "block"
        } 


        
    }
        
      
         function function_1(){
          var x = document.getElementById("find").value;
  if (isNaN(x) || x=="") {
          document.getElementById("1").style.display = "block"
          document.getElementById("2").style.display = "block"
          document.getElementById("3").style.display = "block"
         }
    }