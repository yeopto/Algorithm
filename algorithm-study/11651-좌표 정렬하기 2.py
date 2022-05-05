'''
sort로 풀기

import sys
input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n):
    x, y = map(int, input().split())
    arr.append([y, x])

arr.sort()

for i in range(n):
    print(arr[i][1], arr[i][0])
'''

# heap으로 풀기
from heapq import heappush, heappop
import sys
input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n):
    x, y = map(int, input().split())
    heappush(arr, [y, x])

for _ in range(n):
    y, x = heappop(arr)
    print(x, y)