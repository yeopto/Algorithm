import sys
input = sys.stdin.readline

n = int(input())
row = [0] * n # row[0] = 1 은 퀸을 (0,1)에 놓겠다. 헷갈리지말고 row[0]은 첫번째 줄이라 생각해(행)
result = 0 # 판 갯수

def promising(i): # 놓았던 퀸 자리들이랑 비교 할거야, 이전 줄들의 퀸 자리에서 같은 col에 있는지랑 대각선에 있는지만 확인하면 돼
    for k in range(i):
        if row[i] == row[k] or abs(row[i] - row[k]) == i - k:
            return False
    return True

def dfs(i):
    if i == n: # 4 x 4에서 dfs(4)가 되면 서로 공격하지 않은 판이 만들어졌다는거야. dfs(3)에서 네번째 줄에 놓게 되었다는 거고 4줄을 다 탐색했으니 판 한개를 늘려줘야해
        global result
        result += 1
        return
    for j in range(n): # 지금 줄의 열을 반복해
        row[i] = j
        if promising(i): # False면 놓지마
            dfs(i + 1) # 퀸 놓게 되면 다음 줄을 탐색해

dfs(0) # 첫번째 줄부터 탐색시작하자
print(result)