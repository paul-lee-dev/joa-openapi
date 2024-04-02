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
        redirect("/admin");
      } else {
        redirect("/login");
      }
    }
  }, [adminData]);
}
