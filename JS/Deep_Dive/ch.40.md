# 이벤트

  * 일반적으로 브라우저가 특정한 이벤트 발생을 감지하고 그에 따른 특정 함수를 호출하도록 개발자가 위임한다.
  * 이벤트 핸들러 어트리뷰트 방식은 오래된 코드라서 알아둘 필요는 있지만 사용하지 않는 것이 좋음. 
    * HTML과 JS의 관심사 분리
    * ```<button onclick="console.log"/>```
  * 이벤트 핸들러 프로퍼티 방식은 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.
    * ```button.onclick = function```
  * addEventListener는 하나 이상의 이벤트 핸들러를 등록할 수 있다.
  * 이벤트 핸들러 제거
    * removeEventListener를 사용하고 addEventListener에 전달한 인수가 모두 같아야 제거가 된다.

# 이벤트 객체

  * 이벤트 핸들러의 첫 번째 인수로 이벤트 객체가 전달된다.
  * 이벤트가 발생하면 이벤트 타입에 따라 다양한 타입의 이벤트가 생성됨
  * 이벤트 객체의 공통 프로퍼티
    * type, target, currentTarget eventPhase, bubbles, cancelable, defaultPrevented
    * isTrusted - 사용자 행위에 의해 발생한 이벤트인지 여부, dispatchEvent를 통한 인위적인 경우 false임 (dispatchEvent는 이벤트핸들러를 동기처리 방식으로 호출함)
    * timeStamp - 이벤트 발생 시각

# 이벤트 전파

  * 캡쳐링 -> 타깃 -> 버블링
  * 캡쳐링 단계에서 이벤트를 캐치하려면 addEventListener의 세번째 인수로 true
  * stopPropagation메서드로 이벤트 전파 중단

# 이벤트 핸들러 내에서 this

  * 이벤트 핸들러로 호출될 때 this는 window를 가리킨다.
  * 바인드 메소드를 사용해서 사용할 곳에서의 this를 전달해서 예상하는 값이 나오도록 한다.

# 이벤트 핸들러에 인수 전달

  * 이벤트 핸들러 내에서 함수를 호출해서 인수 전달.
    * ```() => { innerFunction() } ```
  * 이벤트 핸들러를 반환하는 함수를 호출하면서 인수 전달.
    * func = a => e => { }

# 커스텀 이벤트

  * 개발자의 의도로 생성된 이벤트를 커스텀 이벤트라고 함.
  * 커스텀 이벤트 객체는 bubbles, cancelable 프로퍼티 기본값이 false이다.
  * 이벤트 생성자 함수의 두 번째 인수로 객체의 값으로 true로 넣어줌으로 변경가능
  * 커스텀 이벤트는 반드시 addEventListener 메서드 방식으로 이벤트 핸들러 등록해야됨
    * on~ (핸들러/어트리뷰트 방식)로 불가.
