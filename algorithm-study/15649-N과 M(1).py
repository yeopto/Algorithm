# dfs
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
s = []

def dfs():
    if len(s) == m:
        print(' '.join(map(str, s)))
        return
    
    for i in range(1, n + 1):
        if i not in s:
            s.append(i)
            dfs()
            s.pop()

dfs()

'''
재귀함수

import sys
input = sys.stdin.readline

def perm(arr, n):
    ret = []
    if n > len(arr): return ret

    if n == 1:
        for i in arr:
            ret.append([i])
        
    elif n > 1:
        for i in range(len(arr)):
            tmp = [i for i in arr]
            tmp.remove(arr[i])
            for p in perm(tmp, n - 1):
                ret.append([arr[i]] + p)
    
    return ret

n, m = map(int, input().split())
arr = []

for i in range(1, n + 1):
    arr.append(i)

for i in perm(arr, m):
    print(*i)
'''

'''
itertools 사용

from itertools import permutations
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = []

for i in range(1, n + 1):
    arr.append(i)

answer = list(permutations(arr, m))

for j in answer:
    print(*j)
'''