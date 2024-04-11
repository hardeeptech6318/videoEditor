"use client"

import { Archive, Blend, Music, PlusSquare, Search, Settings, StickyNote, Text, Video } from "lucide-react";
import Link from "next/link";
import PopoverMenu from "./PopoverMenu";
import SearchModal from "./SearchModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


const options=[
//     {
//     title:'Search',
//     Icon:Search,
//     url:'search'
// },
{
    title:'Settings',
    Icon:Settings,
    url:'/editor/settings'
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
{
    title:'Elements',
    Icon:StickyNote,
    url:'/editor/element'
},
{
    title:'Record',
    Icon:Video,
    url:'/editor/record'
},
{
    title:'Filters',
    Icon:Blend,
    url:'/editor/filter'
}
]

const Navbar = () => {
    const router=usePathname()
    
    
  return (
    <ScrollArea>
    <nav  >
        <div className="flex flex-col gap-8 p-5 h-full overflow-x-hidden overflow-y-auto flex-shrink-0 ">
            <PopoverMenu/>
            <SearchModal/>
        {options.map((e,i)=>(
            <Link className={cn(" flex justify-center items-center  flex-col gap-2 ",)} key={i} href={e.url}><e.Icon height={40}  width={40} className={cn(" p-2 bg-[#e1e1e3]  rounded-full   text-white",router===e.url && 'bg-[#0098fd]')}/><span className=" text-muted-foreground text-sm">{e.title}</span></Link>
        ))}
        </div>
    </nav>
    </ScrollArea>
  );
}

export default Navbar;
