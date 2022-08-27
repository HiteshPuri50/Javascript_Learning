document.write("<table width='500' height='500'>");
for (let i = 1; i < 9; i++) {
// if( i % 2 == 0)
// document.write('<div style ="background-color:white"></div>');
    document.write("<tr>");
    for (let j = 1; j < 9; j++) {
        k = i + j;
        if (k % 2 == 0) {
            document.write('<td bgcolor = "white"></td>');
            console.log('if');
        }
        else {
            document.write('<td bgcolor = "black"></td>');
            console.log('else');
        }
    }
}