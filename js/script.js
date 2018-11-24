'use strict';
(function() { //encapsulation starts here
    var outputC = document.getElementById('converter-outputC');
    var alertC = document.getElementById('converter-alertC');
    var buttonC = document.getElementById('converter-buttonC');
    var outputF = document.getElementById('converter-outputF');
    var alertF = document.getElementById('converter-alertF');
    var buttonF = document.getElementById('converter-buttonF');

    var tempC;
    var tempF;

    //Funtion determines if user type a valid input, return alert if not
    var isTempValid = function(temp, alert, output) {
        if (isNaN(temp) || !temp) {
            output.innerHTML = ('');
            alert.innerHTML = ('<div class="alert alert-danger" role="alert">Please give a valid input.</div>');
            return false;
        } else {
            alert.innerHTML = ('');
            return true;
        }
    }

    //Converting from Celsius to Fahrenheit
    var convertCtoF = function(tempC) {
        tempF = Math.round(1.8 * tempC + 32);
        outputC.innerHTML = (tempC + ' in Celsius degrees is equal to ' + tempF + ' in Fahrenheit degrees.<br>');
        return tempF;
    }

    //Converting from Fahrenheit to Celsius
    var convertFtoC = function(tempF) {
        tempC = Math.round((tempF - 32) / 1.8);
        outputF.innerHTML = (tempF + ' in Fahrenheit degrees is equal to ' + tempC + ' in Celsius degrees.<br>');
        return tempC;
    }

    // Function gives user an information what should he wear
    var whatToWear = function(tempC, output) {
        if (tempC < 5) {
            output.innerHTML += ('You should put on a hat and a scarf.<br>');
        } else if (tempC < 15) {
            output.innerHTML += ('You should wear a jacket.<br>');
        } else {
            output.innerHTML += ('You can wear short pants.<br>');
        }
    }

    // Function gives user an information in what state water is
    var whatState = function(tempC, output) {
        if (tempC < 0) {
            output.innerHTML += ('At this temperature, water is frozen.<br>');
        } else if (tempC < 100) {
            output.innerHTML += ('At this temperature, water is in a liquid state.<br>');
        } else {
            output.innerHTML += ('At this temperature, water is a steam.<br>');
        }
    }

    buttonC.addEventListener('click', function(){
        tempC = window.prompt('What is the temperature in Celsius?');
        if (isTempValid(tempC, alertC, outputC)) {
            convertCtoF(tempC);
            whatToWear(tempC, outputC);
            whatState(tempC, outputC);
        }
    }); 

    buttonF.addEventListener('click', function(){
        tempF = window.prompt('What is the temperature in Fahrenheit?');
        if (isTempValid(tempF, alertF, outputF)) {
            convertFtoC(tempF);
            whatToWear(tempC, outputF);
            whatState(tempC, outputF);
        }
    });
})(); //encapsulation ends here
