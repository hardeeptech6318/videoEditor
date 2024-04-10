"use client"

import { musicImageData, stockmusicData } from "@/dataprovider/stockmusicData"
import Subtitle from "./Subtitle"
import TagOverflow from "./TagOverflow"
import { Card } from "./ui/card"
import Image from "next/image"
import {useAudioPlayer} from "react-use-audio-player"
import { useEffect, useRef, useState } from "react"
import { Music, Pause, Play } from "lucide-react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
const tags=[
    {
     id:10,
     name:"Effects",
     url:'effects'   
    },
    {
        id:1,
        name:"Effects",
        url:'effects'   
       },
       {
        id:2,
        name:"Bells",
        url:'bells'   
       },
       {
        id:3,
        name:"Foley",
        url:'foley'   
       },
       {
        id:4,
        name:"Buzzers",
        url:'buzzers'   
       },
       {
        id:5,
        name:"Crowds",
        url:'crowds'   
       },
       {
        id:6,
        name:"Ambient",
        url:'effects'   
       },
       {
        id:7,
        name:"Sound of nature",
        url:'sound of nature'   
       },
       
]

function SoundEffect() {
    const { load ,getPosition,pause,playing,src } = useAudioPlayer();
    const frameRef = useRef<number>()
    const [pos, setPos] = useState(0)
    const playsongs=(url:string)=>{
        if(src===url && playing){
            pause()
        }else{
            load(url, {
                autoplay: true,
                // onend: () => setSongIndex(songIndex + 1)
              });
        }
        
    }
    
    useEffect(() => {
        const animate = () => {
            setPos(getPosition())
            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = window.requestAnimationFrame(animate)
        
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }

        
        
    }, [getPosition])


  return (
    <div >
        <Subtitle title="Stock music"  searchUrl="soundeffect"/>
        <TagOverflow tags={tags}/>
        <div className=" flex gap-3 flex-col mt-3">
        {stockmusicData.slice(0,5).map((e,i)=>{
            const imageurl=musicImageData.find((j)=>j.id==e.id)?.src.medium
           return <Card key={i} className="flex p-2 gap-2   overflow-hidden" onClick={()=>playsongs(e.previewUrl)} >
                {/* <Image src={e.thumbnailUrl} width={1000} height={100} alt="khb" className=" absolute h-[48px] translate-y-3  w-full"/> */}
                <div className=" relative">
                <div className=" absolute  top-2 left-2 z-10">{src===e.previewUrl && playing ?<Pause/>:<Play/>}</div>
                <Avatar  className="relative opacity-90 ">
                
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback >CN</AvatarFallback>
    </Avatar>
    </div>
                
                {/* {imageurl &&<Image src={imageurl} height={20} width={20} alt={e.title} />} */}
                <div className=" flex-1">
                    <div className="text-sm truncate ...">{e.title}</div>
                    <div className=" text-muted-foreground text-xs">{e.duration}</div>
                </div>
            </Card>
})}
</div>
    </div>
  )
}

export default SoundEffect