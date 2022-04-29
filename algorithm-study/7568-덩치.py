import sys
input = sys.stdin.readline

N = int(input())
man = []

for _ in range(N):
    a, b = map(int, input().split())
    man.append([a, b])

for i in man:
    rank = 1
    for j in man:
        if i[0] < j[0] and i[1] < j[1]:
            rank += 1
    print(rank, end=' ')