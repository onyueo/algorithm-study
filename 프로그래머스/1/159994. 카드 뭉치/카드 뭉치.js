function solution(cards1, cards2, goal) {
    var answer = '';
    
    for (ltt of goal) {
        if (cards1[0] === ltt) {
            cards1.shift()
        } else if (cards2[0] === ltt) {
            cards2.shift()
        } else {
            return 'No'
        }
    }
    return 'Yes';
}