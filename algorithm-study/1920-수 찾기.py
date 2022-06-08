import sys
input = sys.stdin.readline

n = int(input())
A = list(map(int, input().split()))
A.sort()
m = int(input())
targets = list(map(int, input().split()))

def binary(A, target, start, end):
    mid = (start + end) // 2
    if start > end:
        return 0
    elif target == A[mid]:
        return 1
    elif target > A[mid]:
        return binary(A, target, mid + 1, end)
    else:
        return binary(A, target, start, mid - 1)

for target in targets:
    start = 0
    end = len(A) - 1
    print(binary(A, target, start, end))