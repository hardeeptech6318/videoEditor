import Subtitle from "@/components/Subtitle"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Dot, Ellipsis } from "lucide-react"



interface tagsType{
  id:number;
  url:string;
  name:string
}

function TagOverflow({tags}:{tags:tagsType[]}) {
  return (
    
        
        <div className=" flex gap-3 items-center">
        {tags.slice(0, 3).map((e)=>(
          <Link className=" border  text-sm rounded-xl hover:border-black py-1 px-2" key={e.id} href={e.url}>{e.name}</Link>
        ))}

<Popover>
      <PopoverTrigger className="p-0 " asChild >
        <Button   className="p-0 h-7 w-7 rounded-full"   variant="outline"><Ellipsis  width={15} height={15}/></Button>
      </PopoverTrigger>
      <PopoverContent  className="p-0">
        {tags.slice(3, tags?.length).length===0 && <div className=" p-5">No data found</div>}
        <div className=" flex flex-col justify-center p-0 m-0 ">
        {tags.slice(3, tags?.length).map((e)=>(
          <Link key={e.name} href="/" className=" hover:bg-gray-400 rounded-lg p-2 text-sm">
            {e.name}
          </Link>
        ))}

</div>
      </PopoverContent>
    </Popover>
        </div>
    
  )
}

export default TagOverflow