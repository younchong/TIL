# 로컬 저장소(내 컴퓨터)와 원격 저장소(git hub, git lab...)

  * git remote origin(주소를 대신할 이름) https/wwe~(주소)
  * 로컬 저장소에서 push -> 원격 저장소에 올리고
  * 다른 제 3의 로컬 저장소에서 push해서 원격저장소가 update됐다면, 내 로컬 저장소에서는 pull로 update된 원격저장소 정보 받아온다.
  * 여러대 사용할 경우 - pull -> 작업 -> commit -> push 

# 이슈 트래커

  * 프로젝트를 진행하면서 생기는 이슈들을 서로 공유하는 게시판, todo list
  * 문제를 기록하고 관리할 수 있음 
  * 협업시 도움 많이 됨
  * 깃허브나 깃랩에서 issues 카테고리에 있음

# commit

  * git commit --amend 로 커밋 메시지 수정가능

# Branch

  * branch (name) - branch 만듦
  * git checkout branch name - branch 이동

# Merge

  * base - 합치려는 것의 공통 조상
  * 과정
    1. 우선 주인이 되는 브랜치로 checkout
    2. git merge (합치려고 하는 브랜치 이름)
```             
                -- a -- 
              /         \
o -- o -- o -   -- b --  m
         base             merge commit

```

# Conflict

  * merge 시 같은 부분을 수정했을 때 생기는 일

# 3 way merge

  * base 브랜치 포함, a, b 브랜치 총 3개가 있을 때
  * base 기준으로 a나 b브랜치 특정 부분이 바뀌었다면 바뀐 부분으로 3 way merge할 때 바뀜
  * 셋 다 다르면 그건 사람이 정함
  * mergetool 이용해서 할 수 있음

# 더 공부해 볼것

  * git flow
  * rebase - 병합한 효과를 내면서도, 타임라인을 깔끔하게 정리함 (merge처럼 끌어오는 부분 없음)

# detached

  * Head가 branch가 아닌 commit id를 가르키는 상태

# checkout

  * head를 이동시킴, head가 가르키는 branch 바꿈

# reset

  * 브랜치를 바꾸는 것, 브랜치가 가르키는 커밋을 바꾸면 그 커밋 이후에 나오는 링크를 끊음, 삭제가 됨
  * delete 같은 느낌
  * reset (commit id) (ex reset 1 이라하면 1이후에 2, 3등의 commit들이 사라지고 브랜치들이 모두 1을 바라봄)