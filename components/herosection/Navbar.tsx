import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className=' p-6     flex justify-between items-center ' style={{backgroundColor:"rgb(246 243 243/1)"}}>
        <div>
              <h1 className=' text-3xl font-bold'>VEED.IO</h1>  
        </div>
        <div className=' flex gap-3 items-center'>
            <Link href="/"><Button size="lg" variant="ghost" className='px-3 text-md rounded-full hover:bg-white'>Book a demo</Button></Link>
                <Button size="lg" variant="outline" className='px-4 text-md rounded-full'>Log in</Button>
                <Button size="lg" className=' rounded-full text-md px-4'>Sign Up</Button>
        </div>
    </nav>
  )
}

export default Navbar