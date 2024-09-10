function solution(chicken) {
    let answer = 0;
    let coupons = chicken;

    while (coupons >= 10) {
        const newChicken = Math.floor(coupons / 10);
        answer += newChicken;
        coupons = newChicken + (coupons % 10);
    }

    return answer;
}