"use client";

import HomePage from "@/components/homePage";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log(theme);
  };
  return (
    <body className={` ${theme == "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"}`}>
      <HomePage theme={theme} changeTheme={changeTheme} />
    </body>
  );
}
