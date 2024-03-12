import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import {MainLayout} from "@/pages/MainLayout";
import "./global.css"

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Регистр ХСН",
  description: "Регистр пациентов с хронической сердечной недостаточностью",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body className={openSans.className}>
      <MainLayout>
        {children}
      </MainLayout>
      </body>
    </html>
  );
}
