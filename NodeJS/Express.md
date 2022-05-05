# Middleware  

  * 미들웨어 함수는 app.미들웨어 함수가 적용되는 메소드("적용되는 경로", 미들웨어 함수 (req, res, next))
  * next 콜백함수는 parameter를 사용하면 바로 에러 핸들링하는 미들웨어 함수로 이동하고, 그렇지 않을 경우, 다음 미들웨어 함수로 넘어간다.
  * next를 가지고 있는 미들웨어 이상 사용하게 되면 기존 에러핸들링 미들웨어 함수가 실행된다.
  * next("route")로 사용하면 다음 라우트함수로 넘어간다.

# Response

  * res.send - parameter가 String일 때, 메소드가 Content-type을 자동으로 text/html으로 설정한다.
    * Array or Object라면 JSON representation으로 설정

