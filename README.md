# 핀테크 프로젝트를 위한 금융 OpenAPI JOA OpenAPI
![joa-openeapi](./assets/joa-openapi.PNG){: width="60%" height="40%"}


# 목차

1. [**서비스 소개**](#서비스-소개)
2. [**기획 배경**](#기획-배경)
3. [**기능 소개**](#기능-소개)
4. [**팀 구성**](#팀-구성)
5. [**기술 스택**](#기술-스택)
6. [**아키텍처**](#아키텍처)
7. [**주요기능**](#주요기능)
8. [**시연영상**](#시연-영상)
9. [**UCC**](#시연-영상)
10. [**프로젝트 산출물**](#프로젝트-산출물)

# 서비스 소개
- 기간 : 2024.02.19 ~ 2024.04.05 (7주)
- 개요 : 핀테크 프로젝트를 위한 금융 OpenAPI 제공
- 타겟 : 핀테크 개발자

# 기획 배경
- 제한된 API 종류
- API가 유료이거나 신청이 복잡함
- 데이터 셋을 만드는 것이 번거로움

# 기능 소개
- Docs : 공식 문서 가이드, API 테스트베드 제공
- Admin : 데이터 통계를 확인할 수 있는 관리자 대시보드 제공, 더미데이터 생성
- App : OpenAPI를 쉽게 테스트 할 수 있는 앱 (계좌 조회, 거래내역 조회, 이체 등)

# 팀 구성
| [조아영](https://github.com/aycho00)                                                    | [구본승](https://github.com/kbs3103)                                                     | [고수림](https://github.com/sulim0314)                                                                                          | [김희연](https://github.com/heeyeon3050)                                                   | [이유로](https://github.com/rheeeuro)                                                   | [이정호](https://github.com/paul-lee-dev)                                                      |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/141216710?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/83584849?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/125880884?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/111184269?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/47638660?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/91371560?v=4" width="150" height="150"> |
| 팀장, 풀스택                                                                             | 백엔드                                                                               | 인프라, 백엔드                                                                                                                          | 백엔드 리더                                                                                       |이유로                                                                                       | 이정호                                                                              |
| 팀장, 풀스택<br/>Docs 페이지 구현<br/>사용자 인증/인가<br/>          | 은행 생성 API 개발<br/>더미데이터 API 개발<br/>                                 | CI/CD 구축<br/>이메일 인증 및 검색 API 개발<br/>| 계좌, 상품 API 개발<br/> 거래내역 API 개발<br/>                       | 애플리케이션 구현<br/>Admin 페이지 API 연동                                            | Admin 레이아웃 구현<br/> 대시보드 구현<br/>     |

<br/>

# 기술 스택
**Front**
<br/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black" width="auto" height="25">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" width="auto" height="25">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" width="auto" height="25">

**Back**
<br/>
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/SPRING DATA JPA-6DB33F?style=for-the-badge&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/querydsl-669DF6?style=for-the-badge&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/SPRING SECURITY-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" width="auto" height="25">

**Database**
<br/>
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" width="auto" height="25">

**Environment**
<br/>
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" width="auto" height="25">

**Cooperation**
<br/>
<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" width="auto" height="25">

<br/>


# 아키텍처
![아키텍처](./assets/Architecture.PNG){: width="50%" height="50%"}
<br/>

# 주요기능

## **Docs**

### 1. 메인화면
- Docs의 다양한 기능들을 Overview로 제공
<br/>
![메인화면](./assets/docs/Docs-Home.gif){: width="50%" height="40%"}
<br/>
<br/>

### 2. Docs
- API를 쉽게 사용할 수 있도록 사용법 제공
- 시작하기, 용어 정의, 프로젝트 구조, 커스텀 방법, 샘플 앱 이용법
<br/>
![Docs](./assets/docs/Docs-Docs.gif){: width="50%" height="40%"}
<br/>
<br/>

### 3. APIs
- 43개의 API의 Request, Response 정보 제공
- Request, Response 정보를 제공하고, 이를 바탕으로 테스트베드 사용
<br/>
![APIs](./assets/docs/Docs-APIs.gif){: width="50%" height="40%"}
<br/>
<br/>

## **Admin**

### 1. 설정
- 설정에서 API 키 발급/재발급 가능
<br/>
![설정](./assets/admin/Admin-APIKey.gif){: width="50%" height="40%"}
<br/>
<br/>

### 2. 대시보드
- 총 거래횟수, 고객수, 총 출금액, 총 입금액 통계 제공
- 데이터를 바탕으로 한 차트 제공. 파일 export 가능
<br/>
![대시보드](./assets/admin/Admin-Dashboard.gif){: width="50%" height="40%"}
<br/>
<br/>

### 3. 은행
- 은행 생성 시, 자동으로 기본 입출금통장 생성
<br/>
![은행](./assets/admin/Admin-Bank.gif){: width="50%" height="40%"}
<br/>
<br/>

### 4. 상품
- 상품 생성 시: 상품 종류 선택, 금리 설정, 이자율 설정, 지급 방법 선택
<br/>
![상품](./assets/admin/Admin-Product.gif){: width="50%" height="40%"}
<br/>
<br/>

### 5. 계좌
- 계좌 신청 시: 출금 계좌 선택, 입금 금액 입력, 기간 선택, 과세 유형 선택, 비밀번호 입력
<br/>
![계좌](./assets/admin/Admin-Account.gif){: width="50%" height="40%"}
<br/>

- 은행에 등록된 고객들에 대한 조회
<br/>
![고객](./assets/admin/Admin-Member.gif){: width="50%" height="40%"}
<br/>
<br/>

### 6. 거래내역
- 입금, 출금, 이체, 이자에 대한 내역들 조회
<br/>
![거래내역](./assets/admin/Admin-Transaction.gif){: width="50%" height="40%"}
<br/>
<br/>

### 7. 더미데이터
- 은행, 계좌, 거래내역 편하게 생성
- 더미데이터 개수 입력
- 원하는 주기에 자동으로 생성
<br/>
![더미멤버](./assets/admin/Admin-Dummy.gif){: width="50%" height="40%"}
<br/>
<br/>

## **App**

### 1. 회원가입 / 로그인
![회원가입1](./assets/app/회원가입1.gif){: width="20%" height="20%"}
![회원가입2](./assets/app/회원가입2.gif){: width="20%" height="20%"}
![로그인](./assets/app/로그인 최종.gif){: width="20%" height="20%"}
<br/>
### 2. 계좌생성
![적금생성](./assets/app/적금계좌생성.gif){: width="20%" height="20%"}
![상품상세](./assets/app/상품 자세히보기.gif){: width="20%" height="20%"}
<br/>
### 3. 계좌조회
![슬라이드](./assets/app/계좌조회.gif){: width="20%" height="20%"}
![메뉴보기](./assets/app/계좌조회 메뉴.gif){: width="20%" height="20%"}
<br/>
### 4. 이체
![이체](./assets/app/이체.gif){: width="20%" height="20%"}
<br/>
### 5. 거래내역 조회
![거래내역](./assets/app/거래내역조회.gif){: width="20%" height="20%"}
<br/>
### 6. 은행코드 변경
![로그인](./assets/app/은행코드바꾸기.gif){: width="20%" height="20%"}
<br/>
<br/>

# UCC
[![Video Label](./assets/docs/joa-openapi.PNG){: width="50%" height="30%"}
](https://www.youtube.com/watch?v=fE_YQiPRDG8)
<br/>

# 프로젝트 산출물

### [1. 요구사항 명세서](https://joyous-panther-248.notion.site/ecbdfe5401f544fabd2ef787d504a2e7?v=c37ca8d9e0614a699c0b7d4fd5053977&pvs=4)
![Required](./assets/Required.PNG){: width="50%" height="30%"}

### [2. ERD](https://joyous-panther-248.notion.site/ERD-87128130a6a24b09a8fb751879ec867d?pvs=4)
![ERD](./assets/ERD.PNG){: width="50%" height="30%"}

### [3. API 명세서](https://joyous-panther-248.notion.site/API-2eab3ac9ef1b46c780b53af9c3ae6854?pvs=4)
![API](./assets/API.PNG){: width="50%" height="30%"}
<br/>

# 참고
### [노션](https://joyous-panther-248.notion.site/A503-13-7e43baa015974b2eb153f22c622f4c84?pvs=4)
