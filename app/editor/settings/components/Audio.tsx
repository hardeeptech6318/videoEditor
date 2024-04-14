import React from 'react'

import {
    Card,
    
  } from "@/components/ui/card" 
import Subtitle from '@/components/Subtitle'
import { IconNode, Languages, LucideIcon, Rainbow } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface audiodataType {
    id:number;
    title:string;
    description:string;
    tag:string | LucideIcon;
    icon:LucideIcon
    tagtype:string
    tagcolor:string
    url:string
}

const audiodata :audiodataType[]=[
    {
        id:1,
        title:"Translate voice",
        description:"Add voice translations in multi-languages",
        tag:"BETA",
        icon:Languages,
        tagtype:"text",
        tagcolor:"",
        url:"/"
    },
    {
        id:2,
        title:"Clean Audio",
        description:"Remove background noise",
        tag:Rainbow,
        icon:Languages,
        tagtype:"icon",
        tagcolor:"",
        url:"/"
    }
]

function AudioMenu() {
  return (
    <div>
        <Subtitle title='Audio'/>

        <div className=' flex gap-3 sha flex-col'>
                {audiodata?.map((e)=>(
                    <Link href={e.url} key={e.id}>
                    <Card  className=' hover:border-black cursor-pointer'>
                        <div className=' flex gap-3 items-center shadow-sm  p-3   '>
                                <span><e.icon/></span>
                                <span className=' flex-1 flex gap-3 items-center'>
                                    <span className=' flex-1'>
                                        <div className=' text-sm'>{e.title}</div>
                                        <div className=' text-xs text-muted-foreground '>{e.description}</div>
                                            
                                    </span>
                                    {/* <span>
                                        {e.tagtype==='text'?<Badge>{e?.tag}</Badge>:<e.tag/>}
                                    </span> */}
                                </span>
                        </div>

                    </Card>
                    </Link>
                ))}
        </div>

    </div>
  )
}

export default AudioMenu