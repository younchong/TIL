# Set

  * set 사용 이유
    1. 중복 제거
    2. has로 값의 유무 판단. (includes보다 성능이 좋음)

# Map

  * Map은 key 타입에 제한이 없다.

# 비동기 프로그래밍

  * 자바 스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖는다.
  * 싱글 스레드 방식으로 동작
  * 태스크가 실행될 때, 블로킹이 발생
  * 하지만, 브라우저는 멀티스레드이므로 비동기 처리 가능
  * setTimeout, setInterval, HTTP 요청, 이벤트 핸들러는 비동기 처리 방식으로 동작
  * 이벤트 루프가 자바스크립트의 동시성을 지원함. (브라우저에 내장되어 있는 기능)
  * 태스크 큐에 비동기 함수의 콜백함수 나 이벤트 핸들러가 일시적으로 보관되고, JS엔진의 콜스택이 비었을 때, 이벤트루프가 순차적으로 이동시킴.
  * JS엔진이 싱글 스레드 방식으로 동작하지, 브라우저는 멀티 스레드로 동작해서 비동기 처리 가능하다.
