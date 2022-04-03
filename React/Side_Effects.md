# useEffect

  * useEffect를 통해 컴포넌트 렌더링 이후에도 side effect를 표현할 수 있다.
    * useEffect Hook을 이용하여 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지 말해준다.
    * useEffect에 전달된 함수는 화면 렌더링이 완료된 후에 수행된다. (기본적으론, dependency 고려하지 않을 때)
  * useEffect에 넘겨주는 함수를 effect라 함.
    * effect함수내에서 참조되는 값들은 모두 dependency 내에 있어야 한다.
  * effect가 함수를 반환하면(정리를 위한 함수) React는 반환한 함수를 정리가 필요할 때 실행시킨다. 
    * 반환된 함수가 실행되는 시점은 컴포넌트가 마운트 해제되는 때, 정리를 실행 (UI에서 컴포넌트가 제거하기 전에 수행)
  * 관심사 구분을 하려면 multiple effect 사용 (관심사에 따라 useEffect를 여러개 사용)

# useEffect에서 memory leak 에러

* useEffect에서 비동기 처리과정할 때, 값이 불러지지 않은 상태에서 component unmount하게 되면 memory leak이 생길 수 있다. (에러 메시지가 나옴.)
* 이때 useEffect에서 함수를 반환해서 비동기 처리값이 사용되는 곳에 clean up 해주면 memory leak을 막을 수 있다.

2. 리액트 컴포넌트에서 말하는 Side Effect란 무엇인가?