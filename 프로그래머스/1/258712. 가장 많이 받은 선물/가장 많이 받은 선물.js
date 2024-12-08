function solution(friends, gifts) {
    var len = friends.length
    var arr = new Array(len).fill(0).map(() => new Array(len).fill(0));
    var total = new Array(len).fill(0)
    var present = new Array(len).fill(0)

    for (var gift of gifts) {
        var a = gift.split(' ')[0]
        var b = gift.split(' ')[1]
        
        var i = friends.indexOf(a)
        var j = friends.indexOf(b)
        
        arr[i][j] += 1
        total[i] += 1
        total[j] -= 1
    }
    
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i !== j) {
                if (arr[i][j] > arr[j][i]) {
                    console.log(arr[i][j], arr[j][i])
                    present[i] += 1
                } else if (arr[i][j] === arr[j][i]) {
                    if (total[i] > total[j]) {
                        present[i] += 1
                        }
                    } 
                }    
        }
    }
    
    
    return Math.max(...present);
}