function solution(keymap, targets) {
    var answer = [];
    
    for (target of targets) {
        let cnt = 0
        let check = false;
        for (item of [...target]) {
            let idx = 1000
            for (key of keymap) {
                let idxnum = key.indexOf(item) + 1
                if (idxnum !== 0 && idx > idxnum) {
                    idx = idxnum
                }
            }
        
            if (idx === 1000) {
                check = true
                break
            }
            cnt += idx
        }
        if (check) {
            answer.push(-1)
        } else {
            answer.push(cnt)
        }
    }
    return answer;
}