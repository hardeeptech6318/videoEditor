

import { formatDuration } from "@/lib/formatDuration";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

// function calculateDimension(aspectRatio:string, desiredSize:string) {
//     const [width, height] = aspectRatio.split('/').map(Number);
//     const [desiredWidth, desiredHeight] = desiredSize.split('/').map(Number);

//     if (width === desiredWidth || height === desiredHeight) {
//         // If the aspect ratio already matches the desired size, return the desired size
//         return desiredSize;
//     }

//     if (width > height) {
//         // Landscape aspect ratio
//         const calculatedHeight = Math.round((desiredWidth / width) * height);
//         return `${desiredWidth}/${calculatedHeight}`;
//     } else {
//         // Portrait aspect ratio
//         const calculatedWidth = Math.round((desiredHeight / height) * width);
//         return `${calculatedWidth}/${desiredHeight}`;
//     }
// }

// Example usage:
// console.log(calculateDimension("16/9", "720/")); // Output: 1280/720
// console.log(calculateDimension("9/16", "/1280")); // Output: 720/1280


export const trimFunction=async({video,range}:{video:Blob,range:number[]})=>{
try {

    const ffmpeg=new FFmpeg()
    
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
    
    ffmpeg.on("log", ({ message }) => {
            console.log(message);
        });
    
    await ffmpeg.load({
          coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
          wasmURL: await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
          ),
    });

//    let desiredHeight;
//    let desiredWidth;

  
    await ffmpeg.writeFile("input.mp4", await fetchFile(video));

    

    await ffmpeg.exec([
      "-i",
      "input.mp4",
    //   "-vf",
        "-ss",
        `${formatDuration(range[0])}`,
        "-t",
        `${formatDuration(range[1])}`,
        "-c:v",
        "copy",
        "-c:a",
        "copy",
        "output.mp4"
    ]);

    const data: any = await ffmpeg.readFile(
        `output.mp4`
      );
      const blob = new Blob([data?.buffer], { type: "video/mp4" });

      if(blob){
        
      
      
        const urlsrc = blob;
  
        return urlsrc
      }

      
      
} catch (error) {
    console.log(error);
    
}
}