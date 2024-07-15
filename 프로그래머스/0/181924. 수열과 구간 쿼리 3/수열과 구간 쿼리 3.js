function solution(arr, queries) {
    var answer = [];
    console.log(arr)
    for(var querie of queries){
        var a = querie[0]
        var b = querie[1]
        var i = arr[querie[0]]
        var j = arr[querie[1]]

        arr[a] = j
        arr[b] = i
    }
    return arr;
}