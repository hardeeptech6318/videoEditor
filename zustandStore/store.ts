import { create } from 'zustand'
export const useVideoStore = create((set) => ({
    videoFile: null, // Corrected state key name
    videoRef: null, // Added state key for video reference
    setVideoFile: (file:any) => set({ videoFile: file }), // Corrected setter function name
    setVideoRef: (ref:any) => set({ videoRef: ref }), // Added setter function for video reference
  }));

export default useVideoStore;