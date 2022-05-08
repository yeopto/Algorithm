import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    weardic = {}
    for _ in range(n):
        wear = list(input().rstrip().split())
        if wear[1] in weardic:
            weardic[wear[1]].append(wear[0])
        else:
            weardic[wear[1]] = [wear[0]]

    cnt = 1

    for i in weardic:
        cnt *= (len(weardic[i]) + 1)

    print(cnt - 1)

'''
Counter 모듈 이용

import sys
from collections import Counter
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    wear_type = []
    for _ in range(n):
        a, b = input().rstrip().split()
        wear_type.append(b)    
    type_count = Counter(wear_type)
    cnt = 1
    for key in type_count:
        cnt *= type_count[key] + 1
    
    print(cnt - 1)
'''