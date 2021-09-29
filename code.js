function Calculate() {
    alert ("Hello World!")
   }

function Display(a) {

  var first=""
  if (a!=='+' || a!=='-' || a!=='/' || a!=='*' ||a!=='=' ||a!=='.'){
    first=first+a;

    document.getElementById("result").value=first;
    
  }
}