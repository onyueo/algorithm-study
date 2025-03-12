function solution(n, w, num) {
    var answer = 1;
    var check = false;
    var odd = 2 * w - 1
    var even = 1
    
    for (i=1; i<=w; i++) {
        var t = true
        var target = i
        var lst = [i]
       
        while(true) {
            if (target === num) check = true
            target = t ? target+odd : target+even
            if (target > n) break
            lst.push(target)
            t = !t
        }
        if (check) break
        odd -= 2
        even += 2 
    }
    console.log(lst)
    for (let k=lst.length - 1; k >= 0; k--) {
        if (lst[k] === num) break
        answer += 1
    }
    

    return answer;
}





// function solution(n, w, num) {
//     var answer = 1;
// //     n은 총갯수, w는 칸수, num은 꺼낼거
// //     x는 나머지(자리) , y는 몫 (높이)
    
//     var x = 0
//     var y = Math.ceil(num / w)
//     if (y % 2 === 0) {  // 짝수일경우
//         x = (6 - num % w) % 6 + 1  // 자리
//     } else {
//         x = num % w === 0 ? w : num % w
//     }
    
//     var nx = 0
//     var ny = Math.ceil(n / w)
//     if (ny % 2 === 0) {  // 짝수일경우
//         nx = (6 - num % w) % 6 + 1  // 자리
//     } else {
//         nx = num % w === 0 ? w : num % w
//     }
    
    
//     var sum = w
//     while(true) {
//         if (y % 2 === 0) {
//             sum += 2*x - 1
//         } else {
//             sum += 2*w - 2*x + 1
//         }
//         console.log(sum, '-------')
//         if (sum >= n) break
        
//         answer++
//         y++
//     }
    
//     if (nx > x) answer--
    
//     return answer;
// }