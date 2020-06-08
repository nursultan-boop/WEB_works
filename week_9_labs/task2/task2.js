function progress() { 
    var element = document.getElementById("progbar"); 
    var a = document.getElementById('pr').value;   
    var width = 0; 
    var identity = setInterval(scene, 20); 
    function scene() { 
      if (width >= a) { 
        clearInterval(identity); 
      } else { 
        width++;  
        element.style.width = width + '%';  
      } 
    } 
  } 