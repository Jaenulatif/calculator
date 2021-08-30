function clearOutput(){
    document.getElementById("output").innerHTML="0";
}

function removeZero(){
    let value = document.getElementById("output").innerHTML;
    if( value == "0"){
        value = " ";
        document.getElementById("output").innerHTML=value;
    }
}

function perc(){
    let value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML=value;
}

function forDisplay(myValue){
    removeZero()
    document.getElementById("output").innerHTML += myValue;
}

function result(){
    removeZero()
    let values = document.getElementById("output").innerHTML;
    let re = eval(values);
    document.getElementById("output").innerHTML=re;
}

function clearLastEntry(){
    removeZero()
    let value = document.getElementById("output").innerHTML;
    let lengthValue = value.length-1;
    let result =value.slice(0,lengthValue);
    document.getElementById("output").innerHTML=result;
}