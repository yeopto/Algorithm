import sys
import math
input = sys.stdin.readline

n, k = map(int, input().split())

def convert_iter(n, k):
    tmp = ''
    while n > 0:
        n, mod = divmod(n, k)
        tmp += str(mod)
    return tmp[::-1]

def is_prime_number(x):
    if x == 1:
        return False

    for i in range(2, int(math.sqrt(x) + 1)):
        if x % i == 0:
            return False
    return True

def solution(n, k):
    num = convert_iter(n, k)
    count = 0    
    prime_list = list(num.split('0'))
    for i in range(len(prime_list)):
        if prime_list[i] == '':
            continue
        prime_list[i] = int(prime_list[i])
    for i in prime_list:
        if i == '':
            continue
        if is_prime_number(i) == True:
            count += 1
    answer = count

    return answer

print(solution(n, k))