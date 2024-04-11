import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import UploadComponent from '@/components/UploadComponent'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import UploadFile from './component/UploadFile'
import { ArrowRight, AudioLinesIcon, CloudMoonRain, Footprints, ImageIcon, Plus, Type, Video } from 'lucide-react'
import ImageSection from './component/ImageSection'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <section  className=' p-10'>

        <div className=' opacity-80 grid grid-cols-12 bg-gradient-to-r from-red-500 to-orange-500 gap-5 p-5 rounded-2xl'>

          <div className=' col-span-4'>
              <ImageSection/>
          </div>
          <div className=' col-span-8'>
              <h1 className=' text-5xl  font-bold text-white'>Keep your videos on brand with Brand  Kit.</h1>
              <div className=' flex justify-between items-center mt-3 '>
                <p className=' text-white'>Create a unified look for your video content. <br/>Set your brand's fonts, color schemes, and logo,<br/>and apply them to all your videos.</p>
                <Button size="lg" variant="outline" className=' p-6 rounded-2xl flex gap-5 justify-between items-center'>
                    <span>Upgrade to Build Your Brand Kit</span>
                    <ArrowRight/> 
                </Button>
              </div>
          </div>

        </div>


          <Accordion defaultValue={["item-1", "item-2", "item-3", "item-4","item-5"]}  type="multiple"  className=" mb-20 w-full mt-10 gap-10 flex flex-col">


      <AccordionItem value="item-1">
        <AccordionTrigger className=' justify-start gap-5 text-xl font-semibold'>
          Image Assests
        </AccordionTrigger>
        <p className='text-sm text-muted-foreground'>Add brand images and custom watermarks and use them across your projects</p>
        <AccordionContent className=' grid grid-cols-5 gap-5 mt-5'>
          
          <UploadFile Icon={<ImageIcon/>} text='Add Image' className=' col-span-1  '/>

          <Card className='  flex flex-col'>
            <Image height={200}  width={200} className=' rounded-t-xl w-full'  alt='dsfd' src="https://dynamic.design.com/asset/logo/28e2afdb-cdae-41e9-8f04-63174005696f/logo-search-grid-1x?logoTemplateVersion=1&v=638314063108730000&text=Aeed.io"/>
            <p className=' text-center py-3'> 
              Brand logo.png
            </p>
          </Card>
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-2">
        <AccordionTrigger className=' justify-start gap-5 text-xl font-semibold'>
        Video Assets
        
        </AccordionTrigger>
        <p>Add brand videos and custom clips and use them across your projects</p>
        <AccordionContent className=' grid grid-cols-5 gap-5 mt-5'>
        <UploadFile Icon={<Video/>} text='Add Video' className=' col-span-1  '/>

<Card className='  flex flex-col'>
  <Image height={200}  width={200} className=' rounded-t-xl w-full'  alt='dsfd' src="https://dynamic.design.com/asset/logo/28e2afdb-cdae-41e9-8f04-63174005696f/logo-search-grid-1x?logoTemplateVersion=1&v=638314063108730000&text=Aeed.io"/>
  <p className=' text-center py-3'> 
    Brand logo.mp4
  </p>
</Card>
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-3">
        <AccordionTrigger className=' justify-start gap-5 text-xl font-semibold'>
          Audio Assests
          
          </AccordionTrigger>
          <p>Add custom audio and use them for subtitles and captions in any video</p>
        <AccordionContent className=' grid grid-cols-5 gap-5 mt-5'>
        <UploadFile Icon={<AudioLinesIcon/>} text='Add Audio' className=' col-span-1  '/>

{/* <Card className='  flex flex-col'>
  <Image height={200}  width={200} className=' rounded-t-xl w-full'  alt='dsfd' src="https://dynamic.design.com/asset/logo/28e2afdb-cdae-41e9-8f04-63174005696f/logo-search-grid-1x?logoTemplateVersion=1&v=638314063108730000&text=Aeed.io"/>
  <p className=' text-center py-3'> 
    Brand logo.mp3
  </p>
</Card> */}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className=' justify-start gap-5 text-xl font-semibold'>
          Colors Assests
          
          </AccordionTrigger>
          <p>Add brand images and custom watermarks and use them across your projects</p>
        <AccordionContent className=' grid grid-cols-5 gap-5 mt-5'  >
        <UploadFile Icon={<Plus/>} text='Add Colors' className=' col-span-1  '/>

        <Card className='  flex flex-col'>
  
  <div className=' rounded-t-xl flex-1 min-h-[110px] bg-[#67C1FF]' ></div>
  <p className=' text-center py-3'> 
  #67C1FF
  </p>
</Card>
<Card className='  flex flex-col'>
  
  <div className=' rounded-t-xl flex-1 bg-[#0098FD]' ></div>
  <p className=' text-center py-3'> 
  #0098FD
  </p>
</Card>
        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-5">
        <AccordionTrigger className=' justify-start gap-5 text-xl font-semibold'>
          Font Assests
          
          </AccordionTrigger>
          <p>Add custom fonts and use them for subtitles and captions in any video</p>
        <AccordionContent className=' grid grid-cols-5 gap-5 mt-5'>
        <UploadFile Icon={<Type/>} text='Add Font' className=' col-span-1  '/>

<Card className='  flex flex-col min-h-[110px]'>
  {/* <Image height={200}  width={200} className=' rounded-t-xl w-full'  alt='dsfd' src="https://dynamic.design.com/asset/logo/28e2afdb-cdae-41e9-8f04-63174005696f/logo-search-grid-1x?logoTemplateVersion=1&v=638314063108730000&text=Aeed.io"/> */}
  <div className=' text-gray-300 flex-1 flex justify-center items-center text-2xl border-b'>
    Aa
  </div>
  <p className=' text-center py-3'> 
    Inter
  </p>
</Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </section>
  )
}

export default page