import tw from "tailwind-styled-components";
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Wrapper>
        <Title>joa-openapi</Title>
        <MenuContainer>
          <MenuItem><Link href="/home">Home</Link></MenuItem>
          <MenuItem><Link href="/demos">Demos</Link></MenuItem>
          <MenuItem><Link href="/testbeds">Test Beds</Link></MenuItem>
          <MenuItem><Link href="/docs">Docs</Link></MenuItem>
          <MenuItem>Admin</MenuItem>
        </MenuContainer>
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

const MenuContainer = tw.div`
flex items-center
`;

const MenuItem = tw.span`
mr-2
`;
