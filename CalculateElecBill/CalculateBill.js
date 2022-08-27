function calculateBill() {
    let i = Number(document.getElementById('unit').value);
    console.log(i);
    if (i <= 50) {
        z = i * 3.50;
        console.log(z);
        document.getElementById('resultBill').innerHTML = "Your Consumption of units " + i + " billed as " + z;
    }
    else if (i > 150 && i <= 250) {
        z = (i - 100 - 50) * 5.20;
        console.log(z);
        x = (100 * 4) + (50 * 3.50) + z;
        console.log(x);
        document.getElementById('resultBill').innerHTML = "Your Consumption of units " + i + " billed as " + x;
    }
    else if (i > 50 && i <= 150) {
        console.log(i);
        z = (i - 50) * (4.00) + (50 * 3.50);
        console.log(z);
        document.getElementById('resultBill').innerHTML = "Your Consumption of units " + i + " billed as " + z;
    }
    else if (i > 250) {
        z = i * 6.50;
        console.log(z);
        document.getElementById('resultBill').innerHTML = "Your Consumption of units " + i + " billed as " + z;
    }
}