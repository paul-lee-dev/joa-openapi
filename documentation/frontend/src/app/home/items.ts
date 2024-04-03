

export const posts = [
    {
      title: '금융 API 테스트베드',
      description:
        '별도의 클라이언트 프로그램 없이도, 은행 시스템을 구축하고 Restful 방식을 테스트할 수 있습니다.',
        url:'/testbeds',
      image: {
        url: '/post1.png',
      },
    },
    {
      title: '샘플 어플리케이션',
      description:
        '클라이언트 개발 기간을 단축할 수 있도록 샘플 앱과 도커 이미지 등을 오픈 소스로 제공합니다.',
        url:'https://drive.google.com/file/d/1NkIEsYFl08CIaXb5NmtYruOxnIm-jjvH/view',
      image: {
        url: '/post4.png',
      },
    },
    {
      title: '개발자 대시보드',
      description:
        '은행 시스템 이용 현황을 한눈에 파악하고 관리할 수 있는 실시간 대시보드를 지원합니다.',
        url:'https://admin.joa13.site/',
      image: {
        url: '/post3.png',
      },
    },
  ]
  
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
  
  export const post2 = [
    {
      id: 1,
      title: '샘플 코드',
      href: 'https://github.com/',
      description:
        'GitHub에서 샘플 코드를 둘러보세요.',
      image: {
        url: '/sample.png',
      },
    },
    {
      id: 2,
      title: '이슈 제보',
      href: 'https://github.com/',
      description:
        '기능의 Docs에 기재된 것과 다르게 동작하는 경우, GitHub에 Issue를 생성하여 알려주세요. 문제 해결을 위해 노력하겠습니다.',
      image: {
        url: '/sample.png',
      },
    },
  ]
  
  export const qna = [
    {
      question: '1. JOA OPEN API는 어떤 사람이 활용하면 좋을까요?',
      answer: 'JOA OPEN API는 핀테크 분야의 프로젝트, 특히 은행 관련 프로젝트를 해 보고 싶은 개발자 지망생을 위한 서비스입니다. 실제 은행에서 제공되는 API의 경우 그 종류와 활용 방식이 제한적이고, 이용법이 복잡하며 높은 비용이 발생하는 등의 한계가 존재합니다. 본 서비스는 그러한 실제 은행 API에 대한 대안책을 목표로 제작되었습니다. 따라서 관련 프로젝트 제작을 통해 경험을 쌓고자 하는 분들이 사용한다면 특히 유용할 것이라고 자부합니다.'
    },
    {
      question: '2. 사용하기에 복잡하거나 어렵지는 않나요?',
      answer: '네, JOA OPEN API는 웹 개발이 익숙하지 않은 초심자도 어렵지 않게 활용할 수 있는 서비스를 지향합니다. 또한 서비스 이용에 많은 도움이 될 수 있도록 제공 API에 대한 상세한 명세, 전반적인 서비스 활용 가이드 문서를 제공하므로, 천천히 읽으면서 따라해 본다면 손쉽게 서비스 이용이 가능합니다.',
    },
  ]