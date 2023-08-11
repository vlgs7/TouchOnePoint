'use client'
import { useEffect } from "react";
import { CommandMenu } from "./command-menu";
import { NavItem } from "@/types/nav";
const MainCommanMenu = ({data}:{data?:any}) => {

    return ( 
        <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu data={data} />
        </div>
     );
}
 
export default MainCommanMenu;