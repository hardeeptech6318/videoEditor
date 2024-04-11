"use client";

import React from "react";
import Navbar from "./(components)/Navbar";
import Maineditor from "./(components)/Maineditor";
import { ScrollArea } from "@/components/ui/scroll-area";
import Timeline from "@/components/VideoTimeline";
import VideoControls from "@/components/VideoControls";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex fixed w-full h-full">
      <Navbar />
      
      <ResizablePanelGroup direction="vertical" >
      <ResizablePanel className="  flex h-full" defaultValue={25}>
      
          <ScrollArea className=" w-[400px] h-full  p-5 border-r shadow-sm ">
            {children}
          </ScrollArea>

          <Maineditor className=" flex-1 h-full bg-[#f7f7f8] " />
        
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="shadow-sm border flex flex-col">
      
          <VideoControls />
          <Timeline  />
        
      </ResizablePanel>
    </ResizablePanelGroup>

      {/* <div className=" flex flex-col w-full">

        

       

      </div> */}
    </section>
  );
}

export default Layout;
