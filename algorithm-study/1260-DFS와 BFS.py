import sys
from collections import deque
input = sys.stdin.readline

N, M, V = map(int, input().split())
graph = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1, N + 1):
    graph[i].sort()

def dfs(v):
    visited[v] = True
    print(v, end=' ')

    for i in graph[v]:
        if not visited[i]:
            dfs(i)

def bfs(start):
    visited[start] = True
    q = deque([start])

    while q:
        v = q.popleft()
        print(v, end=' ')

        for i in graph[v]:
            if not visited[i]:
                q.append(i)
                visited[i] = True

dfs(V)
print()
visited = [False] * (N + 1)
bfs(V)