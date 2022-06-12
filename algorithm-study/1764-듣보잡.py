import sys
input = sys.stdin.readline

n, m = map(int, input().split())

no_listen = set()
no_seek = set()

for i in range(n):
    i = input().rstrip()
    no_listen.add(i)

for i in range(m):
    i = input().rstrip()
    no_seek.add(i)

result = sorted(list(no_listen & no_seek))

print(len(result))
for i in result:
    print(i)