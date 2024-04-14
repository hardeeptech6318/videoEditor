"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Download, FastForward, Pause, PauseCircle, Play, Rewind, Scissors, Settings, ZoomIn, ZoomOut } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import useVideoStore from '@/zustandStore/store';
import { trimFunction } from '@/ffmpegFunctions/aspectRatio'
import { formatDuration } from '@/lib/formatDuration'



function VideoControls() {
  
  const videoRef = useVideoStore((state:any) => state.videoRef);
  const video = useVideoStore((state:any) => state.videoFile);

  const [isPlaying, setisPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const trimRange = useVideoStore((state: any) => state.trimRange);
  const videoFile = useVideoStore((state:any) => state.setVideoFile);
  
  useEffect(() => {
    if (videoRef?.current) {
      const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
      };
      
      
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      
      return () => {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      
      };
    }
  }, [videoRef,isPlaying]);

  useEffect(() => {
    
    
    if (videoRef && videoRef.current && trimRange) {
      // Check if trimRange has at least one value
      if (trimRange.length > 0) {
        // Set the current time of the video to the start of the trim range
        
        
        videoRef.current.currentTime = trimRange[0];
      }
    }
  }, [trimRange]);
  


  useEffect(()=>{
    if(videoRef?.current){
      setTotalDuration(videoRef?.current?.duration);
    }
    
  },[videoRef?.current])


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
  
  
  const handleDownload = async () => {
    const output = await trimFunction({ video: video, range: trimRange });
  
    videoFile(output)
  
    // Create a URL for the Blob
    if(output){
      const url = URL.createObjectURL(output);
  
      // Create an anchor element
      const anchorElement = document.createElement('a');
    
      // Set href and download attributes
      anchorElement.href = url;
      anchorElement.download = 'trimmed_video.mp4';
    
      // Programmatically click the anchor element to trigger the download
      anchorElement.click();
    
      // Clean up by revoking the URL
      URL.revokeObjectURL(url);
    }
   
  };
  
  
  return (



    <div className=' flex  justify-between my-3 items-center'>
        <div className=' flex'>
            <Button className=' hidden lg:flex mr-2 text-xs' variant="ghost"><Scissors width={15} height={15} className=' mr-2'/><span> Split</span></Button>
            <Button onClick={handleDownload} className=' text-xs' variant="ghost"><Download width={15} height={15} className=' mr-2'/> <span className='hidden lg:block mr-2'>Download section</span></Button>
        </div>
        <div className=' flex  items-center'>
            <Button className=' rounded-full' variant="ghost" onClick={handleRewind}><Rewind width={20} height={20} fill="#000000"/></Button>
            <Button className=' rounded-full' variant="ghost" onClick={handlePlayPause}>{!isPlaying ?<Play fill="#000000"/>:<PauseCircle/>}</Button> {/* change hanle play and puse based on is video playing or pause */}
            <Button className=' rounded-full' variant="ghost" onClick={handleFastForward}><FastForward width={20} height={20} fill="#000000"/></Button>
            
            <div className='hidden lg:block'>{ formatDuration(currentTime) }/{formatDuration(totalDuration) }</div>
        </div>

        <div > 
<div className=' flex items-center gap-2'><ZoomIn className='w-5 h-5 lg:w-10 lg:h-10'/><Slider className='hidden lg:flex min-w-[100px]' defaultValue={[33]} max={100} step={1} /><ZoomOut className='w-5 h-5 lg:w-10 lg:h-10'/>
<Button className='hidden lg:block text-xs border-r' variant="ghost">Fit</Button>
<Settings className=' mx-3 w-5 h-5 lg:w-10 lg:h-10 ' width={35} height={35}/>
</div>
        </div>
        
    </div>
  )
}

export default VideoControls