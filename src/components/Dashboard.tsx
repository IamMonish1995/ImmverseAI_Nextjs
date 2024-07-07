"use client";
import React from "react";
import useStorage from "@/hooks/useStorage";
import { useRouter } from "next/navigation";
const Dashboard = () => {
  const { token } = useStorage();
  const router = useRouter();
  if (token) {
    router.push("/todos");
  } else {
    router.push("/auth/login");
  }
  return <div>Loading</div>;
};

export default Dashboard;
