"use client"

import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { CircleHelp, FileQuestion, Search, User, UserPlus, Zap } from 'lucide-react'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation'

const urlName=[
  {
    id:1,
    title:"Home",
    url:"/workspace",
    // icon:Home
},
{
    id:2,
    title:"Templates",
    url:"/workspace/template",
    // icon:PanelsLeftBottom
},
{
    id:3,
    title:"Brand Kit",
    url:"/workspace/brandkit",
    // icon:PanelsLeftBottom
},
{
    id:4,
    title:"Trash",
    url:"/workspace/trash",
    // icon:Trash
},
]

function Header() {
  const router=usePathname()
  return (
    <div className=' flex  justify-between px-5 py-3  items-center gap-3 '>
      <div className=' font-semibold text-xl'>{urlName?.find((j)=>j.url===router)?.title}</div>
      <div  className=' flex items-center justify-end gap-1 lg:gap-3'>
      <Button className=' bg-orange-200 text-black hover:bg-orange-300'>Upgrade<Zap className=' ml-2' fill='#FFA500' color='#FFA500' height={18} width={18}/></Button>
        
        <Button variant="ghost"><Search height={18} width={18}/><span className=' hidden md:block ml-1'>Search</span></Button>
        <Button variant="ghost"><UserPlus  height={18} width={18}/> <span className=' hidden md:block ml-1'>Invite</span></Button>
        <Button variant="ghost" className=' hidden md:block'><CircleHelp  /></Button>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>HR</AvatarFallback>
    </Avatar>
      </div>
       

    </div>
  )
}

export default Header