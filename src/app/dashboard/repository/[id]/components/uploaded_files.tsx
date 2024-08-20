import React from 'react'
interface File {
  name: string
  date: Date
}

interface UploadedFilesProps {
  files: History[]
}
const Uploaded_Files = ({ files }) => {
  return (
    <div className="flex flex-col gap-4">
      {files.length > 0 ?
        files.map((file) => {
          return (
            <div className="bg-primary_11 flex justify-between p-3 items-center">
              <p className="text-primary_7">{file.name}</p>
              <p className="text-primary_6 text-xs">{file.date.toLocaleDateString()} {file.date.toLocaleTimeString()}</p>
            </div>
          )
        }) : ''}
    </div>
  )
}

export default Uploaded_Files
