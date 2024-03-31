import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>용어 정의</Title>

        <Subtitle>관리자(Admin)</Subtitle>
        <TextItem>
          본 JOA OPEN API의 핵심 이용자입니다. 주로 개발자들로서, JOA OPEN API에 회원가입 후 API 키를 발급받아 자신만의 은행 시스템을 구축할 수 있습니다. JOA OPEN API는 실제 은행 시스템에서 사용되는 기능을 가상으로 구현할 수 있도록 설계되었기에, 이를 활용한다면 은행 관련 개발 프로젝트를 보다 쉽게 진행할 수 있을 것입니다.
        </TextItem>

        <Subtitle>은행 고객(Member)</Subtitle>
        <TextItem>
          관리자가 생성한 가상의 은행을 이용하는 가상 고객입니다. 경우에 따라서는 임의로 해당 가상 은행에 가입한 실제 사용자일 수도 있습니다. 이러한 은행 고객은 JOA OPEN API를 통해 구축된 가상의 은행 시스템 내에서 다양한 금융 서비스를 이용함으로써 실제 은행에서 제공되는 서비스와 유사한 경험을 체험할 수 있습니다.
        </TextItem>

        <Subtitle>더미(Dummy)</Subtitle>
        <TextItem>
          프로젝트 초기 단계에서 실제 사용자가 없는 경우, 관리자는 자신의 프로젝트 진행 상황을 확인하거나 제3자에게 보여주기 위해 일정량의 더미 데이터가 필요할 것입니다. JOA OPEN API 서비스를 사용하면 간편하게 더미 데이터 생성과 관리가 가능하므로, 이를 실제 은행 시스템에서 발생할 수 있는 다양한 시나리오를 보여주는 데 활용할 수 있습니다.
        </TextItem>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
mt-8 space-y-6 text-sm
`;

const Title = tw.h2`
text-3xl font-bold
`;

const Subtitle = tw.h3`
text-xl font-bold
`;

const TextItem = tw.div`
leading-7 break-keep
`
