"use client"
import { cn } from "@/lib/utils"
import EditorNavbar from "./EditorNavbar"
import MainPopoverRatio from "./MainPopoverRatio"
import { useVideoStore } from "@/zustandStore/store"
import { useEffect, useRef } from "react";


function Maineditor({className}:{className:string}) {
  const videoFile = useVideoStore((state:any) => state.videoFile);
  const setVideoRef = useVideoStore((state:any) => state?.setVideoRef);
  
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideoRef(playerRef);
    
  }, [playerRef, setVideoRef, videoFile]);
  return (
    <div className={cn("p-3 flex flex-col h-full",className)}>
      <EditorNavbar/>
      <div className=" flex-1 flex justify-center items-center p-10 lg:p-20 h-full">
      {videoFile && (
        <video controls ref={playerRef} >
          <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
        </video>
      )}
      </div>
      <MainPopoverRatio />

    </div>
  )
}

export default Maineditor