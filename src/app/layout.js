import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteMetadata from "./metadata";
import Analytics from "@/compoenents/Analytics";


export const metadata= SiteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Analytics/>
        {children}
      </body>
    </html>
  );
}
