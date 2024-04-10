"use client"

import React, { useEffect, useState } from 'react';

interface Video {
  id: number;
  url: string;
}

interface VideoListProps {
  data: Video[];
}

const Videolist: React.FC<VideoListProps> = ({ data }) => {
  const [hoveredVideos, setHoveredVideos] = useState<number>(0);
  const [videoDurations, setVideoDurations] = useState<string[]>([]);


  const handleMouseEnter = (id: number) => {

    
    setHoveredVideos(id);
  };

  const handleMouseLeave = (id: number) => {
    setHoveredVideos(0);
  };

   // Function to format time from seconds to hh:mm:ss
   const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours > 0 ? hours + ':' : ''}${(hours > 0 && minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
  };

  useEffect(() => {
    const durations: string[] = [];
    data.forEach((video, index) => {
      const videoElement = document.getElementById(`playvideo${video.id}`) as HTMLVideoElement | null;
      if (videoElement) {
        durations[index] = formatTime(videoElement.duration);
      } else {
        durations[index] = 'N/A';
      }
    });
    setVideoDurations(durations);
  }, [data]);

  useEffect(() => {
    const videoElement = document.getElementById(`playvideo${hoveredVideos}`) as HTMLVideoElement | null;
    if (videoElement) {
      videoElement.play();
      return () => videoElement.pause();
    }
  }, [hoveredVideos]);
  return (
    <div className="flex overflow-x-scroll gap-1 my-3">
      {data?.map((video: Video,i) => {
        
        
       return video.url && 
       <div className=' relative'>
        <div className=' absolute bottom-1 left-1 bg-gray-400 text-white text-xs'>
            {/* duration here */}
            {videoDurations[i]}
            </div>
        <video
        id={`playvideo${video.id}`}
          key={video.id}
          onMouseEnter={() => handleMouseEnter(video.id)}
          onMouseLeave={() => handleMouseLeave(video.id)}
          loop
          muted
          autoPlay={video.id===hoveredVideos}
          className="rounded-lg "
          height={500}
          width={500}
          src={video.url}
        />
        </div>
})}
    </div>
  );
};

export default Videolist;
