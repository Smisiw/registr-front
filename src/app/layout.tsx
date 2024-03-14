import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import {MainLayout} from "@/pages/MainLayout";
import "./global.css"
import {ConfigProvider} from "antd";

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
        <ConfigProvider theme={{
            components: {
                Table: {
                    headerBg: '#E8E8E8',
                    borderRadius: 20
                }
            }
        }}>
            <body className={openSans.className}>
                {children}
            </body>
        </ConfigProvider>
    </html>
  );
}
