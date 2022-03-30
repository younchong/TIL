# useEffect

  * useEffect를 통해 컴포넌트 렌더링 이후에도 side effect를 표현할 수 있다.
  * useEffect Hook을 이용하여 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지 말해준다.
  * useEffect에 넘겨주는 함수를 effect라 함.
  * effect가 함수를 반환하면(정리를 위한 함수) React는 반환한 함수를 정리가 필요할 때 실행시킨다.
  * 반환된 함수가 실행되는 시점은 컴포넌트가 마운트 해제되는 때, 정리를 실행
  * 관심사 구분을 하려면 multiple effect 사용 (관심사에 따라 useEffect를 여러개 사용)

