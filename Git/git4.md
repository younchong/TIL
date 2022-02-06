# 협업

# push와 pull

  * 협업시 작업하기 전 pull로 원격 저장소에서 다른 사람의 update를 받아오고, 내 작업 후 push를 한다.
  * 작업 단위마다 push를 자주해서 충돌을 방지한다.

# fetch

  * git pull = git fetch; git merge FETCH_HEAD 한 것과 같다.
  * 즉, fetch를 하면 원격 저장소만 업데이트를 시키는 것
  * 어떤 브랜치와 병합할지 (git/FETCH_HEAD 사용으로 원격 저장소 브랜치 알 수 있음)
  * fetch는 원격 저장소에서 branch를 우선 병합은 안하고 가져오려고 할 때 사용함, 신중하게 branch가져올 때... 복잡하면 pull쓰면 됨

# patch

  * open source에서 push 권한을 받지 않은 상황에서 사용, commit을 하나의 Patch파일로 만들어서 이메일등을 통해 Commitor한테 전달하면 Commitor가 작업 내용을 검토한 뒤 Main Stream 소스 코드에 반영
  * patch 확장자로 각자의 버전간의 차이점을 알려줌
```
git format-patch {Commit id}

git format-patch -{Head를 기준으로 Patch만들 갯수}
ex) git format-patch -3 (HEAD로 부터 3개의 커밋을 patch로 만든다)

// Commitor가 받아올 때, 해당 Commit이 자동으로 생성되어 현재 브랜치에 붙는다. (충돌이 있다면 먼저 해결)
git am {Patch 파일명}
```