"use client"
import { cn } from '@/lib/utils'
import { Home, PanelsLeftBottom, Stamp, Trash } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const availableLinks=[
    {
        id:1,
        title:"Home",
        url:"/workspace",
        icon:Home
    },
    {
        id:2,
        title:"Templates",
        url:"/workspace/template",
        icon:PanelsLeftBottom
    },
    {
        id:3,
        title:"Brand Kit",
        url:"/workspace/brandkit",
        icon:Stamp
    },
    {
        id:4,
        title:"Trash",
        url:"/workspace/trash",
        icon:Trash
    },
]


function LinkComponent() {
    const router=usePathname()
  return (
    <div className='flex gap-0 flex-col '>
        {availableLinks.map((e)=>(
            <Link href={e.url} className={cn('flex gap-3 items-center p-4 hover:bg-[#eeeef0] rounded-md',router===e.url && 'bg-[#eeeef0]')}  key={e.id}><e.icon /><span>{e.title}</span></Link>
        ))}
    </div>
  )
}

export default LinkComponent