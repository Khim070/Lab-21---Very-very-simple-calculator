
function plus(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var value1 = parseFloat(val1);
    var value2 = parseFloat(val2);
    var result = value1 + value2;
    document.getElementById('result').innerHTML = result;
}

function minus(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var value1 = parseFloat(val1);
    var value2 = parseFloat(val2);
    var result = value1 - value2;
    document.getElementById('result').innerHTML = result;
}

function multiply(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var value1 = parseFloat(val1);
    var value2 = parseFloat(val2);
    var result = value1 * value2;
    document.getElementById('result').innerHTML = result;
}

function divide(){
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var value1 = parseFloat(val1);
    var value2 = parseFloat(val2);
    var result = value1 / value2;
    document.getElementById('result').innerHTML = result;
}