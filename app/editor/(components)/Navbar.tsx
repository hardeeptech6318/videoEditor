"use client"

import { Archive, Blend, Music, PlusSquare, Search, Settings, StickyNote, Text, Video } from "lucide-react";
import Link from "next/link";
import PopoverMenu from "./PopoverMenu";
import SearchModal from "./SearchModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


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

const Navbar = () => {
    const router=usePathname()
    
    
  return (
    <ScrollArea>
    <nav  >
        <div className=" flex-col gap-5 hidden lg:flex  h-full overflow-x-hidden overflow-y-auto flex-shrink-0 ">
            <PopoverMenu/>
            <SearchModal/>
        {options.map((e,i)=>(
            
            <Link className={cn(" flex justify-center items-center  flex-col   ",)} key={i} href={e.url}>
                <div className={cn(" hover:bg-gray-300 rounded-full p-2",router===e.url && 'bg-blue-700 hover:bg-blue-700')}>
            <e.Icon height={25}  width={25} 
            className={cn(" p-1 bg-[#e1e1e3]  rounded-md   text-white",router===e.url && 'bg-blue-400')}
            />
            </div>
            
            <span 
            className={cn(" pt-1 text-muted-foreground text-sm",router===e.url && 'text-blue-400')}>
            {e.title}
            </span>
            </Link>
            
        ))}
        </div>
    </nav>
    </ScrollArea>
  );
}

export default Navbar;
