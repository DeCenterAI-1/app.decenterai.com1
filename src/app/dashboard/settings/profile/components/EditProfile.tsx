'use client'
import Image from 'next/image'

import editProfile from 'public/edit-profile.png'
import { AiOutlineCamera } from 'react-icons/ai'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
const EditProfile = ({ onclick }) => {
  const userStore = useUserStore()

  const handleNameChange = (event) => {
    userStore.setUser({
      name: `${event.target.value}`,
    })
  }

  const handleBioChange = (event) => {
    userStore.setUser({
      bio: `${event.target.value}`,
    })
  }

  // const firstLastName = (name: string): [string, string] => {
  //   let names = user.name.split(' ')
  //   let firstName = names[0]
  //   let lastName = names.slice(1).join(' ')
  //   return [firstName, lastName]
  // }

  return (
    <div className="absolute inset-0 z-50 bg-primary_11 w-[80%] h-auto sm:w-[60%] md:w-[40%] lg:w-[30%] overflow-auto mx-auto rounded-xl px-6 py-6 flex flex-col gap-4 shadow-xl my-auto px-0 py-0">
      <Image src={editProfile} alt="edit profile" />
      {/* <div className="relative w-[25%] mx-auto">
        <Image
          src={userStore.user?.profileImage}
          alt="profile pic"
          loader={myImageLoader}
          unoptimized
          width={70}
          height={70}
          className="max-w-[100%] max-h-[100%] rounded-full "
        />

        <button className="absolute -bottom-2 left-10 text-[#8F8F8F] bg-[#2B2B2B] p-1.5 rounded-full">
          <AiOutlineCamera size={20} />
        </button>
      </div> */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px] border border-primary_11 rounded-full flex justify-center items-center relative">
            <img src="/avatars/image.png" className="w-[100%] h-[100%]" />
            <button className="absolute bottom-0 right-2 text-primary_7 bg-primary_10 p-1.5 rounded-full">
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="imageInput"
                // ref={fileInputRef}
                // onChange={handleFileInputChange}
              />
              <AiOutlineCamera size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow">
          <label htmlFor="name" className="font-bold text-sm text-primary_2">
            First Name
          </label>
          <input
            type="text"
            // value={firstName}
            // onChange={handleFirstNameChange}
            className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
          />
        </div>
        <div className="flex-grow">
          <label htmlFor="name" className="font-bold text-sm text-primary_2">
            Last Name
          </label>
          <input
            type="text"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
          />
        </div>
      </div>
      {/* <form action="" className="text-[#5D5D5D] text-sm flex flex-col gap-4 relative">
        <div className="grid gap-3 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-bold text-sm">
              Name
            </label>
            <input
              type="text"
              value={userStore.user.name}
              onChange={handleNameChange}
              className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Username" className="font-medium text-[#FDFDFD] text-sm">
            Username
          </label>
          <input
            type="text"
            placeholder="Nick name (optional)"
            value={userStore.user.userName}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            id="Username"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold text-sm">
            Email address
          </label>
          <input
            type="text"
            value={userStore.user?.email}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="bio" className="font-medium text-[#FDFDFD] text-sm">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={userStore.user?.bio}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent h-12 overflow-y-hidden"
            placeholder="About you (optional)"
            onChange={handleBioChange}></textarea>
        </div>
        <div className="font-semibold flex justify-end gap-4 items-center mt-2">
          <button className=" bg-transparent border border-primary_8 rounded-full px-4 py-3 text-[#F5F5F5] w-[140px] text-center">
            Cancel
          </button>
          <button className=" bg-primary_10 rounded-full px-4 py-3 w-[140px] text-center">
            Save changes
          </button>
        </div>
      </form> */}
      <div className="flex flex-col gap-1">
        <label htmlFor="Username" className="font-medium text-primary_2 text-sm">
          Username
        </label>
        <input
          type="text"
          // value={username}
          // onChange={handleUsernameChange}
          className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
          id="Username"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-bold text-sm text-primary_2">
          Email address
        </label>
        <input
          type="text"
          // value={email}
          className="text-primary_7 border border-primary_8 rounded-xl px-4 focus:outline-none bg-transparent h-[56px] w-[100%]"
          id="email"
          name="email"
          // onChange={handleEmailChange}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <label htmlFor="bio" className="font-medium text-primary_2 text-sm ">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          // value={bio}
          className="text-primary_7 border border-primary_8 rounded-xl p-4 focus:outline-none bg-transparent h-12 overflow-y-hidden h-[56px] w-[100%]"
          onChange={handleBioChange}></textarea>
      </div>
      <div className="font-semibold flex justify-end gap-4 items-center mt-2">
        <button className=" bg-transparent border border-primary_8 rounded-full px-3 py-2 text-[#F5F5F5] w-[160px] text-center text-sm">
          Cancel
        </button>
        <button className=" bg-primary_10 rounded-full px-3 py-2 w-[160px] text-center text-sm">
          Save changes
        </button>
      </div>
    </div>
  )
}

export default EditProfile
