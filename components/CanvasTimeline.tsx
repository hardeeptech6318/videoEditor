"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
// import { FFmpeg } from "@ffmpeg/ffmpeg";
// import { fetchFile, toBlobURL } from "@ffmpeg/util";
import useVideoStore from "@/zustandStore/store";
import UploadComponent from "./UploadComponent";
import { SliderTimeline } from "./ui/TimelineSlide";
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
// import * as Slider from '@radix-ui/react-slider';
// import { Button } from "@/components/ui/button";

// interface VideoTimelineProps {
//   duration: number;
// }

const CanvasVideoTimeline = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  //   const fileInputRef = useRef<HTMLInputElement>(null);
  const videoFile = useVideoStore((state: any) => state.videoFile);
  
  
  // const [duration, setduration] = useState(0)

  // const [frames, setFrames] = useState<Blob[]>([]);
  // const ffmpegRef = useRef(new FFmpeg());

  // const load = async () => {
  //   const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
  //   const ffmpeg = ffmpegRef.current;
  //   ffmpeg.on("log", ({ message }) => {
  //     // console.log(message);
  //   });

  //   await ffmpeg.load({
  //     coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
  //     wasmURL: await toBlobURL(
  //       `${baseURL}/ffmpeg-core.wasm`,
  //       "application/wasm"
  //     ),
  //   });
  // };

  // useEffect(() => {
  //   if (videoFile) {
  //     convertVideoToFrames();
  //   }
  // }, [videoFile]);

  // const convertVideoToFrames = async () => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const context = canvas.getContext("2d");
  //   if (!context) return;

  //   const width = canvas.width;
  //   console.log(width);//300
    
  //   const height = canvas.height;

  //   // Clear canvas
  //   context.clearRect(0, 0, width, height);

  //   // Draw video timeline
  //   context.fillStyle = "#eee";
  //   context.fillRect(0, 0, width, height);

  //   // Draw time markers

  //   let duration;
  //   await load();
  //   const ffmpeg = ffmpegRef.current;
  //   const file = videoFile;

  //   const video = document.createElement("video");
  //   video.preload = "metadata"; // Load only metadata to get the duration quickly
  //   video.src = URL.createObjectURL(videoFile);
  //   video.onloadedmetadata = async () => {
  //     duration = Math.floor(video?.duration);
      
      
      
  //     for (let i = 0; i <= duration; i += 5) {
  //       const xPos = (i / duration) * width;
  //       context.fillStyle = "black";
  //       context.fillRect(xPos, height - 10, 1, 10);
  //       context.fillText(formatTime(i), xPos - 10, height - 20);
  //     }

  //     await ffmpeg.writeFile("input.mp4", await fetchFile(file));

  //     const noOfImages = 10;

  //     await ffmpeg.exec([
  //       "-i",
  //       "input.mp4",
  //       "-vf",
  //       `fps=${Math.floor(duration ?? 0 / noOfImages) / 2}`,
  //       "frame%03d.png",
  //     ]);

  //     // const framelist = [];

  //     for (let i = 1; i <= 2000; i++) {
  //       try {
  //         const data: any = await ffmpeg.readFile(
  //           `frame${String(i).padStart(3, "0")}.png`
  //         );
  //         const blob = new Blob([data?.buffer], { type: "image/png" });
  //         const image = new Image();
  //         image.src = URL.createObjectURL(blob);
  //         image.onload = () => {
  //           const xPos = (i ) * 20; // Adjust the position of the frame on the canvas
  //           context.drawImage(image, xPos, 0, 20, 20); // Draw the frame on the canvas
  //         };
  //         // framelist.push(blob);
  //       } catch (error) {
  //         console.log(error);
  //         break;
  //       }
  //     }

  //     // setFrames(framelist);
  //   };
  // };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      {/* <canvas
        ref={canvasRef}
        className=" border flex items-center w-full h-full"
      /> */}
      <div>
        {!videoFile ?<UploadComponent/>:<TimelineComponent/>}
      </div>
    </div>
  );
};

const TimelineComponent = () => {
  const videoRef = useVideoStore((state: any) => state.videoRef);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      const onLoadedMetadata = () => {
        // Access the duration property of the video element
        setVideoDuration(videoRef.current.duration);
        // Remove event listener after obtaining metadata
        videoRef.current.removeEventListener('loadedmetadata', onLoadedMetadata);
      };

      // Add event listener for loadedmetadata event
      videoRef.current.addEventListener('loadedmetadata', onLoadedMetadata);

      // In case metadata event is not fired (e.g., if the video is already loaded), try to get duration directly
      if (videoRef.current.duration) {
        setVideoDuration(videoRef.current.duration);
      }
    }
  }, [videoRef]);

  const trimRange = useVideoStore((state: any) => state.setTrimRange);
  
  return (
    <div className="p-10">
      {/* Display video duration if available */}
      {/* {videoDuration !== null && !isNaN(videoDuration) && (
        <div>Video duration: {videoDuration} seconds</div>
      )} */}
      {/* Your SliderTimeline component */}
      <SliderTimeline onValueChange={(e:any)=>{trimRange(e)
      }
      } step={0.01} max={videoDuration || 0} min={0} />
    </div>
  );
};



export default CanvasVideoTimeline;
