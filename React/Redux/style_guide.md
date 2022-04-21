# Redux style guide
  * there is no single "right" waty to do Redux
  * 특정 토픽과 접근 방법에서 더 나은 방식이 있을 뿐

  ## Priority A
  * state를 mutate하지 마라.
    * 모든 버그의 원인 (컴포넌트 제대로 re-rendering 못함, time-travel debugging 불가)
  * 리듀서는 side effect있으면 안됨
    * 인자로 받는 state랑 action을 가지고 새로운 state값을 return해야됨.
    * 다른 리듀서 외부에 있는 변수들을 변형시키거나, 리듀서 함수 외부 스코프에 영향을 주는 코드는 사용하면 안됨
    * 리듀서 밖에서 정의된 함수를 실행하는 것은 괜찮다. 앞선 규칙을 다 지키면
  * Non-Serializable value를 state나 action에 넣지마라
    * Promises, Symbol, Maps,Sets, functions, or class instances
    * 리듀서로 가기전에 action의 행동이 middleware에서 처리가 된다면 괜찮음.
    * App에서 리덕스는 오직 하나의 store를 가진다.
  
  ## Priority B
  * 리덕스 툴킷을 사용해서 리덕스 로직을 작성하라
    * 여러 관련 내용들 많음, Redux toolkit, Immer 등...
  * 기능 별 디렉터리 구조를 이용해서 파일 구조를 구성하자.
    * 리덕스 자체가 파일을 구분하진 않지만, 특징에 따라 한 곳에 공동배치하면 코드 관리에 쉽다.
    * feature folder 공동배치 방법 추천, 같은 특징
    * 디렉터리 구조 구성하는 여러가지 방법이 있다. 아무튼 관련된 로직을 같이 두어서 코드를 update하고 관리하는데 편하게 하자.
  * 리듀서에 가능한 많은 로직을 넣자.
    * 새로운 state에 대해서 calculating될 logic들을 action에 넣지말고, reducer에 넣어라.
    * 테스트하기 쉽고, time-travel debugging 그리고 실수나 버그들을 피하기 쉬움 (리듀서는 순수함수니까)
  * Name state Slice는 Store Data기준으로 정하자.
  * 중첩되고 복잡한 상태는 정규화 시키자.
  * 의미있는 Action 이름을 사용해라
    * meaningful, informative, descriptive type fields
    * Action을 Event처럼 다루기
    * dispatch된 action.type으로 어떤 상황이 생길지 예측이 가능해야 한다.
  * 많은 reducer들이 같은 Action에 반응하게 하라.
    * action이 dispatch되면 all, some, or none of the reducers
    * 하나만 작동해도 괜찮지만, 가능하다면 많은 reducer에서 동작하면 여러 action들을 dispatch할 수가 줄어든다.
    * 한번에 의미있는 action이 됨
  * 한번에 연속적으로 Action들을 dispatching시키지 마세요
    * 작동은 하지만 UI업데이트가 여러번 생김
    * 특정 state가 다른 로직으로 인해 invalid될 수 도 있음.
    * 한번의 action dispatch로 state가 한번에 업데이트 되도록 하자.
  * 리덕스에 위치해야 할 state인지, local에 있어야할 state인지 잘 판단하자.
    * 리덕스에 존재해야할 조건들
      * 다른 곳들에서도 date가 필요한지
      * origin data로 부터 further derived data를 만들 수 있는지
      * 같은 data가 여러 components에서 사용되는 지
      * data를 cache하고 싶은지
  * 더 많은 컴포넌트들이 리덕스 스토어에서 데이터를 읽도록 해라.
    * 더 나은 UI 성능을 만들어준다. => 더 적은 컴포넌트가 render된다. (state가 바뀔때)
    * 예를 들어, 상위에서 store state값 받아서 내려주는 경우면, 하위에서만 받았으면 하위 컴포넌트만 렌더링되면 되는데, 상위도 렌더링되고 하위도 렌더링되기때문에 불필요한 렌더링 생김
    * ?? 확인해보기
  * 함수형 컴포넌트에서 useSelector를 여러번 호출해서 사용하자.
    * multiple results in an object를 반환하는 큰 하나의 useSelector를 사용하기 보단, 작은 data로 정보를 나눠서 쓰자.
    * 만약 사용 컴포넌트에서 전체 obj정보를 다쓴다면 하나만 써도 무방하다.
  * State에는 Plain JS object를 사용하자.
