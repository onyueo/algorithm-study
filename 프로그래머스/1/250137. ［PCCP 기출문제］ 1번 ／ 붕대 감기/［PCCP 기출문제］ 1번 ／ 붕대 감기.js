function solution(bandage, health, attacks) {
    var last = attacks[attacks.length -1][0]
    var maxheal = health
    
    var arr = new Object()
    for (attack of attacks) {
        arr[attack[0]] = attack[1]
    }
    
    var time = 1
    for (let i=0; i<=last; i++) {
        
        if (arr[i] === undefined) { // 공격X
            if (time % bandage[0] === 0) health += bandage[2]
            health += bandage[1]
            
            if (health >= maxheal) health = maxheal
            time++
        } else { // 공격O
            health -= arr[i]
            time = 1    // 시간 초기화
        }
        
        if (health <= 0) {
            health = -1
            break
        }
    }

    
    return health;
}