import { create } from 'zustand'
export const useVideoStore = create((set) => ({
    opendrawer:false,
    videoFile: null, // Corrected state key name
    videoRef: null, // Added state key for video reference
    trimRange:[0,0],
    videoRatio:"16/9",
    setTrimRange: (range:any) => set({ trimRange: range }),
    setVideoRatio: (ratio:any) => set({ videoRatio: ratio }),
    setVideoFile: (file:any) => set({ videoFile: file }), // Corrected setter function name
    setVideoRef: (ref:any) => set({ videoRef: ref }), // Added setter function for video reference
    
    // drawerFn: () => set((state:any) => ({ opendrawer: !state.opendrawer })),
  }));

export default useVideoStore;