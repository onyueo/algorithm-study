function solution(today, terms, privacies) {
    var answer = []
    
    for (let i=0; i< privacies.length; i++) {
        var ans = calcul(privacies[i], terms, today)
        if (ans) {
            answer.push(i+1)
        }
    }
    return answer;
}

function calcul(dates, terms, today) {
    var due = ''
    var date = dates.split(' ')[0]
    var kind = dates.split(' ')[1]
    
    for (term of terms) {
        var t = term.split(' ')[0]
        var d = term.split(' ')[1]
        
        if(t === kind) {
            due = cal(date, d)
            break
        }
    }
    // console.log(today, '----' ,due, '----', today>due)
    return today >= due
}

function cal(dates, m) {
    var m = +m
    var year = +dates.split('.')[0]
    var month = +dates.split('.')[1]
    var day = +dates.split('.')[2]
 
    month += m;

    if (month > 12) {
        year += Math.floor((month - 1) / 12);
        month = ((month - 1) % 12) + 1;
    }
    
    return [year, String(month).padStart(2, '0'), String(day).padStart(2, '0')].join('.')
}