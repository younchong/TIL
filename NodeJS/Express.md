# Middleware  

  * 미들웨어 함수는 app.미들웨어 함수가 적용되는 메소드("적용되는 경로", 미들웨어 함수 (req, res, next))
  * next 콜백함수는 parameter를 사용하면 바로 에러 핸들링하는 미들웨어 함수로 이동하고, 그렇지 않을 경우, 다음 미들웨어 함수로 넘어간다.
    * next에 넣어준 인자는 오류처리 미들웨어의 첫번째 인자인 err로 전해진다.
  * next를 가지고 있는 미들웨어 이상 사용하게 되면 기존 에러핸들링 미들웨어 함수가 실행된다.
  * next("route")로 사용하면 라우터 미들웨어 스택의 나머지 미들웨어 함수들은 건너뛰고, 그 다음 라우트로 제어를 전달한다.
    * app.METHOD() 또는 router.METHOD()함수를 이용해 로드된 미들웨어 함수에서만 작동됨.
  * Express5부터는 promise를 리턴하는 루트핸들러나 미들웨어가 reject되면 자동으로 next(value)를 호출한다.

# Response

  * res.send - parameter가 String일 때, 메소드가 Content-type을 자동으로 text/html으로 설정한다.
    * Array or Object라면 JSON representation으로 설정

# res.send와 res.json
  
  * res.send(body)의 body가 object이면 send 내부로직에서 type에 따라 나누어지는데, 이때 object이면 res.json에 가서 obj가 분해돼서 다시 send로 보내진다.
  * 보낼 body가 obj일 경우 json으로 보내면 위 단계에서 한 단계를 줄일 수 있기 때문에 더 효율적
  * 추가로 갹체를 보낸다면 res.json으로 send보다 명확하게 전달값이 json인지 구분할 수 있음

# route

  * app.route()를 사용하면 라우트 경로에 체인 가능한 라우트 핸들러를 작성할 수 있다.
  * app.route().get().post().put()...
  * express.Router는 클래스로, 모듈식 마운팅 가능한 핸들러 작성가능.

# req와 req의 life cycle

  * Node는 HTTP request를 받을 때 req, res object를 만든다.
  * 각각 http.IncomingMessage, http.ServerResponse의 instance이다.
  * Node에서는 비동기적인 흐름이 자연스럽다. (여러 요청이 왔을 때, 당연히 비동기적, 각각 scope로 구분)
  * 어떤 req이든 어디서든 참조하고 있으면, 그 object는 deallocated하지 않는다. (계속 가지고 있음)
  * express에서는 비동기적으로 작동하는 함수가 동작시키는 callback함수가 req, res object에 참조를 하고 있으면, 그 비동기 함수가 실행을 완료하고 콜백함수가 실행될 때까지 계속 가지고 있는다.
  * 모든 참조가 scope에서 벗어날때 까지