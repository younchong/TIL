# Router

## BrowserRouter

* React Router의 최상위 컴포넌트로 BrouwserRouter 하위에서만 React Router 관련 컴포넌트들을 사용할 수 있다.

## Routes and Route

* <Routes>와 <Route>는 현재 위치를 기준으로 리액트 라우터에서 렌더링하는 기본 방법이다.
* Route를 if문으로 생각할 수 있음
* path가 현재 current URL과 같다면 element로 렌더해줌
* 현재 위치가 바뀌었을 때, <Routes>는 자신의 children인 <Route>를 전체 훑어보고 제일 잘 맞는 <Route>를 렌더한다.
* <Outlet>? <Route element>의 default

## Link

* <Link>는 유저를 다른 페이지로 이동시켜준다.
* <Link> renders an accessible <a> element with a real href that points to the resource it's linking to
* <Link reloadDocument>를 사용하면 client side routing을 스킵하고 browser가 이동을 handling한다.
* <Link to>에서 value가 "/"로 시작하지 않으면 현재 위치를 parent route라고 판단함.
  * 그래서 현재 위치 기준으로 이동을 함.
  * value가 ".."일때는 이전 상위 hierarchy로 감
