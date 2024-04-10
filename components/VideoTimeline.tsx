import React, { useRef, useEffect } from 'react';

interface Props {
  duration: number;
  currentTime: number;
}

const Timeline: React.FC<Props> = ({ duration, currentTime }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameInterval = 1; // Interval in seconds to draw frames
  const canvasWidth = 10; // Width of the canvas
  const canvasHeight = 50; // Height of the canvas
  const framesPerSecond = 24; // Number of frames per second in the video

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Clear canvas
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw frames
    const totalFrames = Math.floor((duration / 1000) * framesPerSecond);
    const frameWidth = canvasWidth / totalFrames;
    const currentFrame = Math.floor((currentTime / 1000) * framesPerSecond);

    for (let i = 0; i < totalFrames; i++) {
      const x = i * frameWidth;
      context.fillStyle = i <= currentFrame ? 'rgba(0, 0, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
      context.fillRect(x, 0, frameWidth, canvasHeight);

      // Draw time labels
      if (i % (framesPerSecond * 5) === 0) {
        const time = (i / framesPerSecond).toFixed(2);
        context.fillStyle = 'black';
        context.fillText(time, x + 2, 10);
      }
    }
  }, [duration, currentTime]);

  return (
    <div className="relative">
      {/* Timeline track */}
      <canvas ref={canvasRef}  height={canvasHeight} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Timeline;
