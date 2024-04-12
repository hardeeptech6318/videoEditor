import Subtitle from "@/components/Subtitle";

import TagOverflow from "@/components/TagOverflow";
import Videolist from "./Videolist";

const videourl = [
  {
    id: 1,
    url: "https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4",
  },
  {
    id: 2,
    url: `https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sf5P8PTin0n4yu1/videoblocks-hongkong-china-hyperlapse-aerial-2019-night-lights-15_rw-ulyubfv__57ebeabb62aec44fc414fd4ca106385e__P720.mp4`,
  },
  {
    id: 3,
    url: "https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4",
  },
  {
    id: 4,
    url: `https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sf5P8PTin0n4yu1/videoblocks-hongkong-china-hyperlapse-aerial-2019-night-lights-15_rw-ulyubfv__57ebeabb62aec44fc414fd4ca106385e__P720.mp4`,
  },
  {
    id: 5,
    url: "https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4",
  },
  {
    id: 6,
    url: `https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sf5P8PTin0n4yu1/videoblocks-hongkong-china-hyperlapse-aerial-2019-night-lights-15_rw-ulyubfv__57ebeabb62aec44fc414fd4ca106385e__P720.mp4`,
  },
  {
    id: 7,
    url: "https://dm0qx8t0i9gc9.cloudfront.net/previews/video/GTYSdDW/4k-60fps-aerial-of-woman-walking-in-jasper-national-park_h9o_sj4c__8b074e483fb25df4417f23020ccb91d3__P720.mp4",
  },
  {
    id: 8,
    url: `https://dm0qx8t0i9gc9.cloudfront.net/previews/video/Sf5P8PTin0n4yu1/videoblocks-hongkong-china-hyperlapse-aerial-2019-night-lights-15_rw-ulyubfv__57ebeabb62aec44fc414fd4ca106385e__P720.mp4`,
  },
];

function StockVideos() {
  const tags = [
    {
      id: 1,
      url: "/",
      name: "Animals",
    },
    {
      id: 2,
      url: "/",
      name: "Nature",
    },
    {
      id: 3,
      url: "/",
      name: "People",
    },
    {
      id: 4,
      url: "/",
      name: "Slow motion",
    },
    {
      id: 5,
      url: "/",
      name: "Time lapse",
    },
    {
      id: 6,
      url: "/",
      name: "Fire",
    },
    {
      id: 7,
      url: "/",
      name: "Water",
    },
    {
      id: 8,
      url: "/",
      name: "Flowers",
    },
    {
      id: 9,
      url: "/",
      name: "Transportation",
    },
    {
      id: 10,
      url: "/",
      name: "Sports and recreation",
    },
    {
      id: 11,
      url: "/",
      name: "Effects and Lower thirds",
    },
  ];

  return (
    <div >
      <Subtitle title="Stock video" searchUrl="sockvideos" />
      <TagOverflow tags={tags} />
      
      <Videolist data={videourl} />
      
    </div>
  );
}

export default StockVideos;
