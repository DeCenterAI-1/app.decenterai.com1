'use client'
import Image from 'next/image'
import React, { useState } from 'react'
// import { useRouter } from '';
import { usePathname } from 'next/navigation'
import imageDecenterLogoWhite from '@public/Logo White.png'
import imageDecenterLogoSubtitle from '@public/Logo Texts.png'
import { RxDashboard } from 'react-icons/rx'
import { HiOutlineChip } from 'react-icons/hi'

import { BsDatabase, BsGear } from 'react-icons/bs'
import { GoBell, GoSearch } from 'react-icons/go'
import { AiFillSetting } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'
import Link from 'next/link'

import notIcon from 'public/notification.png'
import { ModalNotification } from './notifications/components/Notification'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@lib/imageHelper'
import particle from '@/lib/particle'
import { useRouter } from 'next/navigation'

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore()
  const pathname = usePathname()
  const { push, replace } = useRouter()
  const [isNotificationOpen, setNotificationOpen] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)
  const [isProfileOpen, setProfileOpen] = useState(false)

  const openNotification = () => {
    setNotificationOpen(true)
    setShowBackdrop(true)
  }
  const closeNotification = () => {
    setNotificationOpen(false)
    setShowBackdrop(false)
  }

  const openProfile = () => {
    setProfileOpen(!isProfileOpen)
  }
  const handleLogout = async () => {
    await particle.auth.logout()
    console.log('logout')
    localStorage.clear()
    userStore.clearUser()
    replace('/explore')
    // push('/explore')
  }

  const myImageLoader = ({ src }) => {
    return src
  }
  const userStore = useUserStore()
  return (
    <div className={`w-screen h-screen flex  bg-primary_12 relative overflow-y-auto`}>
      {showBackdrop && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={closeNotification}
        />
      )}
      <aside className="w-[10%] max-w-[100px] flex flex-col h-full min-w-[60px] border-r border-primary_8  h-screen overflow-y-auto">
        <Link href="/">
          <div className="w-full flex flex-col gap-2 pt-2 items-center justify-center h-[60px] sm:h-[100px]">
            <Image
              src={imageDecenterLogoWhite}
              alt="DECENTER Icon"
              width={50}
              height={150}
              className="w-[30px] h-[30px]"
            />
            <Image
              src={imageDecenterLogoSubtitle}
              alt="DECENTER Icon"
              width={100}
              height={150}
              style={{ maxWidth: '100%' }}
              className="hidden sm:block"
            />
          </div>
        </Link>
        <div className="w-full flex-1  font-archivo ">
          <Link href="/dashboard">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <RxDashboard size={25} />
              </div>
              <p className="text-sm hidden sm:block">Dashboard</p>
            </div>
          </Link>
          <Link href="/dashboard/train">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/train' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <HiOutlineChip size={25} />
              </div>
              <p className="text-sm hidden sm:block">Train</p>
            </div>
          </Link>
          <Link href="/dashboard/repository">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/repository' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <BsDatabase size={25} />
              </div>
              <p className="text-sm hidden sm:block">Repository</p>
            </div>
          </Link>
          {/* <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiUsersThree size={25} />
            </div>
            <p className="text-sm">Teams</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiClipboardLight size={25} />
            </div>
            <p className="text-sm">Testing</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiTrophyBold size={25} />
            </div>
            <p className="text-sm">Rewards</p>
          </div> */}
          <Link href="/dashboard/settings">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/settings' ? 'bg-primary_11 text-white' : ''
              }`}>
              <div className="flex justify-center ">
                <BsGear size={25} />
              </div>
              <p className="text-sm hidden sm:block">Settings</p>
            </div>
          </Link>
        </div>
      </aside>

      <main className=" w-[90%] h-screen flex flex-col flex-1">
        <div className="w-full h-[10%] min-h-[60px] max-h-[80px] flex items-center border-b border-primary_8 px-10">
          <div className="h-full flex-1 flex items-center">
            <div className="rounded-full h-[60%] max-h-[50px] w-[100%] bg-primary_11 relative text-primary_8 pb-1">
              <div className="absolute top-0 left-5 h-full flex items-center">
                <GoSearch size={20} />
              </div>
              <input
                placeholder="search"
                className="w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo"
              />
            </div>
          </div>
          <div className="h-full flex flex-1 gap-6 items-center justify-end font-archivo hidden lg:flex">
            <div className="text-primary_8  cursor-pointer">
              <GoBell size={25} onClick={openNotification} />
            </div>
            {/* <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
              Connect Wallet
            </button> */}

            {user ? (
              <div className="flex gap-4">
                <div>
                  <button className="flex items-center rounded-full bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-4 cursor-pointer h-[100%]">
                    Connect Wallet
                  </button>
                </div>
                <div className="flex items-center rounded-full bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-4 cursor-pointer relative overflow-visible">
                  <div></div>
                  <button
                    onClick={openProfile}
                    className="flex flex-row items-center gap-3">
                    <Image
                      src={'/avatars/image.png'}
                      alt="profile pic"
                      loader={myImageLoader}
                      unoptimized
                      width={40}
                      height={40}
                      className="max-w-[100%] max-h-[100%] rounded-full mr-3"
                    />

                    <span className="flex items-center font-semibold font-primaryArchivo">
                      {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="18"
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.19254 12.3078C9.25065 12.3659 9.29675 12.4348 9.3282 12.5107C9.35965 12.5865 9.37584 12.6679 9.37584 12.75C9.37584 12.8321 9.35965 12.9135 9.3282 12.9893C9.29675 13.0652 9.25065 13.1341 9.19254 13.1922L5.44254 16.9422C5.38449 17.0003 5.31556 17.0464 5.23969 17.0779C5.16381 17.1093 5.08248 17.1255 5.00035 17.1255C4.91821 17.1255 4.83688 17.1093 4.76101 17.0779C4.68514 17.0464 4.61621 17.0003 4.55816 16.9422L0.80816 13.1922C0.690884 13.0749 0.625 12.9159 0.625 12.75C0.625 12.5842 0.690884 12.4251 0.80816 12.3078C0.925435 12.1905 1.0845 12.1247 1.25035 12.1247C1.4162 12.1247 1.57526 12.1905 1.69254 12.3078L5.00035 15.6164L8.30816 12.3078C8.36621 12.2497 8.43514 12.2036 8.51101 12.1722C8.58688 12.1407 8.66821 12.1245 8.75035 12.1245C8.83248 12.1245 8.91381 12.1407 8.98969 12.1722C9.06556 12.2036 9.13449 12.2497 9.19254 12.3078ZM1.69254 5.69219L5.00035 2.3836L8.30816 5.69219C8.42544 5.80947 8.5845 5.87535 8.75035 5.87535C8.9162 5.87535 9.07526 5.80947 9.19254 5.69219C9.30981 5.57492 9.3757 5.41586 9.3757 5.25C9.3757 5.08415 9.30981 4.92509 9.19254 4.80782L5.44254 1.05782C5.38449 0.999706 5.31556 0.953606 5.23969 0.922153C5.16381 0.890701 5.08248 0.874512 5.00035 0.874512C4.91821 0.874512 4.83688 0.890701 4.76101 0.922153C4.68514 0.953606 4.61621 0.999706 4.55816 1.05782L0.80816 4.80782C0.690884 4.92509 0.625 5.08415 0.625 5.25C0.625 5.41586 0.690885 5.57492 0.80816 5.69219C0.925436 5.80947 1.0845 5.87535 1.25035 5.87535C1.4162 5.87535 1.57526 5.80947 1.69254 5.69219Z"
                          fill="#5D5D5D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl relative">
                <button className="flex flex-row" onClick={() => replace('/explore')}>
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-[90%] sm:px-10 overflow-y-auto flex-1">{children}</div>
      </main>
      {isProfileOpen && (
        <div className=" bg-primary_11 px-4 w-[200px] text-primary_6 py-2 rounded-xl top-20  absolute  z-50 right-10">
          <div className="py-4 border-b border-primary_8">
            <Link href="/dashboard/settings/profile" className="flex items-center gap-3">
              <div className="text-primary_8">
                <AiFillSetting size={22} />
              </div>
              Profile settings
            </Link>
          </div>
          <div className="py-4">
            <button onClick={handleLogout} className="flex items-center gap-3">
              <div className="text-primary_8">
                <CiLogout size={22} />
              </div>
              LogOut
            </button>
          </div>
        </div>
      )}

      {isNotificationOpen && (
        <aside
          className={`absolute z-50 right-8 mt-14 rounded-3xl max-w-[450px] shadow-xl bg-primary_11 flex flex-col px-4 py-6  gap-6 max-h-screen  `}>
          <div className="flex justify-between items-center ">
            <Image src={notIcon} alt="notification" className="w-[30%]" />
            <Link href="/dashboard/notifications" className="text-sm text-[#C1C1C1]">
              View All
            </Link>
          </div>
          <ModalNotification />
          <button>To the top</button>
        </aside>
      )}
    </div>
  )
}
