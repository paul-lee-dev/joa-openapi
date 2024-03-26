"use client";

import React, { ReactNode } from "react";
import "@/styles/global.css";

import { RecoilRoot, atom } from "recoil";
export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
