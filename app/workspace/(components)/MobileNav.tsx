import { Dot, Ellipsis, Home, PanelsLeftBottom, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
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
import Navbar from './Navbar'
const availableLinks=[
    {
        id:1,
        title:"Home",
        url:"/workspace/",
        icon:Home
    },
    {
        id:2,
        title:"Spaces",
        url:"/workspace/",
        icon:PanelsLeftBottom
    },
    {
        id:3,
        title:"My drafts",
        url:"/workspace/",
        icon:PanelsLeftBottom
    },
    // {
    //     id:4,
    //     title:"Trash",
    //     url:"/workspace/trash",
    //     icon:Trash
    // },
]


function MobileNav() {
  return (
    <div className='flex gap-0 md:flex-col bg-white md:hidden w-full z-50 p-1 px-5 justify-between fixed bottom-0 md:static '>
        
        {availableLinks.map((e)=>(
            <Link href={e.url} className='flex gap-1 flex-col items-center  hover:bg-[#eeeef0]'  key={e.id}><e.icon height={20} width={20} /><span>{e.title}</span></Link>
        ))}
        <Drawer>
  <DrawerTrigger className=' flex flex-col'>More <Ellipsis/></DrawerTrigger>
  <DrawerContent>
    <Navbar/>
    {/* <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader> */}
    {/* <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter> */}
  </DrawerContent>
</Drawer>

    </div>
  )
}

export default MobileNav