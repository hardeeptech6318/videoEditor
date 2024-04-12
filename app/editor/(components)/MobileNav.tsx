"use client"

import { Archive, Blend, Music, PlusSquare, Search, Settings, StickyNote, Text, Video } from "lucide-react";
import Link from "next/link";
import PopoverMenu from "./PopoverMenu";
import SearchModal from "./SearchModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useVideoStore from "@/zustandStore/store";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  


const options=[
//     {
//     title:'Search',
//     Icon:Search,
//     url:'search'
// },
{
    title:'Settings',
    Icon:Settings,
    url:'/editor'
},
{
    title:'Media',
    Icon:PlusSquare,
    url:'/editor/media'
},
{
    title:'Audio',
    Icon:Music,
    url:'/editor/audio'
},
{
    title:'Subtitles',
    Icon:Archive,
    url:'/editor/subtitle'
},
{
    title:'Text',
    Icon:Text,
    url:'/editor/text'
},
// {
//     title:'Elements',
//     Icon:StickyNote,
//     url:'/editor/element'
// },
{
    title:'Record',
    Icon:Video,
    url:'/editor/record'
},
// {
//     title:'Filters',
//     Icon:Blend,
//     url:'/editor/filter'
// }
]

const MobileNavbar = ({children}:{children:React.ReactNode}) => {
    const router=usePathname()
    const drawerFn=useVideoStore((state:any) => state.drawerFn)
    
  return (
    <ScrollArea  >
    <nav   >
        <div className="flex border-t w-full p-1 overflow-x-auto  gap-10 bottom-0 fixed lg:hidden bg-white ">
            <PopoverMenu/>
            {/* <SearchModal/> */}
        {options.map((e,i)=>(
            
            <Link onClick={drawerFn}   className={cn(" flex justify-center items-center   flex-col    ",)} key={i} href={e.url}>
                <Drawer>
                <DrawerTrigger>
                <div className={cn(" hover:bg-gray-300 rounded-full p-1",router===e.url && 'bg-blue-700 hover:bg-blue-700')}>
            <e.Icon height={20}  width={20} 
            className={cn("    p-1  bg-[#e1e1e3]  rounded-md   text-white",router===e.url && 'bg-blue-400')}
            />
            
            </div>
            
            <span 
            className={cn(" pt-1 text-muted-foreground text-xs",router===e.url && 'text-blue-400')}>
            {e.title}
            </span>
            </DrawerTrigger>

            <DrawerContent className=" h-full p-5">
                <ScrollArea>
                {children}
                </ScrollArea>
            </DrawerContent>
            </Drawer>
            </Link>
            
        ))}
        </div>
    </nav>
    </ScrollArea>
  );
}

export default MobileNavbar;
