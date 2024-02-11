// pages/index.js
"use client";

import HomePage from "@/components/homePage";
import { useState, useEffect } from "react";

export default function Home() {
  // State to manage the theme
  const [theme, setTheme] = useState("light"); // Default to light mode

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Effect to check system color scheme preference
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDarkMode ? "dark" : "light");

    const handleSystemColorSchemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemColorSchemeChange);
    };
  }, []);

  return (
    <body className={` ${theme === "dark" ? "bg-[#25273c]" : "bg-[#fafafa]"}`}>
      <HomePage theme={theme} changeTheme={toggleTheme} />
    </body>
  );
}
