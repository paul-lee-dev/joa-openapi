import { HiUser } from "react-icons/hi";
import { useState } from "react";
import tw from "tailwind-styled-components";
import { usePathname } from "next/navigation";

export default function Header() {
  const [title, setTitle] = useState("");
  const handleTitle = (event: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setTitle(event.target.value);
  };
  const currentRoute = usePathname();
  console.log(currentRoute);
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
