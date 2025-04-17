import math
def solution(number, limit, power):
    answer = 1
    for i in range(2, number+1):
        cnt = 0
        for num in range(1, int(math.sqrt(i)) + 1):
            if i % num == 0:
                cnt += 2
            if num**2 == i:
                cnt -= 1

        if cnt <= limit:
            answer += cnt
        else:
            answer += power
                
    return answer