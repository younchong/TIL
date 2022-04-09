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
    * 여러 변경사항을 일괄적으로 갱신하거나 나중으로 미룰 수 있음. (이벤트 핸들러내에서 비동기적 => 이벤트 핸들러 내에서 배칭이 일어난다.)
    * no matter how many setState() calls in how many components you do inside a React event handler, they will produce only a single re-render at the end of the event.
    * 이벤트 핸들러 내에서 비동기 처리방식으로 처리될 경우 배칭이 발생하지 않는다. (React 18부터는 배칭됨)
      * React가 브라우저 이벤트가 발생하는 동안에 batch update를 함 (18이전 기준, 18이후부터는 event가 handling된 이후부터 state update하기 때문에 batching됨)
      * This is because React used to only batch updates during a browser event(like click), but here we're updating the state after the event has already been handled (in fetch callback)
      * promise, setTimeout, native event handler등 다른 이벤트에서는 batching이 일어나지 않는다.
    * componentDidUpdate나 setState의 updater을 사용하면 갱신이 적용된 뒤 실행이 되는 것이 보장됨. (updater의 매개변수인 state와 props는 최신값이 보장됨)
  * state는 컴포넌트의 복잡성을 높히고, 예측하기 힘들게 한다. (Component without state is preferable)

## props vs state
  * 컴포넌트 내에서 props는 바뀌면 안되는 값을 전달해주고, state는 유저 이벤트들로 부터 변경될 가능성이 높은 것들을 설정한다.
  * state와 props는 모두 렌더링된 값을 나타낸다.

# Component

  * Component는 항상 대문자로 시작, 소문자로 시작하면 React가 DOM태그로 처리함
  * Component를 작게 나누는 것을 두려워하지 말자. (Component를 적절히 추출해서 재사용성을 높히자.)
  * Component내 state위치는 리렌더링을 최소화할 수 있는 곳으로 (공통 조상 중 가장 하위로)
  * 모든 Component는 children이라는 prop을 가지고 있다.
    * Component사용시 사이에 넣어서 사용할 때, 예약어로 쓸 수 있음
    * <Component> <h1> hi </h1> </Component>

  
# Batch

* Batch는 state 업데이트를 모아서 한번에 rendering하는 것을 말한다.
* 불필요한 re-rendering을 줄여서 성능향상에 도움이 된다.
* Batch가 일어나는 조건은 React에서 event handler내에서 batching이 일어납니다. (browser event가 끝날 때 batching이 일어남)
* setState 비동기적으로 작동한다 => 순서가 보장되지 않는다. => 한꺼번에 작동된다, batching에 대한 설명
