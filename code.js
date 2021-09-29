function Calculate() {
    alert ("Hello World!")
   }


   
var first="";
function Display(a) {

  
  if (a!=='+' || a!=='-' || a!=='/' || a!=='*' ||a!=='=' ||a!=='.'){
    alert(typeof a)
    first.concat(a.toString());
    
    document.getElementById("result").value=first;
    
  }
}