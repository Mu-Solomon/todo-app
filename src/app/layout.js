import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Add your items",
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
