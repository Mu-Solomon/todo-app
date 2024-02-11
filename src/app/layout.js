import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata = {
  title: "Todo App",
  description: "Add your items",
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
