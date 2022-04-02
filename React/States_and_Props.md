# States와 Props

# props

  * props의 이름은 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장
  * props는 읽기전용으로, 수정해서는 안된다.
  * React 모든 컴포넌트들은 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.

# state

  * 함수에서 지역변수와 동일한 개념 (비공개이며 컴포넌트에 의해 완전히 제어됨)
  * state가 변경되면 컴포넌트는 리렌더링 된다.
  * 컴포넌트 내부에서 관리된다.
  * state 업데이트는 비동기적일 수도 있다.
    * setState는 state를 즉각적으로 갱신하기보단, 여러 변경 사항과 함께 일괄적 갱신하거나 뒤로 미룰 수 도 있다. (즉각적 명령이 아닌, 요청)
    * setState는 이벤트 핸들러 내에서 비동기적
    * 불필요한 렌더링을 방지하면서 성능 향상
  * setState에 updater함수를 전달하면 이전 state에 접근가능 (다음 state값이 이전 stae의 값에 기반할 경우)
    * 첫번째 인자는 이전 state, 두번째 인자는 업데이트가 적용된 시점의 props
  * state는 반드시 UI에 보여지는 내용과 연관된 데이터이어야한다.
  * state는 컴포넌트의 복잡성을 높히고, 예측하기 힘들게 한다. (Component without state is preferable)

## props vs state
  * 컴포넌트 내에서 props는 바뀌면 안되는 값을 전달해주고, state는 유저 이벤트들로 부터 변경될 가능성이 높은 것들을 설정한다.

# Component

  * Component는 항상 대문자로 시작, 소문자로 시작하면 React가 DOM태그로 처리함
  * Component를 작게 나누는 것을 두려워하지 말자. (Component를 적절히 추출해서 재사용성을 높히자.)