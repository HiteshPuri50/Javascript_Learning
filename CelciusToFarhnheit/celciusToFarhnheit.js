function convert_Cel_2_Far() {
    var celcius = parseInt(document.getElementById('cel').value);
    fahrenheit = celcius * (9 / 5) + 32;
    document.getElementById('cel_result').value = fahrenheit;
}
function convert_Far_2_Cel() {
    var fahrenheit = document.getElementById('far').value;
    celcius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById('far_result').value = celcius;
}