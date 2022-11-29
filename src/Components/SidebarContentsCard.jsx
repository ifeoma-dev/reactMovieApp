import React from 'react'

const SidebarContentsCard = (props) => {
  return (
    <div className='py-2 flex flex-col bg-transparent gap-2'>
        {props?.children}
    </div>
  )
}

export default SidebarContentsCard