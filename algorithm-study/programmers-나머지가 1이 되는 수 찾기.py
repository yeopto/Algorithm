def solution(n):
    
    li = []
    for i in range(1, n + 1):
        if n % i != 1:
            i = i + 1
        else:
            li.append(i)
        li.sort()    

    return li[0]

print(solution(10))