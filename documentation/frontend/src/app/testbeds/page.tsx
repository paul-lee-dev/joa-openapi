import Testbed from "@/app/testbeds/components/testbed";
import tw from "tailwind-styled-components";
import Sidebar from "./components/sidebar";

const Home = () => {
  return (
    <>
      {/* <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer> */}
      <TestBedContainer>
        <Testbed></Testbed>
      </TestBedContainer>
    </>
  );
};

const SidebarContainer = tw.div`

`;

const TestBedContainer = tw.div`
flex
xl:w-full
min-h-screen
p-2
!pt-[10px] md:p-2
`;

export default Home;
