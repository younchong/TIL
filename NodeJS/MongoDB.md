# Database

  * MongoDB, 클라우드는 가상 서버에 나의 데이터를 저장하는 곳
  * MongoDB compass로 정보 쉽게 올릴 수 있음 -> 서버랑 db랑 연결 -> model이용해서 불러오기
  * MongoDB URI에 <mydb>에 해당하는 부분은 collections에 해당하는 directory이름으로 해줘야한다.

#  mongoose

  * mongoose.model(<Collectionname>, <CollectionSchema>)
  * model의 첫번째 인자는 collection에서 복수형과 소문자 버젼들의 모델을 모두 찾는다. 
  * model함수는 schema의 카피를 만든다. schema내부에 필요한 것들을 다 작성했는지 확인
  * mongoose에서 document는 model의 인스턴스이다.