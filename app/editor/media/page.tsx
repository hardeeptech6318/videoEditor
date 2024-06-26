import React from 'react'
import Upload from './(compoenents)/Upload'
import Optiontitle from '@/components/Optiontitle'
import StockVideos from './(compoenents)/StockVideos'
import Stockmusic from '@/components/Stockmusic'
import SoundEffect from '@/components/SoundEffect'

function page() {
  return (
    <section>
        <Optiontitle title='Media'/>
        <Upload/>
        
        <StockVideos/>
        
        <Stockmusic/>
        <SoundEffect/>
    </section>
  )
}

export default page