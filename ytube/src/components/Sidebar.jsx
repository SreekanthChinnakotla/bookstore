import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdSensors } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { MdOutlineNewspaper } from "react-icons/md";
import {useSelector} from "react-redux";

const sidebarItem = [
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <MdHistory size="24px" />,
        title: "History"
    },
    {
        icons: <MdLibraryMusic size="24px" />,
        title: "Music"
    },
    {
        icons: <MdSensors size="24px" />,
        title: "Live"
    },
    {
        icons: <MdVideogameAsset size="24px" />,
        title: "Youtube Games"
    },
    {
        icons: <MdOutlineNewspaper size="24px" />,
        title: "News"
    }
]

const Sidebar = () => { 
    const open = useSelector((store)=>store.app.open);
     
    return (
        <div className={`relative left-0 ${open? "w-[15%]" : "w-[6%]"} pl-1 h-[calc(100vh-4.625rem)] bg-white no-scrollbar scroll-smooth  overflow-y-scroll overflow-x-hidden`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex rounded-md hover:bg-gray-400 cursor-pointer p-2'>
                            {item.icons}
                            <p className={`text-xs pl-4 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar