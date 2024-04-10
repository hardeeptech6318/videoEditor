"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Download, FastForward, Pause, PauseCircle, Play, Rewind, Scissors, Settings, ZoomIn, ZoomOut } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import useVideoStore from '@/zustandStore/store';

function formatDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


function VideoControls() {
  
  const videoRef = useVideoStore((state:any) => state.videoRef);

  const [isPlaying, setisPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  
  useEffect(() => {
    if (videoRef?.current) {
      const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
      };
      const handleDurationChange = () => {
        setTotalDuration(videoRef.current.duration);
      };
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('durationchange', handleDurationChange);
      return () => {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener('durationchange', handleDurationChange);
      };
    }
  }, [videoRef,isPlaying]);
  const handlePlayPause = () => {
    if (videoRef) {
      if (videoRef.current.paused) {
        videoRef.current?.play();
        setisPlaying(true)
      } else {
        videoRef.current?.pause();
        setisPlaying(false)
      }
    }
  };

  const handleFastForward = () => {
    if (videoRef) {
      videoRef.current.currentTime += 10; // Fast forward 10 seconds
    }
  };

  const handleRewind = () => {
    if (videoRef) {
      videoRef.current.currentTime -= 10; // Fast forward 10 seconds
    }
  };
  
  return (



    <div className=' flex  justify-between my-3 items-center'>
        <div>
            <Button className=' text-xs' variant="ghost"><Scissors width={15} height={15} className=' mr-2'/> Split</Button>
            <Button className=' text-xs' variant="ghost"><Download width={15} height={15} className=' mr-2'/>Download section</Button>
        </div>
        <div className=' flex  items-center'>
            <Button variant="ghost" onClick={handleRewind}><Rewind/></Button>
            <Button variant="ghost" onClick={handlePlayPause}>{!isPlaying ?<Play/>:<PauseCircle/>}</Button> {/* change hanle play and puse based on is video playing or pause */}
            <Button variant="ghost" onClick={handleFastForward}><FastForward/></Button>
            
            <div>{ formatDuration(currentTime) }/{formatDuration(videoRef?.current?.duration) }</div>
        </div>

        <div > 
<div className=' flex items-center gap-2'><ZoomIn/><Slider className=' min-w-[100px]' defaultValue={[33]} max={100} step={1} /><ZoomOut/>
<Button className=' text-xs border-r' variant="ghost">Fit</Button>
<Settings className=' mx-3 ' width={35} height={35}/>
</div>
        </div>
        
    </div>
  )
}

export default VideoControls