function Calculate(a,b,c) {
    if(c=="+"){
      
      return a + b;
     }
     if(c=="-"){
      return a - b;
      
    }
    if(c=="*"){
      
      return a * b;
    }
    if(c=="/"){
      
      return a / b;
    }

   }


   
let first="";
let operator="";
let second="";
function Display(a) {

  
  
  if (a!=='+' && a!=='-' && a!=='/' && a!=='*'){

    if (operator==""){
      first+=a;
      document.getElementById("result").value=first;
    }else{

      second+=a;
      document.getElementById("result").value=second;
   }
    
  }
  else{

  operator=a;
     
   }

   second+=a;
   if(document.getElementById("result").value == undefined){
     
    document.getElementById("result").value=Calculate(first,second,operator);
      
        
      }

 

 
}

function clearResult(){

  document.getElementById("result").value="";
  first="";
  second="";
  operator="";
     
   }