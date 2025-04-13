def solution(k, m, score):
    answer = 0
    score.sort(reverse=True)
    
    num_boxes = len(score) // m
    
    for i in range(num_boxes):
        box = score[i*m : (i+1)*m]
        answer += box[m-1] * m
    
    return answer