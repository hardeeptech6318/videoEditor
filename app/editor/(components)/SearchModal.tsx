// import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Footprints, Search, Settings, icons } from "lucide-react"


const suggestion=[
    {
        id:1,
        title:'Auto subtitles',
        icons:Footprints
    },
    {
        id:2,
        title:'Auto subtitles',
        icons:Footprints
    },
    {
        id:3,
        title:'Auto subtitles',
        icons:Footprints
    },
    {
        id:4,
        title:'Auto subtitles',
        icons:Footprints
    },
    {
        id:5,
        title:'Auto subtitles',
        icons:Footprints
    },
]

export default function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className=" hover:bg-white flex-col gap-2 h-full w-full">
          <div className=" p-2 rounded-full hover:bg-gray-300"><Search height={25} width={25} className=" text-white rounded-md bg-[#e1e1e3] p-1" /></div>
          <div><span>Search</span></div>
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {/* <DialogTitle>Share link</DialogTitle> */}
          {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
          <Input placeholder=" Search for anything"/>
        </DialogHeader>
        <div>
            <p>Suggestions</p>
            {suggestion.map((e)=>(
                <p key={e.id}>{e.title}</p>
            ))}
        </div>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
