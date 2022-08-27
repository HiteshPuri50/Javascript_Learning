function chkPrime() {
    let i = document.getElementById('prime').value;
    if (i.length == "") {
        alert("This is not a valid Number");
    }

    else if (i == 0 || i == 1) {
        document.getElementById('result_prime').innerHTML = i + "is not Prime Number";
    }
    else {
        for (let n = 2; i > n; n++) {
            if (i % n == 0) {
                document.getElementById('result_prime').innerHTML = i + " is not Prime Number";
                break;
            }
            else {
                document.getElementById('result_prime').innerHTML = i + " is prime number";
            }
        }
    }
}