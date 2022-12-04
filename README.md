### PICKEAT

### 🥢 P!CKEAT

## 💁 팀원 소개

FrontEnd : 김보윤, 윤수민, 천정환
<br>
BackEnd : 김세호, 김한솔

## ✍️ 개발기간

2022년 11월 7일 ~ 2022년 11월 25일

## 👉 서비스 소개

요리 강의, 조리 도구 판매 사이트<br>

- 직관적인 UI 구성 페이지<br>
- 메인화면 부터 동적인 웹페이지<br>
- MZ세대에 맞춘 감성적인 디자인

## ✏️ 사용기술

- JavaScript, React, SASS
- 협업 툴: Git/GitHub, Trello, Slack, Notion

## ERD

![](https://user-images.githubusercontent.com/100466989/204090375-6d7a2e97-e9ff-43fa-974a-4f792266f784.png)

## API 명세서

[users]

- POST
  127.0.0.1:3002/users/signup 회원가입
  127.0.0.1:3002/users/signin 로그인

[Get products By Category & Type]
GET 127.0.0.1:3002/products?type=단과강의&name=한식&name=멕시코

[carts]

- POST
  Modify Cart product Quantity 127.0.0.1:3002/cart/11
  Add product into Cart 127.0.0.1:3002/cart/2

- DELETE  
  Delete product From cart 127.0.0.1:3002/cart/15

- GET
  Get Detail product By product Id 127.0.0.1:3002/lecture/11
  Get Cart List By User Id 127.0.0.1:3002/cart

![]https://documenter.getpostman.com/view/24101014/2s8YmRNLm9

## ✏️ 구현기능

- Footer, Top버튼 : 상수데이터 활용
- Nav Bar: 마우스 호버시 드롭다운 메뉴, 로그인시 아이콘 변경, 메뉴바 클릭시 페이지이동
- 로그인/회원가입: 유효성검사에 따른 회원가입, 로그인, 약관동의(체크박스 전체/개별 선택, 해제)
- 메인 페이지: 대표 이미지 캐러셀 구현, TOP5코스강의, 단과강의 데이터 불러오기
- 리스트 페이지: 각각 강의/상품 데이터 불러오기, 필터링 기능
- 상세 페이지: 장바구니 담기, 리뷰 달기, 별점 달기
- 장바구니: 수량에 따른 주문 금액 조절, 상품 삭제

### 로그인, 회원가입

![]https://user-images.githubusercontent.com/110155085/203941590-2c1eb19d-f3eb-4708-a31f-cdcd2e514969.mp4

### 메인페이지

![]https://user-images.githubusercontent.com/110155085/203941837-f36ae900-e6a2-40a9-b096-ea287d277cd5.mp4
<>
![]https://user-images.githubusercontent.com/110155085/203941231-2b7065ff-3ddb-4cd4-ae52-032a1a6a2084.mp4

### 카테고리

![]https://user-images.githubusercontent.com/110155085/203942226-a83e13ad-2c87-4c20-b58a-89b6550a832c.mp4

### 상세페이지

![]https://user-images.githubusercontent.com/110155085/203942185-d0a89646-46c6-4234-875f-ee524505b408.mp4

### 장바구니

![]https://user-images.githubusercontent.com/110155085/203941697-9a28a124-d221-4410-a912-5424a050d1ac.mp4
