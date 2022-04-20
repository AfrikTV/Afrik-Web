import Image from 'next/image'
import React from 'react'
import notiImage from "../../../public/assets/images/notificationImage.svg"

function NotifyDropDown({ isActive, setIsActive }) {
    return (
        <div className='absolute gap-3 items-center text-sm py-5 overflow-visible rounded-md px-5 z-[50] bg-white shadow-lg top-16 right-24 w-[300px] flex flex-col'>

            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>

            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col text-sm'>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row text-sm cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col text-sm'>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>


            {/* Notifcation Card */}
            <div className='flex gap-5 flex-row cursor-pointer' onClick={() => setIsActive(isActive => !isActive)}>
                <Image src={notiImage} height="55px" alt="notification images" />

                <div className='flex flex-col '>
                    <h1 className='font-semibold leading-4'>Reminder: New arrival venger</h1>
                    <p className='font-normal text-[#757984] mt-2'>2 hrs ago</p>
                </div>
            </div>

        </div>
    )
}

export default NotifyDropDown;