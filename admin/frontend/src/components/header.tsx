import { HiUser } from "react-icons/hi";
import tw from "tailwind-styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Title>Admin</Title>
      <UserContainer>
        <UserName>Username</UserName>
        <HiUser></HiUser>
      </UserContainer>
    </Wrapper>
  );
}

const Wrapper = tw.nav`
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

const UserContainer = tw.div`
flex items-center
`;

const UserName = tw.span`
mr-2
`;
