'use strict';
var output = document.getElementById('converter-output');

output.innerHTML = '<br><br>Click the button if you want to convert the temperature.' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('converter-button');
var tempC;
var tempF;

button.addEventListener('click', function(){
    
    tempC = window.prompt('What is the temperature in Celsius?');
    if (isNaN(tempC) || !tempC) {
        alert('It is not a number. Give a valid input.')
    }
    else
    {
        tempF = 1.8 * tempC + 32;
        output.innerHTML = (tempC + ' in Celsius is ' + tempF + ' in Fahrenheit.<br><br>') + output.innerHTML; 
    }

	
}); 


