"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Video {
  id: number;
  url: string;
}

interface VideoListProps {
  data: Video[];
}

const formatTime = (time: number): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);
  return `${hours > 0 ? hours + ':' : ''}${(hours > 0 && minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
};

const Videolist: React.FC<VideoListProps> = ({ data }) => {

  return (
    <div className="overflow-x-auto lg:w-[350px] w-screen">
      <div className="flex gap-1 my-3 ">
        {data?.map((video: Video, i) => (
          <VideoCard key={i} video={video.url} />
        ))}
      </div>
    </div>
  );
};


const VideoCard = ({ video }: { video: string }) => {
  const ref = useRef<HTMLVideoElement | null>(null)
  const handleMouseEnter = () => {
    if (ref?.current && ref?.current) {
      ref?.current?.play()
    }
  }


  const handleMouseLeave = () => {
    if (ref?.current) {
      ref?.current?.pause()
    }
  }
  return (
    <div className=' relative '>
      <div className=' absolute rounded-md p-0.5 bottom-1 left-1 bg-gray-400 text-white text-xs'>
        {formatTime(ref.current?.duration ?? 0)}
      </div>
      <div>
        <video
          ref={ref}

          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          loop
          muted
          // autoPlay={true}
          className="rounded-lg min-w-[150px]"
          // height={500}
          // width={500}
          src={video}
        />
      </div>
    </div>
  )
}

export default Videolist;
