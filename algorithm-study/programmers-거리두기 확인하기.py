# 참고 - https://2hs-rti.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Lv2-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-%ED%8C%8C%EC%9D%B4%EC%8D%AC

from collections import deque

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def solution(places):
    answer = []
    for place in places:
        answer.append(check(place))
    return answer

def check(place):
    person = []
    for i in range(5):
        for j in range(5):
            if place[i][j] == 'P':
                person.append((i, j))
    if not person: # 사람이 없으니까 지키는 것이니 1
        return 1
    return bfs(person, place)

def bfs(person, place):
    for i, j in person:
        q = deque()
        q.append((i, j))
        visited = [[0] * 5 for _ in range(5)]
        visited[i][j] = 1
        while q:
            x, y = q.popleft()
            if visited[x][y] == 3:
                continue
            for k in range(4):
                nx = x + dx[k]
                ny = y + dy[k]
                if 0 <= nx < 5 and 0 <= ny < 5 and visited[nx][ny] == 0:
                    if place[nx][ny] != 'X':
                        visited[nx][ny] = visited[x][y] + 1
                        q.append((nx, ny))
                    if place[nx][ny] == 'P':
                        return 0
    return 1