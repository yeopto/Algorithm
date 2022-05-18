import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
graph = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)
count = 0

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

def dfs(v):
    global count
    visited[v] = True

    for i in graph[v]:
        if visited[i] == False:
            dfs(i)
            count += 1

dfs(1)
print(count)