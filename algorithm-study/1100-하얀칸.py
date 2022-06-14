import sys
input =sys.stdin.readline

# 내 풀이 방법
# color = [[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0],[0,1,0,1,0,1,0,1],[1,0,1,0,1,0,1,0]]
# for i in range(8):
#     for j in range(8):
#         if color[i][j] == 0:
#             if input[i][j] == 'F':
#                 count += 1

input = [list(input().rstrip()) for _ in range(8)]
count = 0

for i in range(8):
    for j in range(8):
        if (i+j) % 2 == 0:
            if input[i][j] == 'F':
                count += 1

print(count)