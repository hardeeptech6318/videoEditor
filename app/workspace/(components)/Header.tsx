import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileQuestion, Search, User } from 'lucide-react'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

function Header() {
  return (
    <div className=' flex justify-end gap-3 mt-3'>
        <Button >Upgrade</Button>
        {/* <Input placeholder='Search..'/> */}
        <Button variant="ghost"><Search/>Search</Button>
        <Button variant="ghost"><User/> Invite</Button>
        <Button variant="ghost"><FileQuestion/></Button>
        <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    </div>
  )
}

export default Header