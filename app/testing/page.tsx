"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { FFmpeg  } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { Button } from "@/components/ui/button";


interface VideoTimelineProps {
  duration: number;
}

const VideoTimeline: React.FC<VideoTimelineProps> = ({ duration }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [videoWidth, setVideoWidth] = useState(0);
//   const [loaded, setLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
  const [frames, setFrames] = useState<Blob[]>([]);
  const ffmpegRef = useRef(new FFmpeg());
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const messageRef = useRef<HTMLParagraphElement | null>(null);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    const ffmpeg = ffmpegRef.current;
    // ffmpeg.on('log', ({ message }) => {
    //     console.log(message);
    // });
    
    await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    // setLoaded(true);
}






  const convertVideoToFrames = async () => {
    await load()
    const ffmpeg = ffmpegRef.current;
        const file = fileInputRef.current?.files?.[0];
        

    await ffmpeg.writeFile(
      "input.mp4",
      await fetchFile(file)
    
    );

    await ffmpeg.exec(["-i", "input.mp4", "-vf", "fps=1/30", "frame%03d.png"]);

    const framelist=[]

    for (let i = 1; i <= 2000; i++) {

        try {
            
        const data:any = await ffmpeg.readFile( `frame${String(i).padStart(3, '0')}.png`);
        const blob = new Blob([data?.buffer], { type: 'image/png' });
        framelist.push(blob)
        
        

    } catch (error) {
            console.log(error);
            break;
            
    }
        
        
        
        
      }

      setFrames(framelist)

    

  };







  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const width = canvas.width;
    const height = canvas.height;

    

    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Draw video timeline
    context.fillStyle = "#eee";
    context.fillRect(0, 0, width, height);

    // Draw time markers
    for (let i = 0; i <= duration; i += 5) {
      const xPos = (i / duration) * width;
      context.fillStyle = "black";
      context.fillRect(xPos, height - 10, 1, 10);
      context.fillText(formatTime(i), xPos - 10, height - 20);
    }

    frames.forEach((frame, index) => {
        const image = new Image();
        image.src = URL.createObjectURL(frame);
        image.onload = () => {
          const xPos = (index + 1) * 100; // Adjust the position of the frame on the canvas
          context.drawImage(image, xPos, 0, 100, 100); // Draw the frame on the canvas
        };
      });
  }, [frames]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1000}
        height={150}
        style={{ border: "1px solid black" }}
      />
        <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={async(e) => {
          const file = e.target.files?.[0];
          if (file) {
            // console.log("Selected file:", file.name);
            await convertVideoToFrames()
          }
        }}
      />
      
    </div>
  );
};

export default VideoTimeline;
