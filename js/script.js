'use strict';
var outputC = document.getElementById('converter-outputC');
var alertC = document.getElementById('converter-alertC');
var buttonC = document.getElementById('converter-buttonC');

var outputF = document.getElementById('converter-outputF');
var alertF = document.getElementById('converter-alertF');
var buttonF = document.getElementById('converter-buttonF');

var tempC;
var tempF;

buttonC.addEventListener('click', function(){
    tempC = window.prompt('What is the temperature in Celsius?');
    if (isNaN(tempC) || !tempC) {
        alertC.innerHTML = ('<div class="alert alert-danger" role="alert">Please give a valid input.</div>');
        outputC.innerHTML = ('');
    } else {
        alertC.innerHTML = ('');
        tempF = 1.8 * tempC + 32;
        outputC.innerHTML = (tempC + ' in Celsius degrees is equal to ' + tempF + ' in Fahrenheit degrees.<br>');
        if (tempC < 0) {
            outputC.innerHTML += ('At this temperature, water is frozen.<br>');
        } else if (tempC < 100) {
            outputC.innerHTML += ('At this temperature, water is in a liquid state.<br>');
        } else {
            outputC.innerHTML += ('At this temperature, water is a steam.<br>');
        }
        if (tempC < 5) {
            outputC.innerHTML += ('You should put on a hat and a scarf.<br>');
        } else if (tempC < 15) {
            outputC.innerHTML += ('You should wear a jacket.<br>');
        } else {
            outputC.innerHTML += ('You can wear short pants.<br>');
        }
    }
}); 

buttonF.addEventListener('click', function(){
    tempF = window.prompt('What is the temperature in Fahrenheit?');
    if (isNaN(tempF) || !tempF) {
        alertF.innerHTML = ('<div class="alert alert-danger" role="alert">Please give a valid input.</div>');
        outputF.innerHTML = ('');
    } else {
        alertF.innerHTML = ('');
        tempC = Math.round((tempF - 32) / 1.8);
        outputF.innerHTML = (tempF + ' in Fahrenheit degrees is equal to ' + tempC + ' in Celsius degrees.<br>');
        if (tempC < 0) {
            outputF.innerHTML += ('At this temperature, water is frozen.<br>');
        } else if (tempC < 100) {
            outputF.innerHTML += ('At this temperature, water is in a liquid state.<br>');
        } else {
            outputF.innerHTML += ('At this temperature, water is a steam.<br>');
        }
        if (tempC < 5) {
            outputF.innerHTML += ('You should put on a hat and a scarf.<br>');
        } else if (tempC < 15) {
            outputF.innerHTML += ('You should wear a jacket.<br>');
        } else {
            outputF.innerHTML += ('You can wear short pants.<br>');
        }
    }
}); 
