import sys
input = sys.stdin.readline

n = int(input())
graph = []
cnt = []
count = 0

for _ in range(n):
    graph.append(list(map(int, input().rstrip())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    if x < 0 or x >= n or y < 0 or y >= n:
        return False
    
    if graph[x][y] == 1:
        global count
        count += 1
        graph[x][y] = 0
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            dfs(nx, ny)
        return True

for i in range(n):
    for j in range(n):
        if dfs(i, j) == True:
            cnt.append(count)
            count = 0

print(len(cnt))
cnt.sort()
for i in cnt:
    print(i)