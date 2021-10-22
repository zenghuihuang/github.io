var ans = "";
var expr = "";

function buildexpression(a) {
    expr += a;
    document.getElementById("result").value = expr;

}

function buildexpression1(a) {
    ans += a;
    document.getElementById("result").value = ans;

}

function calculatexpression() {
    document.getElementById("result").value = eval(expr);
    ans = eval(expr);
    expr = "";

}

function calculatexpression1() {
    ans = eval(ans);
    document.getElementById("result").value = ans;

}




function Display(a) {
    switch (a) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case ".":
            if (ans == "") {
                buildexpression(a);
                break;
            } else {
                buildexpression1(a);
                break;

            }

        case "+":
        case "-":
        case "*":
        case "/":
            if (ans == "") {

                buildexpression(a);
                break;
            } else {
                
                buildexpression1(a);
                break;

            }


        case "=":
            if (ans == "") {
                calculatexpression();
                break;
            } else {
                calculatexpression1();
                break;

            }


    }

}



function clearResult() {
    ans = "";
    expr = "";
    document.getElementById("result").value = "";


}