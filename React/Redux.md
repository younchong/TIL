# Redux 기초 

  * redux flow
    * action => store.dispatch(action) => reducer => store를 업데이트 => subscriber 알림 => 새로운 정보와 함께 컴포넌트 re-rendering
  * React Redux
    * subscribe => Provider
    * store.getState => useSelector
    * sotre.dispatch => useDispatch
    * createSlice는 action들이 담겨있는곳
  * 리덕스로 관리할 조건
    * 다른 컴포넌트들과 공유되는 정보들
    * component가 unmount되도 보관할 필요가 있는 정보들

# Redux

  *  리덕스는 global state로 관리하도록 도와준다. (stae가 여러 부분에서 필요한 경우 도움됨)
    * 리덕스 스토어에서 관리되면 언제, 어디서, 어떻게 왜 스테이트가 업데이트되는지 쉽게 알 수 있다.
    * application logic도 변화가 생길 때 행동된다.
  * 리덕스가 사용되기 좋은 상황들 (리덕스의 store에 보관될 state 조건)
    * app의 다양한 곳에서 다양한 state가 필요할때 (다양한 곳에서 해당 data가 필요한가)
    * state가 자주 업데이트 될때
    * state 업데이트 하는 로직이 복잡할 때
    * 중간이나 큰 규모의 코드베이스에서 다양한 사람들과 일할 때
    * origin data를 가지고 further derived data 만들 수 있을 때
    * 데이터를 캐시하고 싶을 때
    * reloading이 자주되는 컴포넌트에서도 data를 지키고 싶을 때 (swap되면 internal state가 없어지는 경우)
  * Immutability
    * Redux expects that all state updates are done immutably
    * Mutable할 경우
      * 버그의 이유가 될 수 있음.
      * state가 어떻게 그리고 왜 업데이트 되는지 이해하기 힘들어짐
      * test작성하기 힘들어짐
      * time-travel debugging하기 힘들어짐
      * Redux의 원래 사용 의도에 반대됨
  * Actions
    * you can think of an action as an event that describes something that happened in the application
    * Action creator - we don't have to write the action object by hand every time
  * Reducers
    * receives the current state and an action object, how to update the state if neccesary
    * return new State, (state, action) => newState
    * 리듀서를 이벤트 리스너라고 생각하면 쉬움, 받은 action type에 따라 행동되는
    * 리듀서가 반드시 따라야하는 규칙들
      * state와 action만을 가지고 new state value를 calculate해야됨
      * existing state를 수정하면 안됨, 반드시 existing state값을 복사해서 그 값을 바꾸는 immutable update해야됨
      * 비동기 로직사용 금지, random value를 계산하거나, side effect를 만드는
    * Reducers act like an event listners, and when they hear action they are interested in, they update the state in response
  * Store - global state가 담긴곳
  * dipatch - action object들을 reducer로 넘겨줌.
    * you can think of dispatching actions as "triggering an event"
  * selector - store로 부터 관심있는 state값을 받아옴.
  
  ## 전체 흐름
    * Redux uses a "one-way data flow"
      * State는 app의 특정 시점을 describe하고, UI는 그 state를 기준으로 rendering함
      * 흐름
        * UI가 action을 dispatch함
        * store가 reducer를 동작시켜서, state를 업데이트함
        * store가 subscriber들에게 state 업데이트를 알림
        * UI들은 변경된 state를 기준으로 re-rendering
  * 일반적으로 form에서 관리되는 state는 redux에서 관리하면 안된다.
    * editing할 때는 form compoent에 담아두었다가 다 끝났을 때 dispatch Redux action으로 store에 업데이트
// 나의 질문? => UI가 기존 staet와  변경된 state값을 기준으로 re-rendering하는데, 이때 shallow comparizon => shallow comparizon 맞음.

  ## Redux 규칙을 가지는 이유
  * 예측가능한 코드를 만들기 위해서. reducer가 하나의 input으로만 output이 나오므로, 코드흐름 이해하기 쉽다.
  * 만약 다양한 외부 변수에 의해서 reducer가 작동된다면, 예측불가능하다.
  * reducer가 순수함수가 아니라면, 다른 값들을 변경시키고, 특히 state값을 변경시키면, bug의 이유가 될 수 있다.
  * Redux Devtool은 기존 rules을 잘따른다는 걸 기본원칙으로 한다.
  * 리덕스는 순수함수라는 가정에서 출발됐기때문에, reducer안에서는 순수함수를 가져야한다.

  
# Redux style guide

  * there is no single "right" waty to do Redux
  * 특정 토픽과 접근 방법에서 더 나은 방식이 있을 뿐

  ## Priority A