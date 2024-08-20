'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useUserContext } from '@state/userContext';
import { generateFromEmail } from 'unique-username-generator'
import { AvatarGenerator } from 'random-avatar-generator'
import { GiDigitalTrace } from 'react-icons/gi'
import particle from '@lib/particle'
import Loading from '../components/Loading'
import { userType } from '@app/api/prisma/upsert_user/route'
import { upsert_user } from './upsert_user'
import useUserStore from '@/state/userStore'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { push } = useRouter()
  // const { user, setUser } = useUserContext();
  const [email, setEmail] = useState<string>('')
  const [loginStart, setLoginStart] = useState<boolean>(true)
  const generator = new AvatarGenerator()
  const userStore = useUserStore()

  const login = async () => {
    const userInfo = await particle.auth.login({
      supportAuthTypes: 'email,google',
    })
    console.log({ primsa: userInfo })
    const email = userInfo.email || userInfo.google_email
    const name =
      userInfo.name ||
      (userInfo.thirdparty_user_info ? userInfo.thirdparty_user_info.user_info.name : '')
    const profileImage =
      userInfo.avatar ||
      (userInfo.thirdparty_user_info
        ? userInfo.thirdparty_user_info.user_info.picture
        : '')
    const particleUUID = userInfo.uuid

    if (!userInfo) {
      console.error({ particle: 'user not logged in' })
      return
    }

    setIsLoading(true)

    const user_data: userType = {
      email,
      userName: generateFromEmail(email, 2),
      name,
      profileImage: generator.generateRandomAvatar(profileImage),
      particleUUID,
    }

    const res = await upsert_user(user_data)
    console.log(res)
    userStore.init(res.data.created_user)

    push('/explore/welcome')
  }

  useEffect(() => {
    console.log('checkStatus:particle')

    if (userStore.user) {
      // TODO: memorize the original route the user was intending:
      push('/dashboard')
    }
  }, [])

  return (
    <div className="bg-primary_13 h-screen flex flex-col gap-4 relative">
      {isLoading && <Loading />}
      <div className="h-[10%] flex pl-10">
        <div className="w-[20%] lg:w-[10%] relative">
          <Image
            src="/logo.png"
            alt="logo image"
            fill={true}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      {!loginStart ? <div className="h-[80%] flex-1 flex justify-center items-center">
        <div className="h-[238px] w-[560px] bg-primary_ border border-primary_11 rounded-3xl px-[36px] py-[40px] flex justify-center">
          <div className="w-[90%]">
            <div className="text-center flex flex-col justify-between h-[100%]">
              <div className="text">
                <h1 className="font-logirentBold text-primary_1 text-center font-bold text-4xl">
                  {' '}
                  Explore
                </h1>
                <p className="text-primary_7">Log in or sign up with your email address</p>
              </div>
              <div>
                <button
                  className="border bg-primary_11 flex text-base items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo w-full h-12 cursor-pointer rounded-xl"
                  onClick={login}
                >
                  {/* <GiDigitalTrace size={20} className="text-primary_7" /> */}
                  Start Exploring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> :
        <div className="h-[80%] flex-1 flex justify-center items-center">
          <div className="h-[670px] w-[560px] bg-primary_ border border-primary_11 rounded-3xl px-[36px] py-[40px] flex justify-center">
            <div className="w-[80%]">
              <div className="flex flex-col justify-center h-[100%]">
                <div className="flex flex-col gap-8">
                  <div className="text">
                    <h1 className="font-logirentBold text-primary_1 text-center font-bold text-4xl">
                      {' '}
                      Explore
                    </h1>
                    <p className="text-primary_7 text-center ">Log in or sign up with your email address</p>
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="font-bold text-sm text-primary_2">
                        Email address
                      </label>
                      <input
                        type="text"
                        value={email}
                        className="text-primary_7 border border-primary_10 focus:border-primary_1 rounded-xl p-2 focus:outline-none bg-transparent h-[56px] w-[100%]"
                        id="email"
                        name="email"
                        onChange={() => { }}

                      />
                    </div>
                    <button
                      className="border bg-primary_11 flex text-base items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo w-full h-12 cursor-pointer rounded-xl"
                      onClick={login}
                    >
                      {/* <GiDigitalTrace size={20} className="text-primary_7" /> */}
                      Start Exploring
                    </button>
                    <div className="flex gap-2 items-center">
                      <span className="flex-1 border border-primary_11 h-0"></span>
                      <span className="text-primary_11">Or</span>
                      <span className="flex-1 border border-primary_11 h-0"></span>
                    </div>
                    <button
                      className="border bg-primary_11 flex text-base items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo w-full h-12 cursor-pointer rounded-xl"
                      onClick={login}
                    >
                      {/* <GiDigitalTrace size={20} className="text-primary_7" /> */}
                      <span>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.3125 8.49991C16.3124 10.3394 15.6632 12.12 14.4792 13.5278C13.2953 14.9357 11.6525 15.8806 9.84023 16.1962C8.02797 16.5118 6.16247 16.1777 4.57231 15.2529C2.98216 14.3281 1.76933 12.8718 1.14746 11.1406C0.525591 9.40939 0.534559 7.51424 1.17279 5.78897C1.81101 4.06371 3.03756 2.61898 4.6364 1.70926C6.23524 0.799533 8.10381 0.483164 9.91301 0.815871C11.7222 1.14858 13.356 2.10902 14.5266 3.52804C14.6049 3.62299 14.6639 3.73245 14.6999 3.85017C14.736 3.96789 14.7486 4.09156 14.7368 4.21413C14.7251 4.3367 14.6894 4.45575 14.6317 4.56451C14.5739 4.67326 14.4953 4.76958 14.4004 4.84796C14.3054 4.92634 14.196 4.98526 14.0783 5.02134C13.9605 5.05742 13.8369 5.06996 13.7143 5.05824C13.5917 5.04652 13.4727 5.01078 13.3639 4.95305C13.2552 4.89532 13.1589 4.81674 13.0805 4.72179C12.2165 3.67448 11.0198 2.95489 9.68965 2.68292C8.35952 2.41095 6.97635 2.60304 5.77067 3.22718C4.56498 3.85131 3.60961 4.8698 3.06376 6.11289C2.51791 7.35598 2.41457 8.74859 2.77095 10.0586C3.12732 11.3687 3.9219 12.517 5.02225 13.3123C6.1226 14.1076 7.46226 14.5017 8.81796 14.4291C10.1737 14.3564 11.4635 13.8213 12.4726 12.913C13.4817 12.0047 14.149 10.778 14.3633 9.43741H8.5C8.25136 9.43741 8.0129 9.33864 7.83709 9.16283C7.66127 8.98701 7.5625 8.74855 7.5625 8.49991C7.5625 8.25127 7.66127 8.01282 7.83709 7.837C8.0129 7.66119 8.25136 7.56241 8.5 7.56241H15.375C15.6236 7.56241 15.8621 7.66119 16.0379 7.837C16.2137 8.01282 16.3125 8.25127 16.3125 8.49991Z" fill="#5D5D5D" />
                        </svg>
                      </span>Sign up with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}
