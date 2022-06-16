from collections import deque
import sys
input = sys.stdin.readline

t = int(input())

for _ in range(t):
    func = list(input().rstrip())
    n = int(input())
    arr = input().rstrip()[1:-1].split(',')
    
    q = deque(arr)
    
    flag = 0

    if n == 0:
        q = []

    for i in func:
        if i == 'R':
            flag += 1
        elif i == 'D':
            if len(q) == 0:
                print("error")
                break
            if flag % 2 == 0:
                q.popleft()
            else:
                q.pop()

    else:
        if flag % 2 == 1:
            q.reverse()
            print("[" + ",".join(q) + "]")
        else:
            print("[" + ",".join(q) + "]")
            