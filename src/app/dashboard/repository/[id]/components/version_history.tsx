import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'


interface History {
  name: string
  date: Date
  user: string
}

interface VersionHistoryProps {
  histories: History[]
}
const versionHistory = ({ histories }) => {
  return (
    <div className="border rounded-2xl border-primary_8 pt-2 pb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 px-8 py-3 font-bold gap-1">
        <div className="text-sm sm:text-lg">Version Name</div>
        <div className="hidden md:block text-sm sm:text-lg">Last Saved</div>
        <div className="text-sm sm:text-lg">By</div>
      </div>
      <div className="flex flex-col gap-3 px-4">
        {histories.length > 0 ? (
          histories.map((history, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-3 px-4 py-3 border border-primary_8 rounded-full flex items-center gap-1">
              <div className="text-primary_6 whitespace-normal overflow-hidden overflow-ellipsis text-sm sm:text-lg">{history.name}</div>
              <div className="text-xs hidden md:block">
                {history.date.toLocaleDateString()} {history.date.toLocaleTimeString()}
              </div>
              <div className="flex text-primary_1 justify-between items-center pr-5">
                <div className="flex items-center gap-2">
                  <img src={'/avatars/image.png'} className="w-[30px] h-[30px]" />
                  <span className="hidden sm:inline-block">{history.user}</span>
                </div>
                <div className="hover:rounded-full hover:bg-primary_11 cursor-pointer p-[0.4rem] text-primary_7 hover:text-primary_4">
                    <BiDotsVertical />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4">No history available</div>
        )}
      </div>
    </div>
  )
}

export default versionHistory
