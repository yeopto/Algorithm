import sys
input = sys.stdin.readline

n = int(input())
lists = []

for i in range(n):
    a, b = map(int, input().split())
    lists.append([a , b])

lists.sort(key=lambda x : (x[1], x[0]))

last = 0
count = 0

for i,j in lists:
    if i >= last:
        count += 1
        last = j

print(count)