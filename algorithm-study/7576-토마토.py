from collections import deque
import sys
input = sys.stdin.readline

m, n = map(int, input().split())
matrix = [[*map(int, input().rstrip().split())] for _ in range(n)]
q = deque()
res = 0

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

for i in range(n):
    for j in range(m):
        if matrix[i][j] == 1:
            q.append((i, j))

def bfs():
    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < m and matrix[nx][ny] == 0:
                matrix[nx][ny] = matrix[x][y] + 1
                q.append((nx, ny))

bfs()
for i in matrix:
    for j in i:
        if j == 0:
            print(-1)
            exit(0)
    res = max(res, max(i))

print(res - 1)