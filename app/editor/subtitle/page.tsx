import Optiontitle from '@/components/Optiontitle'
import { Card } from '@/components/ui/card'
import { ArrowBigRight, ChevronRight, LucideWashingMachine, icons } from 'lucide-react'
import React from 'react'

const data=[
    {
        id:1,
        title:"Subtitle",
        description:"Automatically generate captions",
        icons:<LucideWashingMachine/>
    },
    {
        id:2,
        title:"Translate",
        description:"Subtitle your video in a new language",
        icons:<LucideWashingMachine/>
    }
]

const data2=[
    {
        id:1,
        title:"Manual Transcribe",
        description:"Type your subtitle manually",
        icons:<LucideWashingMachine/>   
    },
    {
        id:2,
        title:"Upload Subtitle File ",
        description:"Use an existing subtitles file (e.g SRT, VTT)",
        icons:<LucideWashingMachine/>
    }
]

function page() {
  return (
    <div>
        <Optiontitle title="Subtitle"/>
        <div className=' text-sm font-medium text-center'>How do you want to add subtitles?</div>
        <div className=' grid grid-cols-2 gap-2 py-5  border-b border-dashed '>
            {data.map((e)=>(
                <div key={e.id}>
                <Card className=' flex flex-col gap-3 p-3  hover:bg-[#f7f7f8]     justify-center items-center'>
                        <div>{e.icons}</div>
                        <div>
                        <h2 className=' text-center'>{e.title}</h2>
                        <p className=' text-xs text-muted-foreground text-center'>{e.description}</p>
                        </div>
                </Card>
            </div>
            ))}
            
            

        </div>

        <div className=' flex flex-col gap-3 mt-5'>
            {data2.map((j)=>(
                <Card key={j.id} className=' flex justify-center hover:bg-[#f7f7f8] items-center p-3 gap-3 '>
                        <div>{j.icons}</div>
                        <div className=' flex-1'>
                            <h2>{j.title}</h2>
                            <p className= " text-muted-foreground text-xs">{j.description}</p>
                        </div>
                        <ChevronRight/>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default page