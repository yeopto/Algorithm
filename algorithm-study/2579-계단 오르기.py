import sys
input = sys.stdin.readline

n = int(input())
arr = [0] * (n + 1)
dp = [0] * (n + 1)

for i in range(1, n + 1):
    arr[i] = int(input())

if n == 1:
    print(arr[n])
elif n == 2:
    print(arr[n - 1] + arr[n])
else:
    dp[1] = arr[1]
    dp[2] = arr[1] + arr[2]
    dp[3] = max(arr[1] + arr[3], arr[2] + arr[3])

    for i in range(4, n + 1):
        dp[i] = max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i])
    
    print(dp[n])