class UserClient {
  login(id, password) {
    return fetch("http://example")
      .then((response) => response.json());
  }
}

module.exports = UserClient;
// UserClient 만드는 이유는 fetch 네트워크에 의존하기 때문에 user service를 단위 테스트할 때 힘듦...
//  UserClient는 mock이나 stub을 사용해서 네트워크 사용하지 않고 단위테스트 가능, 그래서 별도의 클래스 구성