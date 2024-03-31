import tw from "tailwind-styled-components";
import { components } from "./item";


export default function Sidebar() {
  return (
    <>
      <Wrapper>

        <BarTitleContainer>
          <BarTitle>API Descriptions</BarTitle>
          <Ver>V 1.0</Ver>
        </BarTitleContainer>

        <BarSubTitle>Category</BarSubTitle>
        {
          components.map((item) => (
            <BarItemContainer key={item.name}>
            <BarItem>{item.name}</BarItem>

            </BarItemContainer>
          ))
        }

      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
w-64 mx-8 mt-12
text-sm
`;

const BarTitleContainer = tw.div`
flex items-end justify-between p-2
`;

const BarTitle = tw.h3`
font-bold
`;

const Ver = tw.div`
mr-14
text-xs
`;

const BarSubTitle = tw.div`
text-xs font-bold p-3 mt-4
`;

const BarItemContainer = tw.div`

`;

const BarItem = tw.div`
mr-12 p-2 flex space-4 rounded-md hover:bg-gray-100 hover:font-bold
`;

const BarSubItem = tw.a`
`;
