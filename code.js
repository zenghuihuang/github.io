var ans = "";
var keep = false;

function buildExpression(a) {

    document.getElementById("result").value += a;
}

function clearAnswer() {
    document.getElementById("result").value = "";
}

function calculate() {
    var answer = eval(document.getElementById("result").value);
    document.getElementById("result").value = answer;
    return answer;
}

function calculateSqrt() {
    document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}

function calculateCbrt() {
    document.getElementById("result").value = Math.cbrt(document.getElementById("result").value);
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
            if (ans !== "" && keep == false) {
                clearAnswer();
                ans = "";
            }
            buildExpression(a);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
        case '**':
        case '%':
            buildExpression(a);
            keep = true;
            break;
        case "=":
            ans = calculate();
            keep = false;
            break;
    }

}