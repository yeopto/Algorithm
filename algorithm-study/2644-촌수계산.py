import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline

def dfs(a):
    for i in graph[a]:
        if visited[i] == 0:
            visited[i] = visited[a] + 1
            dfs(i)

n = int(input())
a, b = map(int, input().split())
m = int(input())
graph = [[] for _ in range(n + 1)]
visited = [0] * (n + 1)

for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)

dfs(a)

print(visited[b] if visited[b] > 0 else -1)