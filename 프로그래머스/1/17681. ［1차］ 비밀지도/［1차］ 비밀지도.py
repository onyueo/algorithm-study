def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        ltt = ''
        bin1 = bin(arr1[i])[2:].zfill(n)
        bin2 = bin(arr2[i])[2:].zfill(n)
        
        for j in range(n):
            if bin1[j] == '0' and bin2[j] == '0':
                ltt += ' '
            else:
                ltt += '#'
        
        answer.append(ltt)
        
    return answer
