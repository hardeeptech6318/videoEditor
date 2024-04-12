import Optiontitle from "@/components/Optiontitle"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const imagedata=[
    {
        id:1,
        image:"/CameraLayout.6d3734500f0e908699e5194ed24019dd.svg",
        title:"Camera"
    },
    {
        id:2,
        image:"/AudioDefault.5a50a4497a1d2b9e3934cb1697ad558a.svg",
        title:"Audio"
    },
    {
        id:3,
        image:"/ScreenDefault.c97d262c5c2c0e00b7c69654bfa8499d.svg",
        title:"Screen"
    },
    {
        id:4,
        image:"/CameraScreenDefault.d23b460ee15467dbcbb2ce266cb10a26.svg",
        title:"Screen & Camera"
    },
    {
        id:5,
        image:"/CameraSlidesDefault.e7f42b745f73056efb6f444f81a20e58.svg",
        title:"Slides & Camera"
    },
    {
        id:6,
        image:"/SlidesDefault.6e3529de84e8643090ee51c07165bbe0.svg",
        title:"Slides"
    },
    
]

function page() {
  return (
    <section>
        <Optiontitle title="Record"/>

        <div className=" grid grid-cols-2 gap-3">
             {imagedata.map((e,i)=>(
                
                        <Card key={i} className=" p-3"> 
                    <Image  src={e.image} height={200} width={200} alt="khg"/>
                    <div className=" mt-3">{e.title}</div>

                    </Card>
                
             ))}   
        </div>
    </section>
  )
}

export default page