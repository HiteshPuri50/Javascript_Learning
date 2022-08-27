const arr = ['String1', 'String2', 12, 32, 'String1', 'string2', 22, 63];
console.log(arr);
console.log(arr.length);
(function () {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr.length);
        let j;
        for (j = 0; j < i; j++) {
            console.log(arr[i])
            if (arr[i] == arr[j]) {
                break;
            }
        }
        if (i == j){
            console.log(i);
            document.write(arr[i] + ",");
        }
    }
    //     for(let j = 0; j<i; j++)
    //     if(arr[i] == arr[j]){
    //     console.log(arr);
    //     break;
    // }
})(arr);
// if (i = j)
// console.log(arr);