# Optimization

  * 리액트 컴포넌트의 생명주기에 따라, 업데이트 된 정보가 존재할때마다 Re-rendering되는데, js의 내부 비교방식(shallow comparison)때문에 리액트가 컴포넌트의 변경사항을 확인하는 과정에서 의도치 않게 변화를 감지하는 경우들이 존재하는데, 이럴 때 불필요한 렌더링이 발생합니다.
  * you should use it only when you absolutely need those performance gains
    * memoization uses up memory space on the machine it's being run on and, as such, may lead to unintended effects

  ## useMemo Hook

  * returns a memoized value
  * 매개변수로 함수와 dependency 배열을 받음 (함수 매개변수로 dependency가 배열형태로 전달되진 않는다.)
  * dependency가 바뀔 때만 다시 계산해서 연산 (dependency 배열이 없다면 매 rendering마다 계산됨)
  * help to avoid expensive calculations on every render
  * useMemo에서 사용되는 함수는 rendering중에 실행됨 => rendering중에 하지말아야할 로직들 넣으면 안됨
    * side effect는 useEffect에서 사용되어야하지, useMemo에서 사용되는 것이 아니다.
  
  ## useCallback 

  * returns a memoized callback
  * 매개변수로 inline callback과 array of dependecies받음
  * memoized version의 callback을 주고, 이 callback은 dependencies가 바뀔때만 바뀐다.
  * This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

  ## React.memo

  * higher-order component로 component를 prop으로 받고, compoent를 리턴해주는 함수
  * prop이나 내부 value가 바뀌지않으면 compoent가 re-rendering되지 않도록 한다.

### Optimization 조사

* useMemo와 React.memo를 사용할 경우, App컴포넌트가 legnth, name state를 사용해서 입력값에 의하여 state가 변해도 변하는 값만 렌더링된다.
  * 사용하지 않았으면 둘다 렌더링됨
  // rendering count 방법 이외 측정하는 방법,  rendering 2번씩 되는 이유 strict Mode때문에, 그냥 react 안정성 위해서?
  * rendering twice, strict mode => detect any problem with your code and warn you about them
