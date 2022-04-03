# States와 Props

# props

  * props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장
  * props는 읽기전용으로, 수정해서는 안된다. (immutable한 것으로 생각)
  * React 모든 컴포넌트들은 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.
  * 컴포넌트가 받은 정보(props)들을 변경하고 싶을 때, state가 사용될 곳이다.

# state

  * state는 반드시 UI에 보여지는 내용과 연관된 데이터이어야한다.
  * state is reserved only for interactivity. 
  * setState는 컴포넌트의 state의 즉각적인 갱신을 보장하지 않는다. 
    * 여러 변경사항을 일괄적으로 갱신하거나 나중으로 미룰 수 있음. (이벤트 핸들러내에서 비동기적)
    * no matter how many setState() calls in how many components you do inside a React event handler, they will produce only a single re-render at the end of the event.
    * componentDidUpdate나 setState의 updater을 사용하면 갱신이 적용된 뒤 실행이 되는 것이 보장됨. (updater의 매개변수인 state와 props는 최신값이 보장됨)
  * state는 컴포넌트의 복잡성을 높히고, 예측하기 힘들게 한다. (Component without state is preferable)

## props vs state
  * 컴포넌트 내에서 props는 바뀌면 안되는 값을 전달해주고, state는 유저 이벤트들로 부터 변경될 가능성이 높은 것들을 설정한다.

# Component

  * Component는 항상 대문자로 시작, 소문자로 시작하면 React가 DOM태그로 처리함
  * Component를 작게 나누는 것을 두려워하지 말자. (Component를 적절히 추출해서 재사용성을 높히자.)
  * Component내 state위치는 리렌더링을 최소화할 수 있는 곳으로 (공통 조상 중 가장 하위로)