import { Archive, Blend, Music, PlusSquare, Search, Settings, StickyNote, Text, Video } from "lucide-react";
import Link from "next/link";
import PopoverMenu from "./PopoverMenu";
import SearchModal from "./SearchModal";


const options=[
    {
    title:'Search',
    Icon:Search,
    url:'search'
},
{
    title:'Settings',
    Icon:Settings,
    url:'settings'
},
{
    title:'Media',
    Icon:PlusSquare,
    url:'media'
},
{
    title:'Audio',
    Icon:Music,
    url:'audio'
},
{
    title:'Subtitles',
    Icon:Archive,
    url:'subtitle'
},
{
    title:'Text',
    Icon:Text,
    url:'text'
},
{
    title:'Elements',
    Icon:StickyNote,
    url:'element'
},
{
    title:'Record',
    Icon:Video,
    url:'record'
},
{
    title:'Filters',
    Icon:Blend,
    url:'filter'
}
]

const Navbar = () => {
  return (
    <nav  className=" ">
        <div className="flex flex-col gap-8 p-5 h-full overflow-x-hidden overflow-y-auto flex-shrink-0 ">
            <PopoverMenu/>
            <SearchModal/>
        {options.map((e,i)=>(
            <Link className=" flex justify-center items-center flex-col gap-2" key={i} href={e.url}><e.Icon height={20}  width={20} className=" bg-[#e1e1e3]  rounded-sm  text-white"/><span className=" text-muted-foreground text-sm">{e.title}</span></Link>
        ))}
        </div>
    </nav>
  );
}

export default Navbar;
