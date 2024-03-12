import {StaticImport} from "next/dist/shared/lib/get-img-props";

export interface INavItem {
    href: string,
    icon: string | StaticImport,
    name: string,
}