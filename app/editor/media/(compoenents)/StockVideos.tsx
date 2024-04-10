import Subtitle from "@/components/Subtitle"
import Link from "next/link"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Dot, Ellipsis } from "lucide-react"
import TagOverflow from "@/components/TagOverflow"
import Videolist from "./Videolist"


const videourl=[
  {
    id:1,
    url:'https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4'
  },
  {
    id:2,
    url:`src="https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4"`
  },
  {
    id:3,
    url:`https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sf5P8PTin0n4yu1/videoblocks-hongkong-china-hyperlapse-aerial-2019-night-lights-15_rw-ulyubfv__57ebeabb62aec44fc414fd4ca106385e__P720.mp4`
  },
  {
    id:4,
    url:`src="https://www.youtube.com/watch?v=xHQmj4dAC1w"`
  },
  {
    id:5,
    url:`src="https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sb7uiLMltks8nrrky/videoblocks-v1-0033_20210817-zhuk-house-on-wheels-5-pervomaiskoe-crossmedia00000000_rannistqf__3fc6d6c8fbb5def01512083a091d56b4__P720.mp4"`
  }
]


function StockVideos() {
  
  const tags=[
    {
      id:1,
      url:"/",
      name:"Animals"
    },
    {
      id:2,
      url:"/",
      name:"Nature"
    },
    {
      id:3,
      url:"/",
      name:"People"
    },
    {
      id:4,
      url:"/",
      name:"Slow motion"
    },
    {
      id:5,
      url:"/",
      name:"Time lapse"
    },
    {
      id:6,
      url:"/",
      name:"Fire"
    },
    {
      id:7,
      url:"/",
      name:"Water"
    },
    {
      id:8,
      url:"/",
      name:"Flowers"
    },
    {
      id:9,
      url:"/",
      name:"Transportation"
    },
    {
      id:10,
      url:"/",
      name:"Sports and recreation"
    },
    {
      id:11,
      url:"/",
      name:"Effects and Lower thirds"
    },
  ]
  
  return (
    <div>
        <Subtitle title="Stock video" searchUrl="sockvideos"/>
        <TagOverflow tags={tags}/>
       <Videolist data ={videourl}/>
    </div>
  )
}

export default StockVideos