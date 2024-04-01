"use client";

import { adminDataAtom } from "@/store/atom";
import { redirect } from "next/navigation";
import { useRecoilValue } from "recoil";
export default function Home({}) {
  const adminData = useRecoilValue(adminDataAtom);
  if (adminData.isLogin) {
    redirect("/admin");
  } else {
    redirect("/login");
  }
}
