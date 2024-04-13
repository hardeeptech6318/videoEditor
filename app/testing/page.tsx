"use client";

import React, { useRef, useEffect, useState } from "react";
import { FFmpeg  } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import Image from "next/image";

interface VideoTimelineProps {
  duration: number;
}

const VideoTimeline: React.FC<VideoTimelineProps> = ({ duration }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [frames, setFrames] = useState<Blob[]>([]);
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
        // messageRef.current.innerHTML = message;
        console.log(message);
    });
    // toBlobURL is used to bypass CORS issue, urls with the same
    // domain can be used directly.
    await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    setLoaded(true);
}
  const convertVideoToFrames = async () => {
    const ffmpeg = ffmpegRef.current;

    await ffmpeg.writeFile(
      "input.mp4",
      await fetchFile(
        "https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4"
      )
    );

    await ffmpeg.exec(["-i", "input.mp4", "-vf", "fps=1", "frame%03d.png"]);

    const framelist=[]

    for (let i = 1; i <= 2; i++) {
        
        
        const data = await ffmpeg.readFile( `frame${String(i).padStart(3, '0')}.png`);
        const blob = new Blob([data?.buffer], { type: 'image/png' });
        framelist.push(blob)
        // console.log(blob);
        

        
        
        
        
        
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
  }, [currentTime, duration, videoWidth]);

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
        width={500}
        height={100}
        style={{ border: "1px solid black" }}
      />
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => setCurrentTime(Number(e.target.value))}
      />

      {/* {frames.map((e,i)=>(
        <Image key={i} src={e} alt="khg" height={200} width={200}/>
      ))} */}


      {loaded ? (
        <>
          <video
            ref={videoRef}
            src="https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4"
            onLoadedMetadata={(e) => setVideoWidth(e.currentTarget.videoWidth)}
            controls
          />
          <button onClick={convertVideoToFrames}>
            Convert Video to Frames
          </button>
          {isLoading && <p>Loading...</p>}
          <p ref={messageRef}></p>
          {frames.map((frame, index) => (
            <img
              key={index}
              src={URL.createObjectURL(frame)}
              alt={`Frame ${index}`}
            />
          ))}
        </>
      ) : (
        <button onClick={load}>Load FFmpeg</button>
      )}
    </div>
  );
};

export default VideoTimeline;
