// src/app/layout.js
import { Open_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import Spinner from "@/components/spinner/Spinner";
import SearchModal from "@/components/search/SearchModal";
import BootstrapScripts from "@/components/utils/BootstrapScripts";
import BackToTop from "@/components/backToTop/BackToTop";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Intelliforge – AI & RPA Solutions",
  description:
    "Transform your business with intelligent AI and RPA solutions. Optimize operations, enhance customer experiences, and accelerate innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Spinner />
        <Navbar />
        <SearchModal />
        {children}
        <Footer />
        <BootstrapScripts />
        <BackToTop />
      </body>
    </html>
  );
}
