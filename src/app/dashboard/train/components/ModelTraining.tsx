'use client'
import React from 'react'
import rocket from '@public/straightRocket.png'
import Image from 'next/image'

interface IProps {
  setPage: (page: number | null) => void
}

interface IFile {
  file: {
    name: string
  }
  path: string
}

export default function ModelTraining({ setPage }: IProps) {
  return (
    <div className="w-full h-full mt-[5rem] px-5 pt-3 relative">
      <div>
        <h1 className="text-center text-3xl font-logirentBold text-primary_1">
        Model is now being trained
        </h1>
        <p className="font-archivo text-xs font-light text-center text-primary_6">Training takes less than 3 minutes, please wait...</p>
      </div>
      <div className=" h-[40%] w-[100%] flex items-end justify-center absolute bottom-[5rem] left-0">
        <Image
          src={rocket}
          alt="decenter image"
          className="grayscale max-h-[100%] min-w-[400px]"
          width={600}
          height={600}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  )
}
