# 7장 응용 계층: 애플리케이션에 데이터 전송하기

애플리케이션이 동작하는 계층을 응용 계층이라고 한다.

응용 계층의 주요 프로토콜에는 HTTP, FTP(File Transfer Protocol), DNS, SMTP, POP3가 있다.

### HTTP

HTTP/1.1 버전은 keepalive 기능이 있어서 데이터를 교환하는 동안에 연결을 유지하고 데이터 교환이 끝나면 연결을 끊는다.

HTTP/2 버전은 요청을 보낸 순서대로 응답을 반환하지 않아도 된다.

### DNS (이름 해석)

DNS는 URL을 IP주소로 변환하는 서비스(시스템)이다.

DNS 서버는 전 세계에 흩어져 있고 모두 계층적으로 연결되어 있다.

요청받은 DNS 서버가 해당 도메인 이름의 IP주소를 모르면 다른 DNS 서버에  물어본다.

### 메일 서버의 구조 (SMTP와 POP3)

메일 송신은 SMTP(SImple Mail Transfer Protocol) 25번 포트를 사용, 메일 서버 간에도 SMTP 사용

메일 수신은 POP3(프로토콜) 110번 포트 사용
