

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Camera, Play, Scissors, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const imadeData=[
  {image:"https://img.youtube.com/vi/bRrg242w9mA/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/bViNp03kvIw/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/kG9K4fTPUDk/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/1cxV0ILQcOM/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/xHjYKFfeuNU/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/tNZ3TH4tHtM/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/hfyg75XI9Xo/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/6HkUNOYzFBg/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/8nrktYR2m4s/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/X-IpObMHggE/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/gDSQ36Q4Z0o/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/RzXZnKskRdY/sddefault.jpg"},
  
  
  {image:"https://img.youtube.com/vi/xCIJTg5Kkt0/sddefault.jpg"},
  
  
  {image:"https://img.youtube.com/vi/Zc1xfxvDmQc/sddefault.jpg"},
  
  
  {image:"https://img.youtube.com/vi/dCPEBVLj5jY/sddefault.jpg"},
  
  
  {image:"https://img.youtube.com/vi/LV40fqPdf5w/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/Na9jL-6Yo5A/sddefault.jpg"},
  
  
  {image:"https://img.youtube.com/vi/GyWeYGPOfts/sddefault.jpg"},
  
  {image:"https://img.youtube.com/vi/VeNHieW7MJQ/sddefault.jpg"},
  ]

const cardsData = [
  {
    id: 1,
    title: "Create Project",
    url: "/editor",
    icon: Scissors,
    color: "purple",
    tag: "",
  },
  {
    id: 2,
    title: "Record video",
    url: "/editor",
    icon: Camera,
    color: "red",
    tag: "",
  },
  {
    id: 3,
    title: "Create Avatar Video",
    url: "/editor",
    icon: User,
    color: "blue",
    tag: "New",
  },
];

function page() {
  return (
    <section className="p-5">
      <h1 className=" text-2xl py-5">
        Let&apos;s create some <span className=" font-bold">videos!</span>
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cardsData.map((e) => (
          <Link
            href={e.url}
            key={e.id}
            className=" group hover:translate-y-0 translate-y-1 pb-5 transition  duration-150 "
          >
            <Card className=" group-hover:shadow-md">
              <div className=" flex gap-3 p-3 items-center justify-between">
                <div className=" flex-1 flex gap-3 items-center">
                  {" "}
                  <e.icon
                    height={35}
                    width={35}
                    className={`bg-${e.color}-200 rounded-md p-2    text-${e.color}-400   `}
                  />
                  <span className={`group:hover:text-${e.color}-400 `}>
                    {e.title}
                  </span>
                </div>
                <div>
                  {e.tag != "" && <Badge color={e.color}>{e.tag}</Badge>}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className=" grid grid-cols-12 gap-5   ">
        <Card className="flex flex-col rounded-2xl p-5 col-span-12 lg:col-span-5 xl:col-span-4  ">

          <video  className=" rounded-xl w-full"    src="https://cdn.veed.io/render/c0b2c1e0-dd8e-4c8d-80b3-2ce9ba51eafc.mp4">

          </video>

          <div className=" flex items-center gap-2 pt-5 justify-between">
            <div>
            <h3 className=" font-semibold">Welcome to VEED!</h3>
            <p className=" text-muted-foreground text-sm">Lean about VEED in less than 3 minutes!</p>
            </div>
            <Button className=" p-2 rounded-full text-white">
                <Play/>
            </Button>
          </div>

        </Card>

        <Card className=" rounded-2xl lg:col-span-7 col-span-12 xl:col-span-8 grid grid-cols-12  ">
            <div className=" col-span-5 flex justify-center items-start flex-col gap-2 ml-10 m-5"> 
              <h2 className=" text-2xl font-semibold">Select a template to get started!</h2>
              <p>Browse our collection of free customizable templates and start editing your video</p>
              <Button>Explore Templates <ArrowRight className=" ml-2"/></Button>
            </div>
            <div className=" col-span-7 bg-gradient-to-b from-transparent via-white to-white" style={{backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 39.42%, rgb(255, 255, 255) 100%);"}}>
              <Image className=" object-cover rounded-r-2xl rounded-l-md h-full w-full" src="/templates.webp" height={1080} width={1080} alt="khjg"/>
            </div>
        </Card>
      </div>


      <div className=" mb-28">
        <h2 className=" my-5 text-xl">Watch & Learn</h2>
        
        <div className=" overflow-x-auto flex gap-5">
          {imadeData.map((e,i)=>(
            <Image key={i} className=" h-[200px] object-cover rounded-2xl w-full"  src={e.image} height={1080} width={1080} alt="imagedata"/>
          ))}
        </div>
        
      </div>

      

    </section>
  );
}

export default page;





