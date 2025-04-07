def solution(k, score):
    arr = []
    answer = []
    for i in range(len(score)) :
        if i < k :
            arr.append(score[i])
        else :
            if arr[0] < score[i] :
                arr[0] = score[i]
            
        arr.sort()
        answer.append(arr[0])
    return answer