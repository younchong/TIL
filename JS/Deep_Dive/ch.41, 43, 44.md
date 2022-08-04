# 타이머

  * 함수를 일정시간 경과된 이후 호출 예약하려면 타이머 함수를 쓰면 된다.
    * setTimer, setInterval
    * 제거용, clearTimeout, clearInterval
  * ECMAScript 사양에 정의된 빌트인 함수가 아닌, 브라우저와 Node.js 환경에서 제공, 호스트 객체

# 디바운스와 스로틀

  * 디바운스 - 마지막에 한번, 검색창 관련
  * 스로틀 - 주어진 일정 시간 간격 동안 최대 한 번만 호출, 스크롤 관련 이벤트 관련

# Ajax

  * Asynchronous JS ans XML, 자바스크립트를 사용해서 서버에 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식
  * 웹페이지 변경에 필요한 데이터만 비동기 방식으로 전송받아서 한정적으로 렌더링 가능해짐 => 브라우저에서도 빠른 퍼포먼스와 부드러운 화면전환 가능, FE태동...

# JSON

  * JavaScript Object Notation은 클라이언트와 서버 간의 THHP 통신을 위한 텍스트 데이터 포맷
  * stringify로 문자열로 변환, 직렬화 (serializing)
  * parse로 객체로 변환, 역직렬화 (deserializing)
  * stringify후 parse하면 간단하게 깊은 복사가능

# REST API

  * HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처로, REST의 기본 원칙을 성실히 지킨 서비스 디자인을 RESTful이라고 한다.
  * URI는 리소스를 표현하는데 집중, HTTP 요청 메소드를 통해 행위에 대한 정의, 페이로드를 통해서 행위의 구체적 내용 표현
