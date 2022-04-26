import Image from 'next/image'
import React from 'react'
import arrow from "../../public/assets/images/arrow.svg"
import local from "../../public/local1.png"
import local2 from "../../public/local2.png"
import local3 from "../../public/local3.png"

function RecentlyPlayed({setIsHome}) {
  return (
    <div className=''>
        <div onClick={() => setIsHome('HOME')} className="mb-10 flex flex-row gap-2 items-center ">
          <Image  src={arrow} className="cursor-pointer" alt="arrow" width="20px" height="20px" />
          <p className="text-xl font-bold">Recently Played</p>
        </div>

        <div className='flex flex-row items-center gap-8'>
            <div>
                <Image className='rounded-lg' src={local} alt="local1" width={140} height={160} />
                <p className='text-sm'>The Family</p>
            </div>
            <div>
                <Image className='rounded-lg' src={local2} alt="local1" width={140} height={160} />
                <p className='text-sm'>The Family</p>
            </div>
            <div>
                <Image className='rounded-lg' src={local3} alt="local1" width={140} height={160} />
                <p className='text-sm'>The Family</p>
            </div>
            <div>
                <Image className='rounded-lg' src={local} alt="local1" width={140} height={160} />
                <p className='text-sm'>The Family</p>
            </div>
        </div>
    </div>
  )
}

export default RecentlyPlayed;