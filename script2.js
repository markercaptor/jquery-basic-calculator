// JavaScript source code
var value1, value2, value3, operatorBuffer
function Calculate(value) {
    if (value != '*' && value != '=')
    {
        document.getElementById("Buffer").innerHTML += value;
        document.getElementById("Result").innerHTML += value;
    }
    else if (value == '*')
    {
        value1 = document.getElementById("Result").innerHTML;
        document.getElementById("Result").innerHTML = '';
        document.getElementById("Buffer").innerHTML += '' + value + '';

    }
    else
    {
        value2 = document.getElementById("Result").innerHTML;
        document.getElementById("Result").innerHTML = value1 * value2;
        document.getElementById("Buffer").innerHTML = '';
    }
}