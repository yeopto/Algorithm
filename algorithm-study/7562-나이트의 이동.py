from collections import deque
import sys
input = sys.stdin.readline

t = int(input())

def bfs():
    dx = [-1, 1, -1, 1, -2, -2, 2, 2]
    dy = [2, 2, -2, -2, 1, -1, 1, -1]

    q = deque()
    q.append((a, b))
    
    while q:
        x, y = q.popleft()
        if x == c and y == d:
            return visited[x][y]
        
        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
                visited[nx][ny] = visited[x][y] + 1
                q.append((nx, ny))

for _ in range(t):
    n = int(input())
    visited = [[0] * n for _ in range(n)]
    a, b = map(int, input().split())
    c, d = map(int, input().split())
    
    print(bfs())