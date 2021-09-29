function Calculate() {
    alert ("Hello World!")
   }


   
var first="";
function Display(a) {

  
  if (a!=='+' || a!=='-' || a!=='/' || a!=='*' ||a!=='=' ||a!=='.'){
    first=first+a;

    document.getElementById("result").value=first;
    
  }
}