import Optiontitle from '@/components/Optiontitle'
import SoundEffect from '@/components/SoundEffect'
import Stockmusic from '@/components/Stockmusic'
import UploadComponent from '@/components/UploadComponent'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { HardDrive, Music2Icon, Music4Icon, SpeechIcon, TrainFrontTunnel } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <section>
      <Optiontitle title='Add audio'/>
      <div className=' grid grid-cols-2 gap-3'>
        <div className=' col-span-2'>
        <UploadComponent />
        </div>
        
        <Card className=' flex p-5 flex-col justify-center items-center gap-2'>
            <SpeechIcon/>
            <span>Text to Speech</span>
        </Card>

        <Card className=' relative flex p-5 flex-col justify-center items-center gap-2'>
            <Badge color='blue' className=' rounded-md absolute top-2 right-2'>NEW</Badge>
            <Music2Icon/>
            <span>Voice clone</span>
        </Card>

        <Card className=' relative flex p-5 flex-col justify-center items-center gap-2'>
            {/* <Badge color='blue' className=' rounded-md absolute top-2 right-2'>NEW</Badge> */}
            {/* <Music2Icon/> */}
            <Music4Icon/>
            <span>Voiceover</span>
        </Card>

        <div className=' col-span-1 flex flex-col gap-3'>
            <Card className=' flex-1 flex gap-2 items-center  justify-center'>
              <TrainFrontTunnel/>
              <span>Brand Kit</span>
            </Card>
            
            <Card className=' flex-1 flex gap-2 items-center  justify-center'>
              {/* <TrainFrontTunnel/> */}
              <HardDrive/>
              <span>Dropbox</span>
            </Card>
            

        </div>


      </div>
      <Stockmusic/>
      <SoundEffect/>
    </section>
  )
}

export default page