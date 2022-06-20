from collections import deque

def solution(priorities, location):
    answer = 0
    q = deque(priorities)
    while True:
        a = q.popleft()
        if not q: # pop했는데 아무것도 없을때 예외처리
            answer += 1
            break
            
        if a >= max(q):
            if location == 0: 
                answer += 1
                break
            else:
                location -= 1
                answer += 1
        else:
            q.append(a)
            location -= 1 # pop한걸 append 해주면 location은 한칸씩 앞으로 가게 됨.
            if location < 0:
                location = len(q) -1 # location이 0일때는 뽑아주면 인덱스가 -1이 되는데 이럴땐 로케이션은 맨뒤가 된다.
                
    return answer