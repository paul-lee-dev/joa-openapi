import Testbed from "@/app/testbeds/components/testbed";
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <TestBedContainer>
        <Testbed></Testbed>
      </TestBedContainer>
    </>
  );
};

const TestBedContainer = tw.div`
flex
xl:w-full
min-h-screen
p-2
!pt-[10px] md:p-2
`;

export default Home;
