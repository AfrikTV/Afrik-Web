import Image from 'next/image'
import React from 'react'
import notiImage from "../../../public/assets/images/notificationImage.svg"
import "../../../styles/Home.module.css"
import { useRouter } from 'next/router'

function ProfileDropDown({ isSignOut, setIsSignOut, isState, setIsState }) {
    const router = useRouter();
    return (
        <div className='fixed transition-all dropdown delay-75 [ease-cubic] ease-cubic duration-600 gap-3 items-center py-5 rounded-md z-[50] bg-white shadow-lg top-20 right-6 w-[150px] flex flex-col'>
            {/* Profile Cards */}
            <div className='flex gap-2 flex-row items-center px-2 cursor-pointer' onClick={() => setIsState(!isState)}>
                <Image src={notiImage} height="35px" alt="notification images" />
                <h1 className='font-medium text-[#050729] text-sm leading-4'>Anna</h1>
            </div>
            {/* Profile Cards */}
            <div className='flex gap-2 mb-2 flex-row items-center cursor-pointer' onClick={() => setIsState(!isState)}>
                <Image src={notiImage} height="35px" alt="notification images" />
                <h1 className='font-medium text-[#050729] text-sm leading-4'>Anna</h1>
            </div>
            {/* Manage Profiles */}

            <div className='flex gap-5 flex-row cursor-pointer w-[100%]' onClick={() => {router.push("/manageprofiles"); setIsState(isState => !isState)}}>
                <p className='text-sm pb-3 font-medium text-[#050729] w-[100%] text-center leading-4 border-b-2'>Manage Profile</p>
            </div>

            {/* Sign Out Card */}
            <div div className='cursor-pointer w-[100%]' onClick={() => { setIsSignOut(!isSignOut); setIsState(isState => !isState)  }}>
                <p className='text-sm font-medium text-[#050729] w-[100%] text-center'>Sign out</p>
            </div >

        </div >

    )
}

export default ProfileDropDown;