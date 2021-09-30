
let ans="";
let expr="";
let NotOperation=true;

function buildexpression(a){
  expr+=a;
  document.getElementById("result").value=expr;

}
function buildexpression1(a){
  ans+=a;
  document.getElementById("result").value=ans;

}
function calculatexpression(){
  document.getElementById("result").value=eval(expr);
  ans=eval(expr);
  expr="";

}
function calculatexpression1(){
  ans=eval(ans);
  document.getElementById("result").value=ans;

}




function Display(a) {

  if(ans == "" && (a=="0" || a=="1"|| a=="2"|| a=="3"|| a=="4"
  || a=="5"|| a=="6"|| a=="7"|| a=="8"|| a=="9" || a==".") ){
 
    buildexpression(a); 
  
  }
  if(ans == "" && (a=="+" || a=="-"|| a=="*"|| a=="/") ){
 
    buildexpression(a); 
  
  }
  if(ans == "" && a=="="  ){
 
    calculatexpression();
  
  }
  if(ans !== "" &&  (a=="0" || a=="1"|| a=="2"|| a=="3"|| a=="4"
  || a=="5"|| a=="6"|| a=="7"|| a=="8"|| a=="9")  ){

    if(NotOperation==true){
      clearResult();
    }

    buildexpression1(a);
    
  
  }
  if(ans !== "" && (a=="+" || a=="-"|| a=="*"|| a=="/") ){
    NotOperation==false;
    
    buildexpression1(a); 
  
  }
  if(ans !== "" && a=="="){
    calculatexpression1(); 
  
  }

 
}


function clearResult(){
  ans="";
  expr="";
  operation=true;
  document.getElementById("result").value="";

     
   }