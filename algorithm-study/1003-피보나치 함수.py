import sys
input = sys.stdin.readline

t = int(input())

zero = [1, 0, 1] # 인덱스는 타겟숫자고 값은 0이 출력되는 횟수
one = [0, 1, 1] # 인덱스는 타겟숫자고 값은 1이 출력되는 횟수

def cal(num):
    length = len(zero) # 3
    if length <= num: # num이 3부터는 만들어 줘야해
        for i in range(length, num + 1):
            zero.append(zero[i - 2] + zero[i - 1])
            one.append(one[i - 2] + one[i - 1])
    print("%d %d"%(zero[num], one[num]))

for _ in range(t):
    k = int(input())
    cal(k)