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
      <ResizablePanel defaultValue={25}>
      <div className=" flex-1 flex h-full">
          <ScrollArea className=" w-[400px] overflow-y-auto p-5 border-r shadow-sm ">
            {children}
          </ScrollArea>

          <Maineditor className=" flex-1 bg-[#f7f7f8] " />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
      <div className="  shadow-sm border flex flex-col">
          <VideoControls />
          <Timeline duration={1500} currentTime={100} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>

      {/* <div className=" flex flex-col w-full">

        

       

      </div> */}
    </section>
  );
}

export default Layout;
