import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())

matrix = []
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
    matrix.append(list(map(int, input().rstrip())))

def bfs(x, y):
    q = deque()
    q.append((x, y))

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= nx < N and 0 <= ny < M and matrix[nx][ny] == 1:
                matrix[nx][ny] = matrix[x][y] + 1
                q.append((nx, ny))

    return matrix[N - 1][M - 1]

print(bfs(0,0))
