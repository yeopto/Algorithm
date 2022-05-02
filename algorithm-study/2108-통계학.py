import sys
from collections import Counter
input = sys.stdin.readline

N = int(input())
nums = []
for _ in range(N):
    nums.append(int(input()))
nums.sort()
# 산술평균
print(round(sum(nums) / N ))
# 중앙값
print(nums[N // 2])
# 최빈값
cnt = Counter(nums).most_common()
if N > 1 and cnt[0][1] == cnt[1][1]:
    print(cnt[1][0])
else:
    print(cnt[0][0])
# 범위
print(max(nums) - min(nums))