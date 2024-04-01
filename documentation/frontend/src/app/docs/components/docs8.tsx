import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>커스텀 방법</Title>
        <Subtitle>
          Docker 이미지 사용 방법
        </Subtitle>
        <TextItem>
          이 프로젝트는 Docker 이미지를 통해 쉽게 실행할 수 있도록 제공됩니다.<br />
          Docker를 사용하면 따로 환경을 구성하지 않고도 애플리케이션을 바로 시작해 사용할 수 있습니다.<br />
          다만, 데이터베이스 관련 설정은 별도로 진행해야 합니다.<br />
        </TextItem>

        <Subtitle>
          Docker 이미지 다운로드 및 실행
        </Subtitle>
        <NumberTitle>
          1. Docker 이미지 다운로드
        </NumberTitle>
        <TextItem>
          먼저, 아래의 명령어를 입력하여 필요한 Docker 이미지를 다운로드합니다.
        </TextItem>
        <CodeItem>
          docker pull sulim0314/joa_openapi:latest
        </CodeItem>
        <NumberTitle>
          2. Docker 컨테이너 실행
        </NumberTitle>
        <TextItem>
          이미지 다운로드가 완료되면, 다음의 명령어를 통해 Docker 컨테이너를 실행할 수 있습니다. <br />
          (아래 명령어는 예시이며, 실제 사용 환경에 맞게 조정이 필요할 수 있습니다.)<br />
          <CodeLine>-d</CodeLine>는 컨테이너를 백그라운드에서 실행하도록 하는 옵션입니다. <br />
          <CodeLine>-p 8080:8080</CodeLine>은 호스트의 8080 포트와 컨테이너의 8080 포트를 연결하는 옵션입니다.
        </TextItem>
        <CodeItem>
          docker run -d -p 8080:8080 sulim0314/joa_openapi:latest
        </CodeItem>

        <Subtitle>
          데이터베이스 설정
        </Subtitle>
        <TextItem>
          이 애플리케이션을 사용하기 위해서는 데이터베이스 설정이 필요합니다. <br />
          현재 제공되는 Docker 이미지에는
          <CodeLine>application.yml</CodeLine>
          파일이 포함되어 있지 않으므로, 사용자는 데이터베이스 설정을 직접 완료해야 합니다. 데이터베이스 설정 방법은 사용하고 있는 데이터베이스 시스템의 문서를 참조하여 진행하시기 바랍니다.<br />
          데이터베이스 연결 정보는 애플리케이션을 실행하기 전에 적절히 구성되어야 합니다.
        </TextItem>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
mt-8 space-y-6 text-sm
`;

const Title = tw.h2`
text-3xl font-bold mt-24
`;

const Subtitle = tw.h3`
text-xl font-bold
`;

const NumberTitle = tw.h4`
font-bold
`

const TextItem = tw.div`
leading-7 break-keep
`
const CodeItem = tw.div`
bg-gray-100 
hover:bg-gray-200
rounded-lg
p-4
flex
text-xs
font-semibold
`;

const CodeLine = tw.span`
bg-gray-200
p-1
rounded
text-xs
font-semibold
`;