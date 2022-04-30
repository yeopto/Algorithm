import sys
input = sys.stdin.readline

N, M = map(int, input().split())
board = [list(input().rstrip()) for _ in range(N)]
repair = []

for i in range(N - 7):
    for j in range(M - 7):
        index1 = 0
        index2 = 0
        for k in range(i, i + 8):
            for l in range(j, j + 8):
                if (k + l) % 2 == 0:
                    if board[k][l] != 'W':
                        index1 += 1
                    if board[k][l] != 'B':
                        index2 += 1
                else:
                    if board[k][l] != 'B':
                        index1 += 1
                    if board[k][l] != 'W':
                        index2 += 1
        repair.append(min(index1, index2))

print(min(repair))