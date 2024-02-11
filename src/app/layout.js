import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "by Solomon Muyonjo, add your items and track your progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-SJEQ60HYRX" />
      </head>
      {children}
    </html>
  );
}
