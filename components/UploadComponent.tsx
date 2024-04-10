"use client"
import React, { useState } from 'react'
import { Label } from './ui/label'
import { UploadCloud } from 'lucide-react'
import { useVideoStore } from '@/zustandStore/store';

function UploadComponent() {

    

    const setVideoFile = useVideoStore((state:any) => state?.setVideoFile);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        
        
    
    setVideoFile(e.target.files[0]);
    }
  };


  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.add('border-blue-500');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('border-blue-500');
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('border-blue-500');

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setVideoFile(e.dataTransfer.files[0]);
    }
  };


    
  return (
    <div className="flex items-center justify-center w-full col-span-12">
    <Label
     onDragOver={handleDragOver}
     onDragLeave={handleDragLeave}
     onDrop={handleDrop}
    className="flex flex-col items-center justify-center w-full border   rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload a file</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Click to browse,or drag & drop a file here</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
    </Label>
</div> 
  )
}

export default UploadComponent