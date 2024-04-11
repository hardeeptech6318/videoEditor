import { Home, PanelsLeftBottom, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const availableLinks=[
    {
        id:1,
        title:"Home",
        url:"/workspace/",
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
        icon:PanelsLeftBottom
    },
    {
        id:4,
        title:"Trash",
        url:"/workspace/trash",
        icon:Trash
    },
]


function LinkComponent() {
  return (
    <div>
        {availableLinks.map((e)=>(
            <Link href={e.url} className='flex gap-3 items-center p-4 hover:bg-[#eeeef0]'  key={e.id}><e.icon/><span>{e.title}</span></Link>
        ))}
    </div>
  )
}

export default LinkComponent