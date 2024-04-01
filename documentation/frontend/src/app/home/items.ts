export const posts = [
    {
      title: '금융 API 테스트베드',
      description:
        '별도의 클라이언트 프로그램 없이도, 은행 시스템을 구축하고 Restful 방식을 테스트할 수 있습니다.',
        url:'/testbeds',
      image: {
        url: '/sample.png',
      },
    },
    {
      title: '샘플 어플리케이션',
      description:
        '클라이언트 개발 기간을 단축할 수 있도록 샘플 앱과 코드, 도커 이미지를 오픈 소스로 제공합니다.',
        url:'/demos',
      image: {
        url: '/sample.png',
      },
    },
    {
      title: '개발자 대시보드',
      description:
        '은행 시스템 이용 현황을 한눈에 파악하고 관리할 수 있는 실시간 대시보드를 지원합니다.',
        url:'https://admin.joa13.site/',
      image: {
        url: '/sample.png',
      },
    },
  ]
  
  export const team = {
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
      subimage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
      title1: '팀 소개',
      detail1: '저희는 삼성 청년 SW 아카데미 10기로, 핀테크 도메인의 특화 프로젝트를 위해 결성된 팀입니다.',
      title2: '기술 스택',
      detail2: '프론트엔드는 React, React-Native, Next.js, TypeScript, 백엔드는 Spring Boot, Spring Security, Redis 등의 기술 스택을 사용하였습니다.',
    }
  
 export interface Stat {
    id: number;
    name: string;
    value: string;
  }
  
  export const stats: Stat[] = [
    { id: 1, name: '서비스 이용자 수', value: '10' },
    { id: 2, name: '생성된 가상은행 수', value: '30' },
    { id: 3, name: '생성된 가상유저 수', value: '120' },
    { id: 4, name: '앱 다운로드 횟수', value: '0' }
  ];
  