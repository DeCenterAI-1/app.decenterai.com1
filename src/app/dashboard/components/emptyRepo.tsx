import React from 'react'
import Image from 'next/image'
import Emptyimg from '@public/magnify.png'
export default function EmptyRepository() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="mb-2">
        <Image src={Emptyimg} className="grayscale sm:w-[170px] sm:h-[135px] w-[120px] h-[90px]" alt="" />
      </div>
      <span className="text-center text-xs ">No models created yet.</span>
      <button className="rounded-full flex justify-center items-center px-4 py-2 bg-primary_11">Create new model</button>
    </div>
  )
}
