import sys
input = sys.stdin.readline

n = int(input())
arr = [*map(int, input().split())]
arr2 = []

arr2 = list(sorted(set(arr))) # 중복 제외하고 정렬하면 인덱스가 자기 자신보다 작은 수의 개수가 된다.

dic = {arr2[i] : i for i in range(len(arr2))} # 자기 자신이 key가 되고 인덱스가 value가 된다.

for i in arr:
    print(dic[i], end=' ') # 입력값이 key니까 value를 출력