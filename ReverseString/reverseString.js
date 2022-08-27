function reverseString() {
    let rev1 = String(document.getElementById('rev').value)
    let rev0 = rev1.trim();
    let rev2 = rev0.replace(/\s+/g, "");
    let newstr = "";
    for (i = rev2.length - 1; i >= 0; i--) {
        newstr += rev2[i];
        document.getElementById('org_string').innerHTML = newstr;
    }
}