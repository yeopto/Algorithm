# 조합

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
s = []

def dfs(start):
    if len(s) == m:
        print(*s)
        return
    
    for i in range(start, n+1):
        s.append(i)
        dfs(i + 1)
        s.pop()
dfs(1)

'''
# dfs

import sys
input = sys.stdin.readline

def dfs(level, beginwith):
    if level == m:
        print(*result)
        return
    for i in range(beginwith, len(arr)):
        result[level] = arr[i]
        dfs(level + 1, i + 1)

n, m = map(int, input().split())
arr = [i for i in range(1, n + 1)]
result = [0] * m

dfs(0, 0)
'''

'''
# itertools 사용

import sys
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [i for i in range(1, n + 1)]
arr2 = list(combinations(arr, m))

for i in arr2:
    print(*i)
'''