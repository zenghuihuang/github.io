
let ans="";
let expr="";

function buildexpression(a){
  expr+=a;
  document.getElementById("result").value=expr;

}
function calculatexpression(){
  document.getElementById("result").value=eval(expr);
  ans=eval(expr);
  expr="";

}


function Display(a) {

  if(ans == "" && (a=="0" || a=="1"|| a=="2"|| a=="3"|| a=="4"
  || a=="5"|| a=="6"|| a=="7"|| a=="8"|| a=="9") ){
 
    buildexpression(a); 
  
  }
  if(ans == "" && (a=="+" || a=="-"|| a=="*"|| a=="/") ){
 
    buildexpression(a); 
  
  }
  if(ans !== "" && a=="="  ){
 
    calculatexpression();
  
  }
  if(ans !== "" &&  (a=="0" || a=="1"|| a=="2"|| a=="3"|| a=="4"
  || a=="5"|| a=="6"|| a=="7"|| a=="8"|| a=="9")  ){
 
    expr="";
    buildexpression(a);
    ans="";
  
  }
  if(ans !== "" && (a=="+" || a=="-"|| a=="*"|| a=="/") ){
    expr+=ans;
    buildexpression(a); 
  
  }
  if(ans !== "" && a=="="){
    expr+=ans;
    calculatexpression(); 
  
  }

 
}

 
  



function clearResult(){

  document.getElementById("result").value="";
  first="";
  second="";
  operator="";
     
   }