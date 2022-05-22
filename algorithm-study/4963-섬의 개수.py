import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

def dfs(x, y):
    matrix[x][y] = 0
    for i in range(8):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < h and 0 <= ny < w and matrix[nx][ny] == 1:
            dfs(nx, ny)

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break
    
    matrix = []
    count = 0
    dx = [0, 0, 1, -1, 1, -1, -1, 1]
    dy = [1, -1, 0, 0, 1, 1, -1, -1]

    for _ in range(h):
        matrix.append(list(map(int, input().split())))
    
    for i in range(h):
        for j in range(w):      
            if matrix[i][j] == 1:
                dfs(i, j)
                count += 1
    
    print(count)