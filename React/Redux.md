# Redux

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