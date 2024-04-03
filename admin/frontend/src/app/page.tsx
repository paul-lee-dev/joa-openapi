"use client";

import { IAdminData } from "@/models/Admin.interface";
import { adminDataAtom } from "@/store/atom";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Home({}) {
  const [adminData, setClientAdminData] = useState<IAdminData | null>(null);
  const [recoilAdminData, setAdminData] = useRecoilState(adminDataAtom);

  useEffect(() => {
    setClientAdminData(recoilAdminData);
  }, [recoilAdminData]);

  useEffect(() => {
    if (adminData) {
      if (adminData.isLogin) {
        if (adminData.apiKey) {
          redirect("/admin");
        } else {
          alert("서비스를 이용하려면 apiKey를 먼저 발급해주세요.");
          redirect("/admin/setting");
        }
      } else {
        redirect("/login");
      }
    }
  }, [adminData]);
}
