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

 