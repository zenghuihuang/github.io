

let second="";
let ans="";
function Display(a) {

    
  second+=a;
  document.getElementById("result").value=second;
    
   if(a !== '=' ){
 
    document.getElementById("result").value=eval(second);
      
  
  }
    
    

 
}

 
  



function clearResult(){

  document.getElementById("result").value="";
  first="";
  second="";
  operator="";
     
   }