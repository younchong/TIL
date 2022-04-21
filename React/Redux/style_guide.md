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