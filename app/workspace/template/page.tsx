import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'
import React from 'react'

const filterByOption=[
  {
    name:"Black friday",
    icon:""
  },
  {
    name:"Pride",
    icon:""
  },
  {
    name:"Birthdays",
    icon:""
  },
  {
    name:"Wedding",
    icon:""
  },
  {
    name:"Artistic",
    icon:""
  },
  {
    name:"Money",
    icon:""
  },
  {
    name:"Typographic",
    icon:""
  },
  {
    name:"Energetic",
    icon:""
  },
  {
    name:"Health and Beauty",
    icon:""
  },
  
]


function page() {
  return (
    <section className='mt-5'>
      <div className='bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-500 p-10'>
        <h2 className=' text-5xl font-bold mb-10 text-white'>Create professional-quality videos <br/> in minutes with templates.</h2>
        <div>
          <p className= ' font-semibold text-gradient-to-r from-red-500 via-orange-300 to-red-500'>What do you want to create today?</p>
          <Label className=' relative'>
            <Search className=' absolute top-2 left-2'/>
          <Input className=' rounded-3xl w-72 mt-2 pl-10' placeholder='sales pitch video '/>
          </Label>
        </div>
      </div>


    <div className=' px-10 mt-4'>
      <div className=' flex items-center gap-3'>
        <span className=' text-muted-foreground'>Filetr by</span>
        {filterByOption.map((e,i)=>(
          <Button key={i}  size="sm" variant="outline" className=' rounded-3xl'>{e.name}</Button>
        ))}
      </div>
    </div>

    </section>
  )
}

export default page