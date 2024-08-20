'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { DashLayout } from '../dashLayout'
import Link from 'next/link'
import { GoFilter } from 'react-icons/go'
import { GoDownload } from 'react-icons/go'
import { GoSortAsc } from 'react-icons/go'
import { BiLike } from 'react-icons/bi'
import Repository from './components/repository'
import repositoryList from '@/data/repository'

export default function Page() {
  const pathname = usePathname()
  return (
    <DashLayout>
      <div className="h-full pt-6 flex flex-col gap-y-10 text-white px-4">
        <div className="">
          {/* <div className="px-4 h-[20%] flex justify-between  items-center max-w-[209px] text-xs rounded-t-2xl bg-primary_11">
            <Link href="">
              <span>Personal</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">General</span>
            </Link>
          </div> */}
          <div className="flex justify-between border items-center border-primary_9 sm:px-4 px-2 py-4 ">
            <div className="hidden sm:inline-block">
              <span className="font-logirentRegular text-2xl">Models 3</span>
            </div>
            <div className="rounded-full  max-h-[50px] w-[200px] sm:w-[300px] md:w-[400px]  bg-primary_11 relative text-primary_8 pb-1">
              <div className="absolute top-0 left-5 h-full flex items-center">
                <GoFilter size={20} />
              </div>
              <input
                placeholder="Filter by name"
                className="w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo"
              />
            </div>

            <div className="flex gap-20 justify-end">
              {/* <div className="flex items-center gap-1">
                <GoDownload width={18} height={15} />
                <span className="text-xs">Sort</span>
              </div> */}
              <div className="flex">
                <GoSortAsc width={18} height={15} />
                <span className="text-xs hidden sm:inline-block">Sort</span>
              </div>
            </div>
          </div>
          <span className="px-4 py-3 text-xs border-primary_9 border flex justify-between max-w-[70px]  rounded-b-2xl">
            <Link href="">
              <span>Modal</span>
            </Link>
            {/* <Link href="">
              <span className="text-primary_8">Datasets</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">Pre-trained models</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">Templates</span>
            </Link> */}
          </span>
        </div>
        <div className="text-white text-xs overflow-auto">
          {/* <div className="bg-primary_13 bg-opacity-40 px-4 py-5 h-[50%] rounded-lg  w-[250px]">
            <span>Multimodal</span>
            <div className="mt-3">
              <span className="text-xs border border-primary_11 px-3 mt-4 py-1 rounded-full">
                Feature Extraction
              </span>
            </div>
          </div> */}

          <div className="h-full flex flex-col gap-[3rem]">
            <div className="w-full flex flex-col gap-6  overflow-y-scroll">
              <Repository />
            </div>

            <div className="flex justify-center gap-x-10 text-primary_7  items-center">
              <div>
                <button className="w-24 bg-primary_11 py-2 rounded-full hover:text-primary_1">Next</button>
              </div>
              <div className=" ">
                <span className="p-2  border">1</span>
              </div>
              <div>
                <button className="w-24 bg-primary_11 py-2 rounded-full hover:text-primary_1">Previous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}
