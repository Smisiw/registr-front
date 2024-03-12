import React, {ReactNode} from 'react';
import SideBar from "@/widgets/SideBar/ui/SideBar";

export const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <SideBar/>
            {children}
        </>
    );
};
