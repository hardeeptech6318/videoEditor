"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./(components)/Navbar";
import Maineditor from "./(components)/Maineditor";
import { ScrollArea } from "@/components/ui/scroll-area";
// import Timeline from "@/components/VideoTimeline";
import VideoControls from "@/components/VideoControls";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import MobileNavbar from "./(components)/MobileNav";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import useVideoStore from "@/zustandStore/store";
import CanvasVideoTimeline from "@/components/CanvasTimeline";
import NoSSRWrapper from "@/components/NossrConversion";


function Layout({ children }: { children: React.ReactNode }) {
  const open = useVideoStore((state:any) => state.opendrawer);
  
  

  return (
    <section className=" flex lg:flex-row flex-col fixed w-full h-full">
      <Navbar />
      <MobileNavbar >
      {children}
      </MobileNavbar>
      
      <ResizablePanelGroup direction="vertical" >
      <ResizablePanel className="  flex h-full" defaultValue={25}>
      
          <ScrollArea className="  w-[400px] lg:block hidden h-full  p-5 border-r border-l shadow-sm ">
            {children}
          </ScrollArea>

         


          <Maineditor className=" flex-1 h-full bg-[#f7f7f8] " />
        
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="shadow-sm border flex flex-col">
      
          <VideoControls />
          {/* <Timeline  /> */}
          <NoSSRWrapper>
          <CanvasVideoTimeline/>
          </NoSSRWrapper>
      </ResizablePanel>
    </ResizablePanelGroup>

      {/* <div className=" flex flex-col w-full">

        

       

      </div> */}
    </section>
  );
}

export default Layout;
