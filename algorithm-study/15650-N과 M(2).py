# 백트래킹

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
itertools 사용

import sys
from itertools import combinations
input = sys.stdin.readline

n, m = map(int, input().split())
arr = [i for i in range(1, n + 1)]
arr2 = list(combinations(arr, m))

for i in arr2:
    print(*i)
'''