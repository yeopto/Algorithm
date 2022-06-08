import sys, heapq
input = sys.stdin.readline

heap = []

n = int(input())

for _ in range(n):
    x = int(input())
    
    if x == 0:
        if len(heap) == 0:
            print(0)
        else:
            a = heapq.heappop(heap)
            print(a)
    else:
        heapq.heappush(heap, x)