import sys
sys.setrecursionlimit(10**5)
input = sys.stdin.readline

def melt(x, y): # 녹이는 함수
    cnt = 0 # 인접한 바다 개수
    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]
        if 0 <= nx < n and 0 <= ny < m and matrix[nx][ny] == 0:
            cnt += 1
    
    if cnt != 0:
        return x, y, cnt
    else:
        return None

def dfs(x, y): # 영역 구하는 함수
    visited[x][y] = True

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < n and 0 <= ny < m:
            if visited[nx][ny] == False and matrix[nx][ny] != 0:
                dfs(nx,ny)

n, m = map(int, input().split())
matrix = [[*map(int, input().split())] for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

answer = 0

while True:
    answer += 1 # 녹이고 영역구하기까지 했으면 1년 추가
    
    # 빙하 녹이기
    reduce = [] # x, y 녹는 높이
    for i in range(1, n):
        for j in range(1, m):
            if matrix[i][j] != 0:
                h = melt(i, j)

                if h is not None:
                    reduce.append(h)
                    
    for x, y, h in reduce:
        matrix[x][y] = matrix[x][y] - h if matrix[x][y] - h > 0 else 0

    # 빙하 개수 구하기
    cnt = 0
    visited = [[False] * m for _ in range(n)]
    
    for i in range(1, n):
        for j in range(1, m):
            if matrix[i][j] != 0 and not visited[i][j]:
                cnt += 1

                if cnt == 2: # 두개면 두개 이상은 볼 필요없음
                    break

                dfs(i, j)
    
    if cnt > 1: # 종료 조건 // while 종료
        break
    
    if sum(map(sum, matrix[1:-1])) == 0: # 다녹을 조건
        answer = 0
        break

print(answer)