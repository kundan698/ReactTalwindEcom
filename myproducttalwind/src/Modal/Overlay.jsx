import React from 'react'

export default function Overlay({change,set}) {
   
  return (
    <div>
        <div className='w-[100%] bg-[rgba(0,0,0,0.5)] h-[100%] fixed z-10'onClick={()=>set(!change)}>

        </div>
        <div className="fixed h-[400px] w-[400px] bg-slate-100 top-0 z-20 duration-[0.5s]"></div>
    </div>
  )
}
