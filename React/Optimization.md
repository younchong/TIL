# Optimization

  * 리액트 컴포넌트의 생명주기에 따라, 업데이트 된 정보가 존재할때마다 Re-rendering되는데, js의 내부 비교방식(shallow comparison)때문에 리액트가 컴포넌트의 변경사항을 확인하는 과정에서 의도치 않게 변화를 감지하는 경우들이 존재하는데, 이럴 때 불필요한 렌더링이 발생합니다.
  * you should use it only when you absolutely need those performance gains
  * 최적화를 적용해도 다른 요소에 의해서 렌더링이 될 수 밖에 없는 컴포넌트인지 잘 판단하자.
    * memoization uses up memory space on the machine it's being run on and, as such, may lead to unintended effects
    * 최적화 상황이 아닐 때 사용하는 것은 불필요한 props 비교만하게 된다.
  * memo 또는 useMemo같은 최적화하기 전에 변경되지 않는 부분에서 변경되는 부분을 나눌 수 있는 지 우선 살펴보자
  * useMemo와 useCallback이 사용될 수 있는 대표적인 상황은 useEffect에 해당값이 dependency로 들어가는 경우
  

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
    * dependency는 함수 안에서 사용하는 상태 혹은 props를 넣어야 함.
    * 넣지 않으면 함수 안에서 사용되는 그 값들을 참조할 때 최신값을 보장하지 못한다.
    * dependencies 배열이 콜백에 인자로 전달되지는 않는다. 함수가 무엇일지 표현하는 방법
  * memoized version의 callback을 주고, 이 callback은 dependencies가 바뀔때만 바뀐다.
  * This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
    * 하위 컴포넌트가 React.memo같은 것으로 최적화되어있고, callback함수를 props로 받을 때 상위 컴포넌트에서 useCallback함수를 선언해서 넘기는 것이 더 유용하다.
    * 함수가 매번 재선언되면 하위 컴포넌트는 넘겨 받은 함수가 달라졌다고 인식하기 때문에, 이럴 때 useCallback이 유용하다.

  ## React.memo

  * React는 컴포넌트를 먼저 렌더링한 후에, 이전 렌더링된 결과와 비교하여 DOM업데이트를 결정한다. 이 과정을 더 빠르게 하는 방법이 React.memo이다.
  * higher-order component로 component를 prop으로 받고, compoent를 리턴해주는 함수
  * prop이나 내부 value가 바뀌지않으면 compoent가 re-rendering되지 않도록 한다. memoization된 함수형 컴포넌트(이전에 렌더링된 결과)를 사용하게 된다. 
  * 메모이징 한 결과를 재사용함으로써 React에서 리렌더링을 할 대 가상 DOM에서 달라진 부분을 확인하지 않아 성능상의 이점을 누릴 수 있음.
  * 같은 props로 자주 렌더링될 때 React.memo사용하기 적절한 경우이다.
  * 넘기는 props가 콜백함수일 때 주의해야한다. 이때 useCallback을 사용해서 해결하는 방법도 있다.

### Optimization 조사

* useMemo와 React.memo를 사용할 경우, App컴포넌트가 legnth, name state를 사용해서 입력값에 의하여 state가 변해도 변하는 값만 렌더링된다.
  * 사용하지 않았으면 둘다 렌더링됨
  * rendering twice, strict mode => detect any problem with your code and warn you about them

# 질문 && 답변

  * useCallback dependency 배열 없을 경우
    * 배열 내 숫자가 없는 경우, [] => 처음만 렌더링
    * 아예 dependency를 안주는 경우 =>  매 렌더링때마다 계산
    * useMemo도 동일하게 동작, useEffectf랑 똑같다고 생각하면 됨
  * dependency referential type일땐 ? 어떻게 비교가 불가능하지않는지? 불가 => 상위의 설명인 referential type에 대한 완벽한 대안이 useCallback, uesMemo라는 말이 아니다.