import sys
input = sys.stdin.readline

def dfs(depth, idx):
    global min_diff
    if depth == n//2: # n = 4일때 TRUE 2명이면 나머지 FALSE 2명은 다른 팀이다
        power1, power2 = 0, 0
        for i in range(n):
            for j in range(n):
                if visited[i] and visited[j]: # TRUE인 팀 능력치 더해주고
                    power1 += graph[i][j]
                elif not visited[i] and not visited[j]: # FALSE인 팀 능력치 더해주고
                    power2 += graph[i][j]
        min_diff = min(min_diff, abs(power1 - power2)) # 차이의 절대값을 다 비교해서 최솟값 구함
        return

    for i in range(idx, n):
        if not visited[i]:
            visited[i] = True
            dfs(depth + 1, i + 1)
            visited[i] = False

n = int(input())

visited = [False] * n # 방문처리해주고 TRUE 인덱스로만 graph에서 찾아서 최소값 찾으려고
graph = [list(map(int, input().split())) for _ in range(n)]
min_diff = int(1e9)

dfs(0, 0)
print(min_diff)