import { create } from 'zustand'
export const useVideoStore = create((set) => ({
    opendrawer:false,
    videoFile: null, // Corrected state key name
    videoRef: null, // Added state key for video reference
    setVideoFile: (file:any) => set({ videoFile: file }), // Corrected setter function name
    setVideoRef: (ref:any) => set({ videoRef: ref }), // Added setter function for video reference
    // drawerFn: set((state:any) => ({ opendrawer: !state.opendrawer })), // Added setter function for video reference
    drawerFn: () => set((state:any) => ({ opendrawer: !state.opendrawer })),
  }));

export default useVideoStore;