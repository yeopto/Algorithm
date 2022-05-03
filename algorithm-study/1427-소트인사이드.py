import sys
input = sys.stdin.readline

nums = [*map(int, input().rstrip())]

for i in range(len(nums) - 1):
    max_idx = i
    for j in range(i + 1, len(nums)):
        if nums[j] > nums[max_idx]:
            max_idx = j
    nums[i], nums[max_idx] = nums[max_idx], nums[i]

print("".join(map(str, nums)))