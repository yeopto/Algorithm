import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
cnt = []

for i in range(n):
    max_num = max(matrix[i])

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def dfs(k, x, y):
    visited[x][y] = True
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == False:
            dfs(k, nx, ny)

for k in range(max_num + 1):
    visited = [[False] * n for _ in range(n)]
    count = 0

    for i in range(n):
        for j in range(n):
            if matrix[i][j] <= k:
                visited[i][j] = True

    for i in range(n):
        for j in range(n):
            if visited[i][j] == False:
                dfs(k, i, j)
                count += 1

    cnt.append(count)

print(max(cnt))