import { HiOutlineMail } from "react-icons/hi";
import tw from "tailwind-styled-components";


export default function Header() {
  return (
    <>
      <Wrapper>
        <Title>joa-openapi</Title>
        <ContactContainer>
        <HiOutlineMail />
          <ContactItem>ssafy@ssafy.com</ContactItem>
          </ContactContainer>
        <Copyright>Copyright ⓒ SSAFY 10기 특화 A503</Copyright>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.footer`
text-gray-800 
mt-32
mb-4
py-8 
px-4
lg:px-32
flex 
items-center
justify-between
`;

const Title = tw.h1`
text-xl 
font-semibold
mr-16
lg:mr-20
`;

const ContactContainer = tw.div`
flex 
text-sm
items-end
`;

const ContactItem = tw.span`
ml-2
`;

const Copyright = tw.span`
text-sm
`
