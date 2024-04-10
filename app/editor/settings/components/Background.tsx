import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Subtitle from '@/components/Subtitle'


function Background() {
  return (
    <div >
        <Subtitle title='Background'/>
        <div className=' border w-full rounded-lg'>
        <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 p-4 border-b">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Color</Label>
  </div>
  <div className="flex items-center space-x-2 p-4">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Image</Label>
  </div>
</RadioGroup>

        </div>
    </div>
  )
}

export default Background