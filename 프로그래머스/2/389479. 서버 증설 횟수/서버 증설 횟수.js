function solution(players, m, k) {
    var answer = 0;
    var arr = new Array(24).fill(0)
    
    for (let i=0; i<24; i++) {
        var playnow = players[i]
        var servernow = arr[i]
        var need = Math.floor(players[i] / m)
        var check = false
        
        for (let j=i; j<i+k && j<24; j++) {
            if (servernow <= need) {
                arr[j] += need - servernow
                check = true
            }
        
        }
        if (check) {
            answer += need - servernow
        }
    }
    return answer;
}