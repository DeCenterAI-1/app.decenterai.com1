import React from 'react'
import img from '@public/Rectangle75.png'
import Image from 'next/image'
import { GoDownload } from 'react-icons/go'

// import Modal from './modal'
function RightSide() {
  return (
    <div className="h-[100%] max-h-screen hidden lg:block overflow-y-auto px-4">
      <div className="mb-4 flex justify-center">
        <Image className=" justify-center grid" src={img} alt="" />
      </div>
      <button className="px-4 border border-[#494949] py-2 mb-4 text-center bg-primary_11 rounded-full w-full text-xs">
        Fine_tune
      </button>
      <button className="px-4 border border-[#494949] py-2 mb-4 text-center bg-primary_11 rounded-full w-full text-xs">
        Download
      </button>
      <button className="px-4 border border-[#494949] py-2 mb-4 text-center bg-primary_11 rounded-full w-full text-xs">
        Share
      </button>
      <div className="px-4 py-2 mb-4  bg-primary_11 rounded-2xl">
        <ul>
          <li className="text-xs  text-xs text-[#5D5D5D] px-3 py-3 hover:bg-black hover:rounded-full cursor-pointer hover:bg-primary_13 hover:text-primary_1">
            Model description
          </li>
          <li className="text-xs text-[#5D5D5D]  px-3  py-3 hover:bg-black hover:rounded-full cursor-pointer hover:bg-primary_13 hover:text-primary_1">
            Version history
          </li>
          <li className="text-xs text-[#5D5D5D]  px-3  py-3 hover:bg-black hover:rounded-full cursor-pointer hover:bg-primary_13 hover:text-primary_1">
            Uploaded files
          </li>
        </ul>
      </div>
      <div className="px-4 py-2 mb-4  bg-primary_11 rounded-2xl">
        <ul>
          <li className="text-xs px-3 text-[#5D5D5D] py-3">
            Created Sep, 12 2023
          </li>
          <li className="text-xs  px-3 text-[#5D5D5D]  py-3 flex gap-4">
            Downloads
            <span className="flex gap-1">
              <GoDownload />
              12K
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightSide
