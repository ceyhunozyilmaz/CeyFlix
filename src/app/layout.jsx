import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "CeyFlix",
};

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
