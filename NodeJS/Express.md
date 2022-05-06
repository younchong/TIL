# Middleware  

  * 미들웨어 함수는 app.미들웨어 함수가 적용되는 메소드("적용되는 경로", 미들웨어 함수 (req, res, next))
  * next 콜백함수는 parameter를 사용하면 바로 에러 핸들링하는 미들웨어 함수로 이동하고, 그렇지 않을 경우, 다음 미들웨어 함수로 넘어간다.
  * next를 가지고 있는 미들웨어 이상 사용하게 되면 기존 에러핸들링 미들웨어 함수가 실행된다.
  * next("route")로 사용하면 다음 라우트함수로 넘어간다.

# Response

  * res.send - parameter가 String일 때, 메소드가 Content-type을 자동으로 text/html으로 설정한다.
    * Array or Object라면 JSON representation으로 설정

# res.send와 res.json
  
  * res.send(body)의 body가 object이면 send 내부로직에서 type에 따라 나누어지는데, 이때 object이면 res.json에 가서 obj가 분해돼서 다시 send로 보내진다.
  * 보낼 body가 obj일 경우 json으로 보내면 위 단계에서 한 단계를 줄일 수 있기 때문에 더 효율적
  * 추가로 갹체를 보낸다면 res.json으로 send보다 명확하게 전달값이 json인지 구분할 수 있음