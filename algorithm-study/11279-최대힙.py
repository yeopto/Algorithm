import sys, heapq
input = sys.stdin.readline

n = int(input())
heap = []

for _ in range(n):
    x = int(input())

    if x == 0: 
        if len(heap) == 0:
            print(0)
        else:
            a, b = heapq.heappop(heap)
            print(b)
    else:
        heapq.heappush(heap, (-x, x))
