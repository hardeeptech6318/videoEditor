import Subtitle from '@/components/Subtitle'
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function Duration() {
  return (
    <div>
        <Subtitle title='Duration'/>
        <div className=' border w-full rounded-lg'>
        <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 p-4 border-b">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Automatic</Label>
  </div>
  <div className="flex items-center space-x-2 p-4">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Fixed</Label>
  </div>
</RadioGroup>

        </div>
    </div>
  )
}

export default Duration