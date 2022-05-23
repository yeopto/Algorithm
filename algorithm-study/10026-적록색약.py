import sys
sys.setrecursionlimit(1000000)
input = sys.stdin.readline

n = int(input())
grid = []
visited = [[False] * n for _ in range(n)]
cnt1, cnt2 = 0, 0

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

for _ in range(n):
    grid.append(list(input().rstrip()))

def dfs(value, a, b):
    visited[a][b] = True
    
    for i in range(4):
        nx = a + dx[i]
        ny = b + dy[i]
        if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == False and grid[nx][ny] == value: 
            dfs(grid[nx][ny], nx, ny)

for i in range(n):
    for j in range(n):
        if visited[i][j] == False:
            dfs(grid[i][j], i, j)
            cnt1 += 1

visited = [[False] * n for _ in range(n)]

for i in range(n):
    for j in range(n):
        if grid[i][j] == 'G':
            grid[i][j] = 'R'

for i in range(n):
    for j in range(n):
        if visited[i][j] == False:
            dfs(grid[i][j], i, j)
            cnt2 += 1

print(cnt1, cnt2)