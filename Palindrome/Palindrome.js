function palindrome() {
    x = document.getElementById("demo").value;
    z = x.trim();
    z = z.toLowerCase();
    let y = "";
    for (i = z.length - 1; i >= 0; i--) {
        y += z[i];
    }
    console.log(x);
    console.log(typeof (x));
    console.log(y);
    console.log(typeof (y));
    console.log(x[0])
    if (x == y) {
        document.getElementById('result').innerHTML = x + " is Palindrome";
    }
    else {
        document.getElementById('result').innerHTML = x + " is not Palindrome";
    }
}