import sys
input = sys.stdin.readline

def check(x):
    y = x[::-1]
    if x == y:
        return True
    return False

while True:
    x = input().rstrip()

    if x == '0':
        break
    
    if check(x) == True:
        print('yes')
    else:
        print('no')