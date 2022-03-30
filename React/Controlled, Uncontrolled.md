# Controlled vs Uncontrolled Components

  ## Controlled Component

  * 리액트 컴포넌트 내부 로직에 의해서 화면에 표시되는 값이 제어되는 방식
  * 리액트에서 state를 신뢰가능한 단일 출처(single source of truth)를 두고, 폼 엘리먼트의 입력값을 제어
  * 사용자의 입력값을 리액트 내부에서 우리가 직접 관리하기 때문에, 화면에 표기하는 과정에서 변환하거나 다른 어떤 처리를 적용하기 용이하다.
  * 리액트에서는 제어 컴포넌트를 사용하는 것을 권장한다.

  ## Uncontrolled Component

  * ref를 사용하여 DOM자체에서 폼 데이터를 다루는 방식
  * 리액트에서 ref사용도 권장하지 않고, 비제어 컴포넌트 사용도 권장하지 않는다.
