import { HiOutlineMail } from "react-icons/hi";
import { RiDiscordLine } from "react-icons/ri";
import tw from "tailwind-styled-components";


export default function Header() {
  return (
    <>
      <Wrapper>
        <Title>joa-openapi</Title>
        <ContactContainer>
          <HiOutlineMail />
          <ContactItem>ssafy@ssafy.com</ContactItem>
          <RiDiscordLine />
          <ContactItem>김싸피#1234</ContactItem>
        </ContactContainer>
        <Copyright>Copyright ⓒ SSAFY 10기 특화 A503</Copyright>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.header`
bg-pink-200
text-gray-800 
py-4 
px-6 
flex 
justify-between 
items-center
`;

const Title = tw.h1`
text-xl 
font-semibold
`;

const ContactContainer = tw.div`
flex items-center
`;

const ContactItem = tw.span`
mr-2
`;

const Copyright = tw.span`
mr-2
`
