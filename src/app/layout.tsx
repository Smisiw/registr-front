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
                    headerBorderRadius: 20,
                },
                Select: {
                    borderRadius: 20,
                    colorBorder: "rgba(255,255,255,0)",
                    borderRadiusSM: 100,
                    colorPrimary: '#7EB0C6',
                    colorPrimaryHover: '#7EB0C6',
                    colorFillSecondary: '#7EB0C6',
                    colorText: '#FFF',
                    colorIcon: '#FFF',
                },
                TreeSelect: {
                    colorPrimary: '#7EB0C6',
                    colorPrimaryHover: '#7EB0C6',
                    colorPrimaryBorder: '#7EB0C6'

                },
                Pagination: {
                    colorPrimary: '#FFF',
                    colorPrimaryHover: '#EEE',
                    itemActiveBg: '#7EB0C6',
                    marginXS: 15,
                    borderRadius: 100
                },
                Input: {
                    paddingInline: 25,
                    paddingBlock: 6,
                    borderRadius: 100
                },
                Button: {
                    primaryColor: '#FFF',
                    colorPrimary: '#7EB0C6',
                    colorPrimaryBg: '#7EB0C6',
                    colorPrimaryBorder: '#7EB0C6',
                    colorPrimaryHover: '#7EB0C6',
                    colorPrimaryBorderHover: '#7EB0C6',
                    colorPrimaryBgHover: '#7EB0C6',
                    colorPrimaryActive: '#6597AC',
                    primaryShadow: "",

                    defaultBorderColor: '#7EB0C6',
                    defaultHoverBorderColor: '#7EB0C6',
                    defaultColor: '#7EB0C6',
                    defaultHoverColor: '#7EB0C6',
                    defaultActiveColor: '#7EB0C6',
                    defaultActiveBorderColor: '#7EB0C6',
                    defaultActiveBg: "rgba(49, 69, 78, 0.05)",
                    defaultShadow: "",
                    lineWidth: 2,
                    borderRadius: 100
                },
                // Tag: {
                //     defaultBg: '#7EB0C6',
                //     defaultColor: '#FFF',
                //     colorTextDescription: '#FFF',
                //     borderRadiusSM: 100,
                //     paddingXXS: 10,
                //     lineHeightSM: 2
                // }
            }
        }}>
            <body className={openSans.className}>
                {children}
            </body>
        </ConfigProvider>
    </html>
  );
}
