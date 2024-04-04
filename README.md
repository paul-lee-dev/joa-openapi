# 핀테크 프로젝트를 위한 금융 OpenAPI JOA OpenAPI
![joa-openeapi](./assets/docs/joa-openapi.PNG) {: width="30%" height="20%"}


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
| [조아영](https://github.com/aycho00)                                                    | [구본승](https://github.com/rheeeuro)                                                     | [고수림](https://github.com/JHyeon-a)                                                                                          | [김희연](https://github.com/heeyeon3050)                                                   | [이유로](https://github.com/Damongsanga)                                                   | [이정호](https://github.com/Zerotay)                                                      |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/65917479?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/47638660?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/139304856?v=4cd575a38-8fc4-4470-889b-b920862f2e30" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/111184269?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/110401199?v=4" width="150" height="150"> | <img src="https://avatars.githubusercontent.com/u/67823010?v=4" width="150" height="150"> |
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


# 시연 영상


# 주요기능

### **Docs**

1. 메인화면
<br/>
![메인화면](./assets/Docs/Docs-Home.gif){: width="50%" height="50%"}
<br/>
2. Docs
<br/>
![Docs](./assets/Docs/Docs-Docs.gif){: width="50%" height="50%"}
<br/>
3. APIs
<br/>
![APIs](./assets/Docs/Docs-APIs.gif){: width="50%" height="50%"}
<br/>

### **Admin**

1. 설정
<br/>
![설정](./assets/Admin/Admin-SignupGetAPIKey.gif){: width="50%" height="50%"}
<br/>
2. 대시보드
<br/>
![대시보드]](./assets/Admin/Admin-Dashboard.gif){: width="50%" height="50%"}
<br/>
3. 은행
<br/>
![은행](./assets/Admin/Admin-CreateBank.gif){: width="50%" height="50%"}
<br/>
4. 상품
<br/>
![상품](./assets/Admin/Admin-CreateProduct.gif){: width="50%" height="50%"}
<br/>
5. 계좌
<br/>
![계좌](./assets/Admin/Admin-CreateAccount.gif){: width="50%" height="50%"}
<br/>
6. 고객
<br/>
![고객](./assets/Admin/Admin-CreateMember.gif){: width="50%" height="50%"}
<br/>
7. 거래내역
<br/>
![거래내역](./assets/Admin/Admin-CreateTransaction.gif){: width="50%" height="50%"}
<br/>
8. 더미데이터
<br/>
![더미멤버](./assets/Admin/Admin-CreateDummyMember.gif){: width="50%" height="50%"}
![더미계좌](./assets/Admin/Admin-CreateDummyAccount.gif){: width="50%" height="50%"}
![더미내역](./assets/Admin/Admin-CreateDummyTransaction.gif){: width="50%" height="50%"}
<br/>

### **App**

1. 회원가입 / 로그인
<br/>
![회원가입1](./assets/App/회원가입1.gif){: width="30%" height="30%"}
![회원가입2](./assets/App/회원가입2.gif){: width="30%" height="30%"}
![로그인](./assets/App/로그인 최종.gif){: width="30%" height="30%"}
<br/>
2. 계좌생성
<br/>
![적금생성](./assets/App/적금계좌생성.gif){: width="30%" height="30%"}
![상품상세](./assets/App/상품 자세히보기.gif){: width="30%" height="30%"}
<br/>
3. 계좌조회
<br/>
![슬라이드](./assets/App/계좌조회.gif){: width="30%" height="30%"}
![메뉴보기](./assets/App/계좌조회 메뉴.gif){: width="30%" height="30%"}
<br/>
4. 이체
<br/>
![이체](./assets/App/이체.gif){: width="30%" height="30%"}
<br/>
5. 거래내역 조회
<br/>
![거래내역](./assets/App/거래내역조회.gif){: width="30%" height="30%"}
<br/>
6. 은행코드 변경
<br/>
![로그인](./assets/App/은행코드바꾸기.gif){: width="30%" height="30%"}
<br/>

# UCC


# 프로젝트 산출물

### 1. ERD

### 2. API 문서

### 3. 요구사항 명세서

# 참고
