# Iterable

  * Symbol.iterator와 next 메소드 사용시 value를 반환가능하면 iterable.
  * duck type.
  * 이터러블 프로토콜을 준수한 객체를 말한다.
  * for ... of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용가능
  * 프로토타입 체인상 Symbol.iterator가 있다면 iterable
  * 이터러블은 지연평가를 통해서 데이터를 생성 (데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기법)

# Spread Syntax

  * 배열을 해체해서 결과물을 받는 문법.
  * Rest 문법과는 반대 개념

# Destructuring Assignment

  * iterable한 대상을 구조 분해해서 변수에 개별적으로 할당하는 것
  * 제일 헷갈리는 부분
  ```
  const user = { first: "king", last: "lord" };

  const { last: second, first: fst } = user;

  console.log(second, fst) // lord, king  
  ```
  * 프로퍼티 키와 다른 변수 이름으로 프로퍼티 값을 할당받으려면 다음과 같이 변수를 할당한다.
  * 객체 디스트럭처링은 객체에서 프로퍼티 키로 필요한 프로퍼티 값만 추출하여 변수에 할당하고 싶을 때 유용.
