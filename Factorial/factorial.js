function fact() {
    let n = parseInt(document.getElementById('factorial').value);
    console.log(typeof (n))
    let facto = 1
    if (n.length = "") {
        document.getElementById('fact_result').innerHTML = "Not Possible";
    }
    else if (n < 0) {
        isPossible = false;
    }
    // if 
    else {
        for (i = n; i > 0; i--) {
            facto = facto * i;
        }
        // return facto;
        document.getElementById('fact_result').innerHTML = facto;
    }
}