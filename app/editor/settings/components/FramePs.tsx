import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Subtitle from '@/components/Subtitle'
import { Value } from '@radix-ui/react-select'

const options=[
    {
    value:"60",
    title:60
    },
    {
        value:"50",
        title:50
    },
    {
        value:"30",
        title:30
    },
    {
        value:"25",
        title:25
    }
    ,
    {
        value:"24",
        title:24
    },
    {
        value:"10",
        title:10
    }
]

function FramePs() {
  return (
    <div>
    <Subtitle title='Frame Per Second'/>
    <div>
        <Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    {options.map((e)=>(
        <SelectItem key={e.value} value={e.value}>{e.title}</SelectItem>
    ))}
    
    
  </SelectContent>
</Select>
    </div>
    </div>
  )
}

export default FramePs