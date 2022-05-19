import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

T = int(input())
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
count = 0

def dfs(a, b):
    if a < 0 or a >= N or b < 0 or b >= M:
        return False
    
    if matrix[a][b] == 1:
        global count
        count += 1
        matrix[a][b] = 0
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]
            dfs(nx, ny)
        return True

for _ in range(T):
    M, N, K = map(int, input().split())
    cnt = []
    matrix = [[0] * M for _ in range(N)]
    for _ in range(K):
        a, b = map(int, input().split())
        matrix[b][a] = 1
    
    for i in range(N):
        for j in range(M):
            if dfs(i, j) == True:
                cnt.append(count)
                count = 0
    print(len(cnt))