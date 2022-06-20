# _느슨하게_ 🚶🏻‍♂️ 끝까지 🏃🏻‍♂️
> SW사관학교 정글에서 2022년 4월 29일 금요일에 "느슨하게 끝까지"라는 모토로 만들어진 알고리즘 스터디입니다.
>>자율적으로 하되 올바른 방향으로 주마다 문제를 자신이 선정하여 1일 1문제씩 꾸준히 하는게 목표입니다. 
>>>스터디장 - [salmonsushi](https://www.acmicpc.net/user/salmonsushi)
>>>스터디원 - [alchemic931](https://www.acmicpc.net/user/alchemic931) [john0325](https://www.acmicpc.net/user/john0325) [musemagic](https://www.acmicpc.net/user/musemagic) [gunyeop0530](https://www.acmicpc.net/user/gunyeop0530)

## 22.04.29

### BOJ 7568 - 덩치
- 문제 : https://www.acmicpc.net/problem/7568

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/7568-%EB%8D%A9%EC%B9%98.py)

-  풀이 및 느낀점 : 다른분들에 비해 너무 쉬운문제 였습니다. 단계별 문제풀이부터 하다보니 그런것같습니다. 문제는 완전탐색 브루트포스로 접근해서 푸는 문제였습니다. 하나씩 다 비교해보면 되는 문제였고, 몸무게와 키가 다 클때만 순위를 늘려주면 되는 문제였습니다. 시간복잡도에 대한 감을 익히기 위해 검색해보니 N의범위가 50이하라서 O(N^2)으로 풀어도 시간이 그렇게 오래걸리지 않기에 이중 for문을 써서 풀면 시간초과는 안나겠다는 느낌?을 알게되었습니다.

## 22.04.30

### BOJ 1018 - 체스판 다시 칠하기
- 문제 : https://www.acmicpc.net/problem/1018

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1018-%EC%B2%B4%EC%8A%A4%ED%8C%90%20%EB%8B%A4%EC%8B%9C%20%EC%B9%A0%ED%95%98%EA%B8%B0.py)

-  풀이 및 느낀점 : 오늘 체스판 다시 칠하기를 풀었습니다. 실버5여서 만만하게 봤는데 저에겐 너무 어려웠습니다. 약속이 있어서 약속전에 20분정도 생각해보고 떠오르지가 않아서, 갔다와서 해야겠다하고 와서 30분이상 고민해봤는데도 문제를 보고 예제 입력을 보니 무슨 말인지 도저히 모르겠어서 풀이를 봤습니다. 풀이를 봐도 무슨말인지 몰라서 한시간 헤맸습니다.. 문제이해능력이 너무 떨어진다는걸 자주 느낍니다. 문제는 8x8 크기 이상의 보드값들을 받으면 8x8씩 하나씩 짤라보면서 자른거에서 행열인덱스들을 더한값이 짝수인지 홀수인지 경우를 나누어줍니다. 또, 짝수인 경우에서 w로 시작할때 경우, b로시작할때 경우들을 나누어 각각 변수를 만들어 카운팅해주고 홀수일때도 마찬가지로 조건을 나누어서 각각카운팅해준뒤 두 경우 중 최소값을 새로운 리스트에다 집어넣고 반복하여 그 리스트에 최소값을 출력하면 되는 문제였습니다. 뭔가 행렬문제가 나오면 쉽게 받아들이지 못하는거같아서 많이 풀어서 익숙해져야겠단 생각이 들었습니다.

## 22.05.01

### BOJ 1436 - 영화감독 숌
- 문제 : https://www.acmicpc.net/problem/1436

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1436-%EC%98%81%ED%99%94%EA%B0%90%EB%8F%85%20%EC%88%8C.py) 

-  풀이 및 느낀점 : 어제보단 괜찮은 문제였습니다. 처음에 접근을 자연스럽게 666, 1666 ,,, 6666, n-1 + "666"이렇게 가는줄알았는데 예제들보니까 그러면 출력값이 이상하게 나올거같더라구요. 새벽에 지친상탸로 집갈때 하려니 접근이 떠오르지않아서 그냥 풀이봤더니 아 조금 더 고민할걸이라는 생각을 했습니다. 1부터 10000까지만 확인하면되기에 while true로 확인하면서 666이들어간 수가있으면 카운트해주고 n이랑 같으면 출력해주고 break걸면되는 문제였습니다. 

## 22.05.02

### BOJ 2108 - 통계학
- 문제 : https://www.acmicpc.net/problem/2108

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2108-%ED%86%B5%EA%B3%84%ED%95%99.py)

- 풀이 및 느낀점 : 통계학이라는 문제를 풀었습니다. 최빈값을 구하기위해 Counter 모듈을 생각했고 Counter를 복기할겸 서치해보다가 메서드 중 most_common이란 메서드를 쓰면 count가 많은 순으로 정렬이 되는걸 알았습니다. 사실상 이문제는 최빈값만 구하면 나머지는 쉬운 문제였습니다.

## 22.05.03

### BOJ 1427- 소트인사이드
- 문제 : https://www.acmicpc.net/problem/1427

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1427-%EC%86%8C%ED%8A%B8%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C.py)

- 풀이 및 느낀점 : 소트인사이드라는 문제였습니다. 파이썬으로는 내림차순정렬을 소트메서드로 쉽게 할 수 있었지만 첫주차때 진도를 빨리나가야겠다는 급한마음으로 정렬공부를 제대로 하지않고 문제를 소트쓰고 넘어갔었습니다. 예전에 c로 버블정렬, 선택정렬을 구현해봤었는데 로직을 다 까먹었어서 복기할겸 써치를했습니다. 선택정렬로 문제를 풀었는데 로직은 2중포문을 쓰는데 내부반복문은 가장큰값(오름차순이면 작은값)의 인덱스를 찾아줘서 외부반복문에서 잡아준 기준인덱스와 swap을해주면서 반복문을 돌게되면 내림차순(오름차순)으로 정렬이 됩니다. 그리고 리스트를 str으로 변환하기위해 join()메서드를 사용했습니다"". join(arr)했더니 에러가떠서 알아보니 인자에 str형태의 리스트가 들어가야된다고해서 map으로 원소들을 str변환해주고 join을하니 정상적으로 출력되었습니다.

## 22.05.04

### BOJ 11650 - 좌표 정렬하기
- 문제 : https://www.acmicpc.net/problem/11650

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/11650-%EC%A2%8C%ED%91%9C%20%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0.py)

- 풀이 및 느낀점 : 오늘은 좌표 정렬하기라는 문제였습니다. 문제 딱 보고 소트쓰면 되겠네라 생각했지만, 원소가 튜플이거나 리스트일때 람다식을 키로 사용하여 정렬하는 것을 메서드를 안쓰고 구현해보고싶었습니다. 이중포문을 두개쓰면 할 수 있을거같았지만 이중포문 하나로 정렬을 두번할수없을까란 생각에 찍어보면서 머릿속을 짜내봤지만, 첫번째 원소순으로는 정렬이되는데 두번째 원소순으로 정렬되지가 않아서 풀이를 봤습니다. 근데 소트쓴 자료밖에 없어서 스터디장님에게 조언을 구하고 할게 많아서 소트를 사용하여 제출했습니다.

## 22.05.05

### BOJ 11651 - 좌표 정렬하기 2
- 문제 : https://www.acmicpc.net/problem/11651

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/11651-%EC%A2%8C%ED%91%9C%20%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0%202.py)

- 풀이 및 느낀점 : 좌표 정렬하기 2 문제입니다. 이번문제는 y값순으로 정렬하면 되는 문제라 애초에 리스트에 넣어줄때 [y, x]로 넣어서 sort하고 출력해주었습니다. 쉬운 문제였고 저희 조 영천님이 heapq로도 풀 수 있대서 heap으로도 풀어봤습니다. 시간과 메모리는 sort쓰는게 더 효율적이었습니다.

## 22.05.06

### BOJ 18870 - 좌표 압축
- 문제 : https://www.acmicpc.net/problem/18870

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/18870-%EC%A2%8C%ED%91%9C%20%EC%95%95%EC%B6%95.py)

- 풀이 및 느낀점 : 배열 내에 자기 자신보다 작은 수 갯수를 출력하는 문제입니다. 배열 내 중복을 제거하고 오름차순 정렬하면 인덱스 값이 자기 자신보다 작은 수의 갯수가 됩니다. 그걸 이용하여 딕셔너리를 만들어서 해결했습니다. 제가 짠 코드는 첫번째 예제는 만족하는데 두번째 예제가 통과되지 않아서 풀이를 봤습니다. 어찌보면 당연한건데 왜 그렇게 접근을 못했을까라는 생각이 들었습니다. 나중에 이런 유형이 나올때 유용하게 써먹을 수 있을거 같습니다.

## 22.05.07

### BOJ 1934 - 최소 공배수
- 문제 : https://www.acmicpc.net/problem/1934

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1934-%EC%B5%9C%EC%86%8C%EA%B3%B5%EB%B0%B0%EC%88%98.py)

- 풀이 및 느낀점 : 유클리드 호제법으로 두 수의 최대 공약수를 구하고 두 수의 곱에서 최대 공약수를 나누어 최소 공배수를 구했습니다. 유클리드 호제법에 대해 공부하고 문제를 풀어서 어려움 없이 풀 수 있었습니다.

## 22.05.08

### BOJ 9375 - 패션왕 신해빈
- 문제 : https://www.acmicpc.net/problem/9375

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/9375-%ED%8C%A8%EC%85%98%EC%99%95%20%EC%8B%A0%ED%95%B4%EB%B9%88.py)

- 풀이 및 느낀점 : 옷 종류의 수에 안입는 경우 1씩 더해서 다 곱해주고 아무것도 안 입었을때의 경우 하나를 빼주면 됩니다. 경우의 수 구하는 식이 이해가 잘 안갔는데 스터디원의 도움을 받아 풀 수 있었습니다. Counter 모듈로도 풀어봤습니다. 조합이나, 순열 이러한 정수론에 약한 것 같다고 느꼈습니다.

## 22.05.09

### BOJ 15649 - N과 M(1)
- 문제 : https://www.acmicpc.net/problem/15649

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/15649-N%EA%B3%BC%20M(1).py)

- 풀이 및 느낀점 : 순열을 구하는 문제입니다. itertools로 쉽게 풀 수 있었지만, 백트래킹 문제로 분류되어있어서 dfs로 푸는 방법을 배워봤습니다. 수열을 만들어줄 스택을 하나 선언하고 함수 내에서 문제가 원하는 수열길이와 스택 길이가 같다면 프린트 해주는 조건을 걸어줍니다. 그 뒤 1 부터 스택에 넣어준 뒤 dfs를 돌리고 pop을 해주고 n까지 반복하면 됩니다. 이번 주에 N과 M이 4문제정도 있는데 내일부터는 혼자 힘으로 풀어보고 싶습니다.

## 22.05.10

### BOJ 15650 - N과 M(2)
- 문제 : https://www.acmicpc.net/problem/15650

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/15650-N%EA%B3%BC%20M(2).py)

- 풀이 및 느낀점 : 조합을 구하는 문제입니다. itertools에 있는 Combinations로도 풀어보고 dfs로도 풀어봤습니다. 어제 공부한걸 복습하고 풀어서 쉽게 풀 수 있었지만 아직 감이 완전히 오지는 않습니다. 많은 문제들을 접해보고 익숙해져야겠다는 생각을 했습니다.

## 22.05.11

### BOJ 15651 - N과 M(3)
- 문제 : https://www.acmicpc.net/problem/15651

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/15651-N%EA%B3%BC%20M(3).py)

- 풀이 및 느낀점 : 중복 순열을 구하는 문제입니다. 순열과 중복 순열의 차이는 방문했는지 여부 조건이 있냐 없냐의 차이었습니다. 순열, 조합 문제들이 감이 오기 시작해서 뿌듯했습니다. 하지만 아직 탐색 알고리즘에 대한 개념이 부족한 것 같습니다. 브루트 포스, 완전 탐색, 깊이 우선 탐색, 너비 우선 탐색, 백트래킹 등 정확히 어떤 개념이고 어떻게 연관되어있는지 잘 모르는 것 같습니다. 시간이 날 때 틈틈히 학습해보려 합니다.

## 22.05.12

### BOJ 15652 - N과 M(4)
- 문제 : https://www.acmicpc.net/problem/15652

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/15652-N%EA%B3%BC%20M(4).py)

- 풀이 및 느낀점 : 중복 조합을 구하는 문제입니다. 조합은 dfs에 1증가한 인자를 넣어주는데 중복 조합은 중복을 허용하니까 i(자기자신) 그대로 인자를 넣어주면 됩니다. 조합을 풀었어서 쉽게 풀 수 있었습니다.

## 22.05.13

### BOJ 9663 - N-Queen
- 문제 : https://www.acmicpc.net/problem/9663

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/9663-N-Queen.py)

- 풀이 및 느낀점 : 백트래킹에 대해 감을 잡은 것 같습니다. 정글 1주차에 접했던 문제인데 정말 이해하기 어려웠었습니다. 하지만 지금은 기초 문제들을 풀고 접해서 그런지 이해를 완전히 해버려서 뿌듯했습니다.

## 22.05.14

### BOJ 14888 - 연산자 끼워넣기
- 문제 : https://www.acmicpc.net/problem/14888

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/14888-%EC%97%B0%EC%82%B0%EC%9E%90%20%EB%81%BC%EC%9B%8C%EB%84%A3%EA%B8%B0.py)

- 풀이 및 느낀점 : 백트래킹으로 풀었습니다. 연산자들 갯수 하나씩 지워주면서 깊이 탐색을 했습니다 if문 네개를 쓰는게 포인트라 생각합니다. 오타를 조심해야겠다고 느낀 문제였습니다.

## 22.05.15

### BOJ 14889 - 스타트와 링크
- 문제 : https://www.acmicpc.net/problem/14889

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/14889-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%99%80%20%EB%A7%81%ED%81%AC.py)

- 풀이 및 느낀점 : 백트래킹 익숙해진 줄 알았는데 조금만 응용된 유형이면 어려움을 느끼는 것 같습니다. 네명을 두팀을 나눈다고 가정하면 visited 리스트를 원소 4개로 해서 두명을 True로 해줍니다. 그럼 자연스럽게 False가 두명이 되는데 True 팀, False 팀으로 나누어 집니다. n명을 2로 나눈 값이 깊이가 되면 팀을 나눈 것이라고 볼 수 있고, 각 팀의 능력치들을 visited의 인덱스들을 활용해서 구해 줍니다. 그리고 두 팀의 능력치의 차를 백트래킹으로 방문여부를 변경해주면서 탐색하여 경우끼리 비교해 최소값을 찾으면 됩니다. 조금 더 익숙해지기 위해 dfs 문제들을 많이 풀어봐야겠습니다.

## 22.05.16

### BOJ 1260 - DFS와 BFS
- 문제 : https://www.acmicpc.net/problem/1260

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1260-DFS%EC%99%80%20BFS.py)

- 풀이 및 느낀점 : 한 달전에 풀었던 문제였습니다. DFS와 BFS 기본 원리를 복기할 수 있는 문제였습니다. 역시 한 달 동안 접하지 않으면 까먹는 것 같습니다. 꾸준히 하다보면 익숙해지겠다는 믿음으로 포기하지 않고 해야겠습니다.

## 22.05.17

### BOJ 2667 - 단지번호붙이기
- 문제 : https://www.acmicpc.net/problem/2667

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2667-%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0.py)

- 풀이 및 느낀점 : 이 문제 또한 한달 전에 풀었습니다. 문제를 풀 때 코드를 외우려고 하는 경향이 아직 있는 것 같습니다. 로직은 아는데 구현능력이 부족하다는 걸 느낀 문제입니다.

## 22.05.18

### BOJ 2606 - 바이러스
- 문제 : https://www.acmicpc.net/problem/2606

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2606-%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4.py)

- 풀이 및 느낀점 : 그래프 이론 dfs 기본 문제라고 생각합니다. 알고리즘 기간에 풀었어서 쉽게 풀 수 있었습니다.

## 22.05.19

### BOJ 1012 - 유기농 배추
- 문제 : https://www.acmicpc.net/problem/1012

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1012-%EC%9C%A0%EA%B8%B0%EB%86%8D%20%EB%B0%B0%EC%B6%94.py)

- 풀이 및 느낀점 : 단지번호붙이기와 같은 로직입니다. 하나 다른 점이 있는데 백준 문제를 통과하기 위해선 재귀제한을 풀어주면 됩니다.

## 22.05.20

### Programmers - k진수에서 소수 개수 구하기
- 문제 : https://programmers.co.kr/learn/courses/30/lessons/92335

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-k%EC%A7%84%EC%88%98%EC%97%90%EC%84%9C%20%EC%86%8C%EC%88%98%20%EA%B0%9C%EC%88%98%20%EA%B5%AC%ED%95%98%EA%B8%B0.py)

- 풀이 및 느낀점 : 처음으로 45분 시간재고 프로그래머스 문제를 풀어봤습니다. 문제에 대한 전체적인 로직은 생각이 났고, 진법변환에 대해선 참고해서 풀었습니다. 에라토스테네스 체로 소수 판별을 하지않아 시간 초과가 난 테스트케이스와 ''에 대한 예외상황 처리를 하지 않아 런타임 오류가 난 테스트케이스가 있어서 100점을 맞진 못했습니다. 아직 부족해서 더 열심히 해야겠단 생각을 했습니다. 하지만 문제를 접근했다는 사실엔 뿌듯했습니다.


## 22.05.21

### BOJ 11724 - 연결 요소의 개수
- 문제 : https://www.acmicpc.net/problem/11724

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/11724-%EC%97%B0%EA%B2%B0%20%EC%9A%94%EC%86%8C%EC%9D%98%20%EA%B0%9C%EC%88%98.py)

- 풀이 및 느낀점 : WEEK03때 풀었던 문제 입니다. 시간이 꽤 지나서 복습할겸 풀어봤습니다. 무방향 그래프에서 깊이 탐색하는 문제였습니다. 쉽게 풀었습니다.

## 22.05.22

### BOJ 4963 - 섬의 개수
- 문제 : https://www.acmicpc.net/problem/4963

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/4963-%EC%84%AC%EC%9D%98%20%EA%B0%9C%EC%88%98.py)

- 풀이 및 느낀점 : 지난번에 BFS로 풀었는데 DFS로 풀어봤습니다. 방향벡터에서 조건이 헷갈렸는데 그거 빼곤 쉽게 풀 수 있었습니다.

## 22.05.23

### BOJ 10026 - 적록색약
- 문제 : https://www.acmicpc.net/problem/10026

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/10026-%EC%A0%81%EB%A1%9D%EC%83%89%EC%95%BD.py)

- 풀이 및 느낀점 : DFS가 확실히 익숙해진 것 같습니다. 원래 input받은 판에서 영역 갯수 구하고 그 다음 visited를 초기화 해준 뒤 적색을 초록색으로 바꿔주고 영역 갯수를 구해서 출력하면 되는 문제입니다. 오타가 있었어서 고생을 좀 했는데 오타 실수를 줄여야겠다고 느낀 문제였습니다.

## 22.05.24

### BOJ 2468 - 안전 영역
- 문제 : https://www.acmicpc.net/problem/2468

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2468-%EC%95%88%EC%A0%84%20%EC%98%81%EC%97%AD.py)

- 풀이 및 느낀점 : 예제는 다 맞았는데 채점 중 80%에서 틀렸다고 나왔습니다. 이유가 노트에 적힌 "아무 지역도 물에 잠기지 않을 수도 있다" 라는 경우를 처리해주지 않아서 였습니다. n이 2이고 높이가 전부 1인 정보가 들어온다면 아무 지역도 안잠기는 경우를 확인하기 위해 높이가 0일때도 확인을 해주어야합니다. 반복문을 높이 최소부터 최대까지로 돌려서 틀린것입니다. 높이가 0인경우를 확인 할 수 없기 때문입니다. 최대값만 구해서 0부터 확인 해주었더니 통과했습니다. 문제를 꼼꼼히 읽어야겠다고 생각했습니다.

## 22.05.25

### BOJ 2583 - 영역 구하기
- 문제 : https://www.acmicpc.net/problem/2583

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2583-%EC%98%81%EC%97%AD%20%EA%B5%AC%ED%95%98%EA%B8%B0.py)

- 풀이 및 느낀점 : 좌표가 거꾸로 주어져서 어렵게 생각했는데 좌우 대칭이라 생각하고 그대로 DFS하면 되는 문제였습니다.

## 22.05.26

### BOJ 11725 - 트리의 부모 찾기
- 문제 : https://www.acmicpc.net/problem/11725

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/11725-%ED%8A%B8%EB%A6%AC%EC%9D%98%20%EB%B6%80%EB%AA%A8%20%EC%B0%BE%EA%B8%B0.py)

- 풀이 및 느낀점 : 한달 전에 풀었던 문제였습니다. 기본 그래프 dfs 문제입니다. 처음에 조금 헷갈리긴 했는데 괜찮았습니다.

## 22.05.27

### programmers - 거리두기 확인하기
- 문제 : https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0%20%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0.py)

- 풀이 및 느낀점 : 탐색 문제인거는 파악했고 dfs로 처음에 풀다가 조건들을 어떻게 해줘야할지 헷갈려서 이것저것 해보다 결국 시간 내에 못 풀었습니다. 방향벡터 8개를 생각했는데 풀이를 참고하니 그렇게 안해도 됐었고, bfs가 더 이해하기가 쉬워서 bfs로 푼 코드를 보고 이해하고 넘어갔습니다. 저에겐 너무 어려운 문제였습니다.

## 22.05.29

### BOJ 2644 - 촌수계산
- 문제 : https://www.acmicpc.net/problem/2644

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2644-%EC%B4%8C%EC%88%98%EA%B3%84%EC%82%B0.py)

- 풀이 및 느낀점 : 부모노드 방문하면서 +1 하여 visited에 담아주면 되는 문제입니다. 요즘 알고리즘이 잘 풀리지가 않습니다. 더 생각해서 풀고싶은데 시간이 좀 걸리면 해야할게 많아서 해설을 봅니다. 항상 풀 수 있는거였는데 조금만 더 생각해볼걸이란 생각을 합니다. 뭔가 할게 많아 압박감으로 인해 잡생각이 많은 상태로 문제를 풀어서 그런 것 같습니다. 조금 마음의 여유를 가지고 임해야겠습니다.

## 22.05.30

### BOJ 2178 - 미로 탐색
- 문제 : https://www.acmicpc.net/problem/2178

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2178-%EB%AF%B8%EB%A1%9C%ED%83%90%EC%83%89.py)

- 풀이 및 느낀점 : 오늘은 할게 있어서 복습문제로 풀었습니다. BFS 기본문제 입니다. 돌면서 방문했을 때 값을 1씩 올려줘서 matrix[n-1][m-1]의 값을 구하면 됩니다.

## 22.05.31

### BOJ 7562 - 나이트의 이동

- 문제 : https://www.acmicpc.net/problem/7562

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/7562-%EB%82%98%EC%9D%B4%ED%8A%B8%EC%9D%98%20%EC%9D%B4%EB%8F%99.py)

- 풀이 및 느낀점 : 방향 벡터를 나이트의 방향에 맞게 8개를 주고 시작점부터 bfs 돌려서 q에서 pop한 좌표랑 목표좌표가 같게 되면 그 좌표에 있는 값을 리턴하여 출력하면 됩니다. 좌표 값은 0부터 시작해서 다음 좌표로 갈때마다 1씩 더해주면 됩니다. 그럼 목표좌표에 있는 값은 몇번만에 왔는지에 대한 값입니다.

## 22.06.01

### BOJ 7576 - 토마토

- 문제 : https://www.acmicpc.net/problem/7576

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/7576-%ED%86%A0%EB%A7%88%ED%86%A0.py)

- 풀이 및 느낀점 : bfs 탐색을 마쳤는데 좌표의 값이 0이면 있다면 모두가 익지 않았다는 것이니 -1을 출력하고 좌표를 돌아 최댓값을 출력하면 됩니다. 만약 모두 익어 있다면 모든 좌표의 최대값은 1일테니 결국 res는 1일테고 res-1 을 하면 0이 나옵니다. bfs 감이 잡히고 있는 중입니다.

## 22.06.03

### BOJ 2573 - 빙산

- 문제 : https://www.acmicpc.net/problem/2573

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2573-%EB%B9%99%EC%82%B0.py)

- 풀이 및 느낀점 : 녹이고 영역확인하고 조건 안맞으면 count 늘려주고 다시 녹이고 영역확인해서 영역이 2개 이상일때 반복을 종료하면되는 문제였습니다. 녹여서 matrix의 값을 어떻게 갱신해줄지가 생각이 잘 안나서 풀이 참고하면서 풀었습니다. 소문대로 까다로웠습니다. 첨에 0번째 인덱스부터 다 확인해줬는데 문제에서 첫번째 행과 마지막 행은 다 어짜피 0인 바다라서 반복문돌때 확인 안해줘도 되었습니다. 1번째 인덱스부터 확인해주면 되었고 0번째부터 확인했을 땐 메모리초과가 났습니다.

## 22.06.04

### BOJ 1463 - 1로 만들기

- 문제 : https://www.acmicpc.net/problem/1463

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1463-1%EB%A1%9C%20%EB%A7%8C%EB%93%A4%EA%B8%B0.py)

- 풀이 및 느낀점 : 4주차에 DP할때도 정말 어려웠는데 여전히 어려웠습니다. 점화식도 점화식인데 dp테이블이 무엇을 의미하는지 정의하는게 정말 어려운 것 같습니다. 이번주에 dp문제가 몇개 있는데 좀 익숙해질 필요가 있을거 같습니다. 오늘은 친구한테 풀이를 들었습니다.

## 22.06.05

### BOJ 2579 - 계단 오르기

- 문제 : https://www.acmicpc.net/problem/2579

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/2579-%EA%B3%84%EB%8B%A8%20%EC%98%A4%EB%A5%B4%EA%B8%B0.py)

- 풀이 및 느낀점 : 4주차때 풀었던 문제를 복습했습니다. 다행히 접근방법이 기억이 났습니다. 뭔가 외워서 푸는듯한 기분이 들었습니다. 좀 더 많은 문제를 접해봐야겠습니다.

## 22.06.06

### BOJ 1003 - 피보나치 함수

- 문제 : https://www.acmicpc.net/problem/1003

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1003-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%20%ED%95%A8%EC%88%98.py)

- 풀이 및 느낀점 : dp는 정말 어렵습니다. 규칙이 눈에 안보입니다. 왜 내 눈에는 안보이는지.. 한 2주간은 dp를 또 해야할거같습니다. 풀이를 봐도 어렵네.. 화이팅

## 22.06.07

### BOJ 1931 - 회의실 배정

- 문제 : https://www.acmicpc.net/problem/1931

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1931-%ED%9A%8C%EC%9D%98%EC%8B%A4%20%EB%B0%B0%EC%A0%95.py)

- 풀이 및 느낀점 : 그리디 이것도 4주차에 했었습니다. 어느정도 기억에 남아서 끝나는 시간 순으로 정렬하는게 최적의 해라는 생각을 했습니다. 리스트를 정렬하고 answer라는 리스트 하나 더 만들어서 조건 만족하는 원소들만 answer에 넣어서 answer 길이를 출력하려했는데 복잡할거같았고 예전처럼 count 변수하나만들어서 리스트 돌면서 조건만족하면 count 하나씩 늘려주고 count 출력했습니다. 이번주 문제를 class3에서 standard 위주로 뽑았는데 4주차 복습하는 것 같습니다. 담주에 유형을 가져가면서 새로운 문제를 풀어봐야겠습니다.

## 22.06.08

### BOJ 1927 - 최소 힙, BOJ 1920 - 수 찾기

- 문제 : 최소 힙(https://www.acmicpc.net/problem/1927), 수 찾기(https://www.acmicpc.net/problem/1920)

- [최소 힙 소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1927-%EC%B5%9C%EC%86%8C%20%ED%9E%99.py), [수 찾기 소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1920-%EC%88%98%20%EC%B0%BE%EA%B8%B0.py)

- 풀이 및 느낀점 : 최소 힙은 heapq를 써서 풀면 되겠다싶어 금방 풀었습니다. 시간 남아서 이분탐색 한번 복습이나 해볼까 하고 풀었습니다. 인덱스 에러는 len(A)로 해야하는데 len(target)으로 해서 하하. 헷갈렸습니다. 문득 오늘 문자열, 구현, 시뮬레이션을 풀어보고 싶단 생각이 들었는데 담주부터 어떻게 될진 모르겠습니다.

## 22.06.09

### BOJ 11279 - 최대 힙

- 문제 : https://www.acmicpc.net/problem/11279

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/11279-%EC%B5%9C%EB%8C%80%ED%9E%99.py)

- 풀이 및 느낀점 : 최소 힙 원리를 이용해서 push할때 (-x, x) 이렇게 넣어주면 작은 수 순으로 정렬되니까 pop하고 x를 출력하면 결국 최대 값을 뽑을 수 있습니다. 다음 주부터는 문자열, 구현, 시뮬레이션을 위주로 문제를 구성해봐야겠습니다.

## 22.06.10

### programmers - 불량 사용자(해결 x)

- 문제 : https://programmers.co.kr/learn/courses/30/lessons/64064

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-%EB%B6%88%EB%9F%89%20%EC%82%AC%EC%9A%A9%EC%9E%90.py)

- 풀이 및 느낀점 : 못 풀었습니다. check까지 접근하긴했는데 맞는지도 모르겠음. pintos로 인해 시간이 너무 없어서 시간 날 때 꼭 다시 봐야겠습니다.

## 22.06.11

### BOJ 4949 - 균형잡힌 세상

- 문제 : https://www.acmicpc.net/problem/4949

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/4949-%EA%B7%A0%ED%98%95%EC%9E%A1%ED%9E%8C%20%EC%84%B8%EC%83%81.py)

- 풀이 및 느낀점 : 2주차에 했던 괄호와 같은 유형의 문제입니다. 스택을 활용하면 되는 문제입니다. 다만 while true에서 '.'일때 break걸어줬는데 input에 rstrip 안해줘서 '.\n' 으로 들어가서 무한반복이었습니다. 요것처리하는거 말고 어려운 것 없었습니다.

## 22.06.12

### BOJ 1764 - 듣보잡

- 문제 : https://www.acmicpc.net/problem/1764

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1764-%EB%93%A3%EB%B3%B4%EC%9E%A1.py)

- 풀이 및 느낀점 : 완전탐색으로 모두 확인해서 조건에 충족하는 것만 뽑아줬더니 시간초과가 나서 고민을 해보다가 풀이를 봤습니다. set을 이용하여 &연산으로 교집합을 구할 수 있었습니다. 굉장히 신기했습니다. 이런 유형에서 set은 유용할거같습니다. 문자열 문제에서 많이 사용될거같기도 합니다.(아닌가?)

## 22.06.13

### BOJ 1259 - 펠린드롬수

- 문제 : https://www.acmicpc.net/problem/1259

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1259-%ED%8C%B0%EB%A6%B0%EB%93%9C%EB%A1%AC%EC%88%98.py)

- 풀이 및 느낀점 : 쉬웠습니다.

## 22.06.14

### BOJ 1100 - 하얀 칸

- 문제 : https://www.acmicpc.net/problem/1100

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1100-%ED%95%98%EC%96%80%EC%B9%B8.py)

- 풀이 및 느낀점 : 제가 푼 방식은 체스 판의 색은 고정적일테니까 8x8크기의 리스트에 색을 직접 정해줬습니다. 그리고 칸의 색이 0일 때 'F'가 있는 경우는 count를 늘려줬습니다. 혹시 다른 사람들은 어떻게 풀었나 싶어서 참고 해봤더니 (i + j) % 2 가 0 이면 하얀 칸이고 하얀 칸이면서 'F' 일때 count를 해주었습니다. 식이 간단해서 코드가 더 간결했습니다. 오늘도 역시 쉬웠고, 문제를 제대로 골라야겠다고 생각했습니다. 

## 22.06.15

### BOJ 10610 - 30

- 문제 : https://www.acmicpc.net/problem/10610

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/10610-30.py)

- 풀이 및 느낀점 : 배수 판정법을 알아야 풀 수 있는 문제였습니다. 30의 배수는 3의 배수이면서 10의 배수여야 하는데 10의 배수는 1의자리가 0이어야 하므로 입력받은 수에 '0'이 없으면 -1 처리하고 그 조건을 통과 후 각 자리를 더해서 3의 배수가 아니라면 마찬가지로 -1를 출력합니다. 조건들이 다 걸러진 수들을 역순으로 출력하면 됩니다. 배수 판정법을 쓰면 된다는 걸 힌트를 얻어 풀었습니다.

## 22.06.16

### BOJ 5430 - AC

- 문제 : https://www.acmicpc.net/problem/5430

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/5430-AC.py)

- 풀이 및 느낀점 : 문제가 어렵지는 않은데 굉장히 조건이 까다로운 문제였습니다. 시간초과가 자꾸났는데 그 이유가 D일때마다 reverse를 매번 해줘서 시간초과였습니다. 풀이를 참고했는데 R에 flag를 세워서 flag 홀수면 pop을 짝수면 popleft를 해줍니다. 그리고 출력할땐 reverse 한번만 해서 출력하면 시간을 줄일 수 있었고, 입력을 괄호까지 받아서 처음엔 매번 다 확인해줘서 '[', ']', ',' 일땐 continue 해주고 나머지를 배열에 담아주는 식으로 했는데 슬라이싱을 이용해서 1부터 -1까지만 split ',' 쪼개서 받아줬습니다. 그러니 통과했습니다. 굉장히 귀찮은 문제였습니다.

## 22.06.17

### programmers - 나머지가 1이되는 수 찾기

- 문제 : https://programmers.co.kr/learn/courses/30/lessons/87389

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-%EB%82%98%EB%A8%B8%EC%A7%80%EA%B0%80%201%EC%9D%B4%20%EB%90%98%EB%8A%94%20%EC%88%98%20%EC%B0%BE%EA%B8%B0.py)

- 풀이 및 느낀점 : 오늘은 조원 회식으로 인해 조원들끼리 프로그래머스 lv1 문제를 풀어봤습니다. lv1이라 괜찮았던 문제입니다. 이제부터는 프로그래머스도 조금씩 풀어봐야겠습니다.

## 22.06.18

### programmers - 신고 결과 받기

- 문제 : https://programmers.co.kr/learn/courses/30/lessons/92334

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-%EC%8B%A0%EA%B3%A0%20%EA%B2%B0%EA%B3%BC%20%EB%B0%9B%EA%B8%B0.py)

- 풀이 및 느낀점 : 이 문제를 풀면서 문자열로 정보 찾을때는 딕셔너리 활용을 잘 해야겠다는 생각이 들었습니다. 그냥 리스트로 접근하려하다보니 너무 복잡했습니다. 딕셔너리를 써서 key값을 잘 활용한다면 이런 유형의 문제를 보다 쉽게 해결할 수 있겠다고 느꼈습니다. 이제 이런 유형이 나올땐 딕셔너리부터 생각할거 같고, 잘 활용하기위해 익숙해져야겠습니다.

## 22.06.19

### BOJ 1389 - 케빈 베이컨의 6단계 법칙

- 문제 : https://www.acmicpc.net/problem/1389

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/1389-%EC%BC%80%EB%B9%88%20%EB%B2%A0%EC%9D%B4%EC%BB%A8%EC%9D%98%206%EB%8B%A8%EA%B3%84%20%EB%B2%95%EC%B9%99.py)

- 풀이 및 느낀점 : 2주 안했다고 감이 떨어지는걸 보고 한숨만 나왔습니다. 하지만 얼마전에 풀었던 그래프 문제 한번 복습하고 하다보니 금방 감을 찾을 수 있었습니다. bfs문제였고 각 노드를 시작점을 하여 노드와 노드 사이의 간선갯수를 저장하며 탐색을 합니다. 시작 노드부터 다른 노드들 까지의 필요한 간선의 갯수들을 다 더해서 어떤 시작 노드가 더한 값이 최소가 나오는지 찾는 문제입니다. 이번주는 안풀어본 dfs/bfs를 풀어볼 예정입니다.

## 22.06.20

### programmers - 프린터

- 문제 : https://programmers.co.kr/learn/courses/30/lessons/42587

- [소스코드](https://github.com/yeopto/Algorithm/blob/master/algorithm-study/programmers-%ED%94%84%EB%A6%B0%ED%84%B0.py)

- 풀이 및 느낀점 : deque를 쓰는 문제였습니다. pop을 하게되면 location은 1씩 줄어들게 되어있습니다. pop한 원소가 우선순위를 만족하지 않아 프린트되지 않는다면 location만 한 칸 앞으로 갑니다. 우선순위를 만족해 프린트 해야한다면 location를 줄여주고 answer(출력한 횟수)를 늘려줍니다. location이 0이될때 answer + 1로 문제에서 말한 location인덱스가 몇번째로 출력되는지를 알 수 있습니다. location이 1씩 줄어든다는걸 생각하지 못했습니다. 어찌보면 당연한건데.. 이걸 생각해냈다면 풀 수 있었던 문젠데 못 풀어서 많이 아쉬운 문제입니다. 