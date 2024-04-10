import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Subtitle({title,searchUrl}:{title:string,searchUrl?:string}) {
  return (
    <div className=' flex justify-between items-center'>
<div className='text-sm font-semibold py-2'>{title}</div>
{
  searchUrl && (
    
      <Link href={searchUrl} className=' flex justify-center items-center gap-2 text-muted-foreground text-sm'>
      <Search width={15} height={15}/> <span>Search</span>
      </Link>
      
  )
}
    </div>
    
  )
}

export default Subtitle