# 핀테크 프로젝트를 위한 금융 OpenAPI  JOA OpenAPI


# 목차

1. [**서비스 소개**](#서비스-소개)
2. [**기획 배경**](#기획-배경)
3. [**팀 구성**](#개발-멤버-및-일정-소개)
4. [**기능 소개**](#기능-소개)
5. [**시연 영상**](#시연-영상)
6. [**기술 스택**](#기술-스택)
7. [**프로젝트 일정 및 산출물**](#프로젝트-산출물)
8. [**UCC**](#UCC)
9. [**참고**](#참고)

# 서비스 소개
- 기간 : 2024.03.~
- 인원 : 6명
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
| [조아영](https://github.com/benyy0101)                                                    | [구본승](https://github.com/rheeeuro)                                                     | [고수림](https://github.com/JHyeon-a)                                                                                          | [김희연](https://github.com/heeyeon3050)                                                   | [이유로](https://github.com/Damongsanga)                                                   | [이정호](https://github.com/Zerotay)                                                      |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/65917479?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/47638660?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/139304856?v=4cd575a38-8fc4-4470-889b-b920862f2e30" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/111184269?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/110401199?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/67823010?v=4" width="150" height="150"> |
| Leader, Front                                                                             | Front, Back                                                                               | Front                                                                                                                          | Back                                                                                       | Back                                                                                       | CI&CD, Front                                                                              |
| PM<br/>로그인 페이지<br/>방 목록 페이지<br/>채널, 라운지 페이지                                                            | 캠/화면 공유<br/>방 동시성 구현<br/>코드 동시 편집<br/>메인페이지                                    | UI/UX<br/>게시판 페이지<br/>유저페이지<br/>S3 이미지 업로드                           | 캠/화면 공유<br/> 방 동시성 구현<br/>실시간 채팅<br/>게시판 CRUD                         | 인증/인가<br/> 방 CRUD<br/>채널, 라운지 CRUD<br/> 메타데이터 로직                                                | 인프라 구축<br/> CI/CD<br/>API 연동<br/>게시판 페이지                                                                   |

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
<img src="https://img.shields.io/badge/mongodb-4479A1?style=for-the-badge&logo=mongodb&logoColor=white" height="25">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white" width="auto" height="25">

**Environment**
<br/>
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/sonarqube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/openvidu-F46800?style=for-the-badge&logoColor=white" width="auto" height="25">

**Cooperation**
<br/>
<img src="https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" width="auto" height="25">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" width="auto" height="25">

<br/>


# 아키텍처


# 시연 영상


# 주요기능

### **Docs**

1. 메인화면
<br/>
<img src="./assets/Docs/Docs-Home.gif" style="height : 150;"/>
2. Docs
<br/>
<img src="./assets/Docs/Docs-Docs.gif" style="height : 150;"/>
3. APIs
<br/>
<img src="./assets/Docs/Docs-APIs.gif" style="height : 150;"/>

### **Admin**

1. 설정
<br/>
<img src="./assets/Admin/Admin-SignupGetAPIKey.gif" style="height : 150;"/>
2. 대시보드
<br/>
<img src="./assets/Admin/Admin-Dashboard.gif" style="height : 150;"/>
3. 은행
<br/>
<img src="./assets/Admin/Admin-CreateBank.gif" style="height : 150;"/>
4. 상품
<br/>
<img src="./assets/Admin/Admin-CreateProduct.gif" style="height : 150;"/>
5. 계좌
<br/>
<img src="./assets/Admin/Admin-CreateAccount.gif" style="height : 150;"/>
6. 고객
<br/>
<img src="./assets/Admin/Admin-CreateMember.gif" style="height : 150;"/>
7. 거래내역
<br/>
<img src="./assets/Admin/Admin-CreateTransaction.gif" style="height : 150;"/>
8. 더미데이터
<br/>
<img src="./assets/Admin/Admin-CreateDummyMember.gif" style="height : 150;"/>
<img src="./assets/Admin/Admin-CreateDummyAccount.gif" style="height : 150;"/>
<img src="./assets/Admin/Admin-CreateDummyTransaction.gif" style="height : 150;"/>

### **App**

1. 회원가입 / 로그인
<br/>
<img src="./assets/App/회원가입1.gif" style="height : 150;"/>
<img src="./assets/App/회원가입2.gif" style="height : 150;"/>
<img src="./assets/App/로그인 최종.gif" style="height : 150;"/>
2. 계좌생성
<br/>
<img src="./assets/App/적금계좌생성.gif" style="height : 150;"/>
<img src="./assets/App/상품 자세히보기.gif" style="height : 150;"/>
3. 계좌조회
<br/>
<img src="./assets/App/계좌조회.gif" style="height : 150;"/>
<img src="./assets/App/계좌조회 메뉴.gif" style="height : 150;"/>
4. 이체
<br/>
<img src="./assets/App/이체.gif" style="height : 150;"/>
5. 거래내역 조회
<br/>
<img src="./assets/App/거래내역조회.gif" style="height : 150;"/>
6. 은행코드 변경
<br/>
<img src="./assets/App/은행코드바꾸기.gif" style="height : 150;"/>

# UCC


# 프로젝트 산출물

### 1. ERD

### 2. API 문서

### 3. 요구사항 명세서

# 참고
