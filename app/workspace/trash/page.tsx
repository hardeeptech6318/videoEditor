import { Trash } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <section className=' h-full'>
      <h2 className=' p-5 shadow-sm  text-xl'>All videos</h2>
      <div className='p-5 flex flex-col gap-5'>
        <div className=' bg-red-100 flex gap-5 px-10 py-3 rounded-xl items-center justify-center'><Trash className=' text-red-400' /><span className=' text-sm text-muted-foreground'>Files in the trash are deleted forever  after 30 days</span></div>
        <div className='  flex-1 flex justify-center items-center flex-col gap-5 h-full'>
          <Trash height={60} width={60} className=' text-muted-foreground'/>
          <h2 className=' text-xl text-muted-foreground '>You haven&apos;t deleted any videos yet</h2>
          <p className=' text-center text-muted-foreground'>All your deleted files will show up here and will be <br/>visible to anyone in your workspace.</p>
        </div>
      </div>
    </section>
  )
}

export default page