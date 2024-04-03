import tw from "tailwind-styled-components";
import { redirect, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import NavbarImg from "@/asset/img/navbar.png";
import UserImg from "@/asset/img/user.png";
import { useEffect, useState } from "react";
import { IAdminData } from "@/models/Admin.interface";
import { useRecoilState } from "recoil";
import { adminDataAtom } from "@/store/atom";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [adminData, setClientAdminData] = useState<IAdminData | null>(null);
  const [recoilAdminData, setAdminData] = useRecoilState(adminDataAtom);

  useEffect(() => {
    setClientAdminData(recoilAdminData);
  }, [recoilAdminData]);

  useEffect(() => {
    if (adminData) {
      if (!adminData.isLogin) {
        redirect("/login");
      } else if (!adminData.apiKey && pathname !== "/admin/setting") {
        redirect("/admin/setting");
      }
    }
  }, [adminData, pathname]);

  return (
    <Wrapper>
      <div
        onClick={() => router.push("/")}
        className="w-52 flex justify-center items-center pb-2 cursor-pointer"
      >
        <Image src={NavbarImg} alt="Admin" draggable={false} />
      </div>
      <UserContainer>
        <div
          onClick={() => router.push("/admin/profile")}
          className="w-16 flex justify-center items-center mr-8 cursor-pointer"
        >
          <Image src={UserImg} alt="Admin" draggable={false} />
        </div>
      </UserContainer>
    </Wrapper>
  );
}

const Wrapper = tw.nav`
bg-pink-100
text-gray-800 
py-4 
px-6 
h-20
flex 
justify-between 
items-center
`;

const UserContainer = tw.div`
flex items-center
`;
