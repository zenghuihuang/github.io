var ans = "";
var keep = false;
var zenghistory = [];

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
    var res= Math.sqrt(document.getElementById("result").value);
    document.getElementById("result").value = res
    zenghistory.push(res)
    showHistory()
}

function calculateCbrt() {
    var res = Math.cbrt(document.getElementById("result").value)
    document.getElementById("result").value = res
    zenghistory.push(res)
    showHistory()
}
//This function convert a number in binary to decimal
function binToDec() {
    var input = document.getElementById("result").value
    var result = 0
    var position = 1
    for (let i = input.length - 1; i >= 0; i--) {
        result = result + (input[i] * position)
        position = position * 2
    }
    document.getElementById("result").value = result
    zenghistory.push(result)
    showHistory()
}

function showHistory(){
    let text = "<ul>";
    zenghistory.forEach(myFunction);
    text += "</ul>";
    document.getElementById("result_default").innerHTML = text;

    function myFunction(value) {
    text += "<li>" + value + "</li>";
} 
}

function compute(a) {
    var input = document.getElementById("result").value
    switch (a) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
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
        case "**":
        case "%":
            buildExpression(a);
            keep = true;
            break;
        case "=":
            ans = calculate();
            zenghistory.push(ans)
            showHistory()
            keep = false;
            break;
        case 'celsiusb':
            alert("Jay")

            Fahrenheit_Temp = input;
            Fahrenheit_Temp = (Fahrenheit_Temp - 32) * 5 / 9;
            document.getElementById("result").value = Fahrenheit_Temp;
            zenghistory.push(Fahrenheit_Temp)
            showHistory()

            break;

        case 'fahrenheitb':
            alert("Jay")

            Celsius_Temp = input;
            Celsius_Temp = Celsius_Temp * 9 / 5 + 32;
            document.getElementById("result").value = Celsius_Temp
            zenghistory.push(Celsius_Temp)
            showHistory()
            break;

        case 'gramsb':

            //Convert gram to Oz 1 g=0.035274

            //alert(input * 0.035274) 0.035274
            oz = input * 0.03527396195
            document.getElementById("result").value = oz
            zenghistory.push(oz)
            showHistory()

            break;

        case 'ozb':

            //Convert oz to gram 
            gram = input * 28.34952312
            document.getElementById("result").value = gram
            zenghistory.push(gram)
            showHistory()
            break;
        //Convert a number from cm to Inches
        case 'cmb':
            cm = input * 0.393701;
            document.getElementById("result").value = cm
            zenghistory.push(cm)
            showHistory()
            break;
        //Convert a number from inches to cm
        case 'inchesb':
            inches = input * 2.54;
            document.getElementById("result").value = inches
            zenghistory.push(inches)
            showHistory()
            break;

        case 'dec-to-hex':
            var number = input; //The input value
            hexCharacters = ["A", "B", "C", "D", "E", "F"]; //Digits for 10-15, eliminates having case statements
            var hexString = "";

            while (number > 0) {
                var mod = number % 16; //Get the remainder
                number = Math.floor(number / 16); //Update number

                //Prepend the corresponding digit
                if (mod > 9) {
                    hexString = hexCharacters[mod - 10] + hexString; //Get the digits for 10-15 from the array
                } else {
                    hexString = mod.toString() + hexString;
                }
                document.getElementById("result").value = hexString
                

            }
            zenghistory.push(hexString)
            showHistory()
        break;
        case 'dec-to-bin':
            var number = input;
            var binString = "";

            while (number > 0) {
                var mod = number % 2; //Get the remainder
                number = Math.floor(number / 2); //Update number
                binString = mod.toString() + binString;

            }
            document.getElementById("result").value = binString
            zenghistory.push(binString)
                showHistory()
            break;

        case 'hex-to-dec':
            var len = input.length;
            // Initializing base value to 1, i.e 16^0
            var base = 1;
            var dec_val = 0;
            for (var i = len - 1; i >= 0; i--) {

                if (input.charAt(i) >= '0' &&
                    input.charAt(i) <= '9') {
                    dec_val += input.charAt(i) * base;

                    // incrementing base by power
                    base = base * 16;
                }

                // if character lies in 'A'-'F' , converting
                // it to integral 10 - 15 by subtracting 55
                // from ASCII value
                else if (input.charAt(i) >= 'A' &&
                    input.charAt(i) <= 'F') {
                    dec_val += (input.charAt(i).charCodeAt(0) - 55) * base;

                    // incrementing base by power
                    base = base * 16;
                }
            }


            document.getElementById("result").value = dec_val
            zenghistory.push(dec_val)
            showHistory()


            break;
    
        default:
            alert("error")
            break;
    }

}