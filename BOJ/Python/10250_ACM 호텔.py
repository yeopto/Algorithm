import math

t = int(input())

for i in range(t):
  H,W,N = map(int, input().split())
  floor = N % H
  room_num = math.ceil(N / H)
  if floor == 0:
    floor = H
  print(floor * 100 + room_num)
