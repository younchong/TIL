# Middleware  

  * 미들웨어 함수는 app.미들웨어 함수가 적용되는 메소드("적용되는 경로", 미들웨어 함수 (req, res, next))
  * next 콜백함수는 parameter를 사용하면 바로 에러 핸들링하는 미들웨어 함수로 이동하고, 그렇지 않을 경우, 다음 미들웨어 함수로 넘어간다.
    * next에 넣어준 인자는 오류처리 미들웨어의 첫번째 인자인 err로 전해진다.
  * next를 가지고 있는 미들웨어 이상 사용하게 되면 기존 에러핸들링 미들웨어 함수가 실행된다.
  * next("route")로 사용하면 라우터 미들웨어 스택의 나머지 미들웨어 함수들은 건너뛰고, 그 다음 라우트로 제어를 전달한다.
    * app.METHOD() 또는 router.METHOD()함수를 이용해 로드된 미들웨어 함수에서만 작동됨.
  * next("router")는 다른 router로 넘어간다.
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

  * Node는  HTTP request를 받을 때 req, res object를 만든다.
  * 각각 http.IncomingMessage, http.ServerResponse의 instance이다.
  * Node에서는 비동기적인 흐름이 자연스럽다. (여러 요청이 왔을 때, 당연히 비동기적, 각각 scope로 구분)
  * express에서는 비동기적으로 작동하는 함수가 동작시키는 callback함수가 req, res object에 참조를 하고 있으면, 그 비동기 함수가 실행을 완료하고 콜백함수가 실행될 때까지 계속 가지고 있는다.
  * HTTP request별로 만들어짐

# Passport flow

  * user가 login form으로 POST request보내면, passport.authenticate가 활성화됨
  * authenticate middleware가 passport가 사용하고 있는 strategy를 invoke함 (local 예시)
  * passport는 req.body로 정보를 받고, strategy안 verification 함수로 전달
  * 데이터베이스에서 user를 로딩하고, 정보들을 check
    * 에러가 생기면 done(err)실행
    * 데이터베이스에서 유저 정보 못찾으면, done(null, false)
    * 정상작동시 done(null, user)
    * done을 호출시 다시 passport.authenticate로 위 정보들중 하나랑 돌아감 (에러, 유저 정보 유무)
  * 유저가 전달되면, passport는 req.login을 호출
  * 그러면 passport.serializeUser가 호출되고, 이 메소드는 우리가 전달한 user object에 접근가능
    * passport.serializeUser의 역할이 session에 무엇을 담을지 정하는 것이다.
    * 그 결과 req.session.passport.user에 담김
    * req.user에도 담김 (passport.session이 passport.deserializeUser를 호출해서 담는다.)
  
  * 이후에 Express는 session data를 req에 붙힘.
  * 매번 request마다 passport.initialize가 invoke되고 session에 passport.user가 있는지 확인
    * 없다면 (아직 인증 전), req.passport.user = {}으로 만듦
  * passport.session이 실행되고, 이 메소드는 Passport Strategy가 매 request마다 실행시킴
    * serialised user가 session에 있다면, req가 authenticated로 확인
  * passport.session 미들웨어가 passport.deserializeUser를 호출하고, req.user에 user object를 붙힘
  
  ## 요약
  * passport.initialize 미들웨어가 매 req마다 실행돼서, req.user가 있는지 확인
  * passport.session 미들웨어가 서버에서 serialised user를 찾으면, req.user에 user object 붙힘
  * passport.deserializeUser가 매 req마다 호출돼서 (passport.session에 의해서), 추가 user 정보를 붙힐 수 있도록 도와줌
  * Local Strategy는 passport.authenticate 미들웨어를 통해서만 실행됨
  * 인증하는 동안에만, passport.serializeUser가 실행돼서 session에 무엇을 저장할지 정함