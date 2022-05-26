import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)

n = int(input())
graph = [[] for _ in range(n + 1)]
visited = [0] * (n + 1)

for _ in range(n - 1):
    a, b = map(int, input().split())
    graph[b].append(a)
    graph[a].append(b)

def dfs(v):
    for i in graph[v]:
        if visited[i] == 0:
            visited[i] = v
            dfs(i)

dfs(1)

for x in range(2, n + 1):
    print(visited[x])