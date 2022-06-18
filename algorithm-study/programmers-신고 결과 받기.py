from collections import defaultdict 

def solution(id_list, report, k):
    answer = []
    report = list(set(report)) # 같은 사람이 어떤사람을 4번 신고해도 1번으로 치기 때문에 중복 제거
    user = defaultdict(set) # 누가 누구를 신고 했다는 정보를 담는 dict
    cnt = defaultdict(int) # 신고 받은 사람은 몇번 받았는지
    
    for i in report:
        a, b = i.split()
        user[a].add(b)
        cnt[b] += 1
        
    for j in id_list: # id_list 순서대로 신고한 사람들이 k번 이상 신고 받아서 정지된 결과를 통보 받기
        result = 0
        for l in user[j]: # 신고한 사람들 일단 찾기
            if cnt[l] >= k: # 그 신고받은 사람의 신고 받은 횟수 확인하고 정지 먹었으면
                result += 1
        answer.append(result)
        
    return answer