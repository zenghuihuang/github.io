var ans = "";
var expr = "";
var pressed = false;

function buildexpression(a) {
    expr += a;
    document.getElementById("result").value = expr;
}

function buildexpression1(a) {
    if (pressed == false) {
        ans = "";
        pressed = true;

    }
    ans += a;
    document.getElementById("result").value = ans;

}

function calculatexpression() {
    expr = eval(expr);
    document.getElementById("result").value = expr;
    ans = expr;
}

function calculatexpression1() {
    ans = eval(ans);
    document.getElementById("result").value = ans;
}

function calculateSqrt() {
    ans = Math.sqrt(expr);
    document.getElementById("result").value = ans;
}

function calculateCbrt() {
    ans = Math.cbrt(expr)
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
        case '**':
        case '%':
            pressed = true;
            if (ans == "") {
                buildexpression(a);

            } else {
                buildexpression1(a);

            }
            break;
        case "=":
            if (ans == "") {
                calculatexpression();

            } else {
                calculatexpression1();

            }
            pressed = false;
            break;
        case 'sqrt':
            calculateSqrt();
            break;
        case 'cbrt':
            calculateCbrt();
            break


    }

}

function clearResult() {
    ans = "";
    expr = "";
    pressed = false;
    document.getElementById("result").value = "";
}