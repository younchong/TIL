# Set과 Map

## Set

  * Set객체는 중복되지않는 유일한 값들의 집합이다.
  * Set도 순서가 의미가 있다. (책과 다름, 순서대로 추가되므로)
  * Set은 key가 존재하지 않기 때문에 순회문을 돌아도 key, value같은 값으로 설정.
  * 중복제거와 iteration,has 세가지 용도로 주로 사용
  * 중복제거 후 배열로 변환, 전체를 순회하는 용도, includes보다 성능이 좋기 때문에 has 사용

## Map
  * Map은 key가 있기때문에, 순회를 할때, key와 value 각각 설정한다.
  * Map은 key값으로 객체도 올 수 있다. 전부 다 가능, iterable함.

# 비동기 프로그래밍

  * timeout 함수들, event handler, http request 비동기 처리방식으로 동작한다.
    * 이벤트 루프와 태스크 큐와 깊은 관계가 있다. 
    * non-blocking 방식
    * 이외에는 JS는 싱글 스레드이므로 block이 생긴다.
  * 자바스크립트의 동시성, conquerency를 지원하는 것이 이벤트 루프이다.
  * setTimeout의 실제 설정되는 최소 시간 4ms가 기본값이다.
  * 자바스크립트 엔진은 싱글 스레드인데, 브라우저 혹은 Node.js의 환경은 멀티스레드이기 때문에 비동기 작업을 처리할 수 있는 것이다.
  