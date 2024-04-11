import React from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { GitGraph, Lock, Notebook, Settings, TriangleAlert, User2Icon } from 'lucide-react'
import Link from 'next/link'


const options=[
  {
    id:1,
    title:"Team Setting",
    url:"/teamsetting",
    icon:Settings
  },
  {
    id:2,
    title:"Plan Limit",
    url:"/planlimit",
    icon:TriangleAlert
  },
  {
    id:3,
    title:"Analytics",
    url:"/analytics",
    icon:GitGraph
  },
  {
    id:4,
    title:"Collabarators",
    url:"/collabarators",
    icon:User2Icon
  },
  {
    id:5,
    title:"Privacy and Security",
    url:"/privacy",
    icon:Lock
  },
  {
    id:6,
    title:"Team Billing",
    url:"/teambilling",
    icon:Notebook
  }
]

function UserProfileMenu() {
  const userName='Hardeepsinh Parmar'
  const plan='Free'
  return (
    <Menubar className='border-none hover:bg-[#eeeef0]  h-fit '>
      <MenubarMenu >
        <MenubarTrigger className='  flex items-center gap-3' >
            <span className=' bg-[#6E85FF] px-5 py-3 text-xl font-bold text-white rounded-xl'>{userName.trim().charAt(0).toUpperCase()}</span>
            <span className=' flex-1 '>
              <div className=' truncate ...'>{userName}</div>
              <div>{plan}</div>
            </span>
        </MenubarTrigger>
        <MenubarContent>

          {options.map((e)=>(
            <MenubarItem key={e.id} className='p-2'>
            <Link href={e.url} className=' flex gap-3 items-center'><e.icon height={18  } width={18}/><span>{e.title}</span></Link> 
          </MenubarItem>
          ))}
         
        </MenubarContent>
      </MenubarMenu>
      
      
   
    </Menubar>
  )
}

export default UserProfileMenu