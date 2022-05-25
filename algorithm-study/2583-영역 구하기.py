import sys
input = sys.stdin.readline
sys.setrecursionlimit(100000)

def dfs(a, b):
    matrix[a][b] = 1 
    for i in range(4):
        nx = a + dx[i]
        ny = b + dy[i]
        if 0 <= nx < M and 0 <= ny < N and matrix[nx][ny] == 0:
            global count
            count += 1
            dfs(nx, ny)

M, N, K = map(int, input().split())

matrix = [[0] * N for _ in range(M)]

for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2):
        for j in range(x1, x2):
            matrix[i][j] = 1

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
count = 1
cnt = []

for i in range(M):
    for j in range(N):
        if matrix[i][j] == 0:
            dfs(i, j)
            cnt.append(count)
            count = 1

print(len(cnt))
cnt.sort()
print(*cnt)