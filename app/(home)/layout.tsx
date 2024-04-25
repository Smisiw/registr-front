import React, {ReactNode} from 'react';
import MainLayout from "@/pages/MainLayout";

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    );
};

export default Layout;