import React from 'react'
import UserProfileMenu from './UserProfileMenu'
import LinkComponent from './LinkComponent'



function Navbar() {
  return (
    <nav  className=' px-5 shadow-sm'>
        <div className=' text-3xl font-bold p-3'>VEED.IO</div>  
        <div>
            <UserProfileMenu/>
            <LinkComponent/>
        </div>
    </nav>
  )
}

export default Navbar