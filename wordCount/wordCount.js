function wordcount(){
    string = document.getElementById("string").value;
        var count = 0;
        var words = string.split(" ");
        console.log(words);
        for(i = 0; i< words.length; i++){
            if(words[i] != " "){
                count += 1;
            }
        }
        console.log(count);
        document.getElementById('count').innerHTML = count;
        return (count);
}