function solution(s, time, start) {
    var answer = 0;
    var h = 0;
    var m = 0;
    
    for (let i=0; i< s.length; i++) {
        var count = 0
        var safe = 0;
        h = Math.floor(s[i] / 100);
        m = s[i] % 100;
        
        if (m >= 50) {
            m -= 50
            h += 1
        } else {
            m += 10
        }
        
        safe = h * 100 + m
            console.log(safe, '출근인정')
        
        for (t of time[i]) {
            console.log(t, start)
            if (start !== 6 && start !== 7) {
                console.log("ttttttt")
                
                if (t <= safe) {
                    count++
                    console.log("잘출근ㅇ")
                    
                }
            }
            start++
            if (start > 7) {
                start -= 7
            }
        }
        if (count === 5) {
            console.log("?ㅁ????")
            answer++
        }
        console.log("------------")
        
    }
    return answer;
}