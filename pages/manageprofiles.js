import Image from "next/image"
import profile from "../public/assets/images/profileone.png"
import profileTwo from "../public/assets/images/profiletwo.png"
import plus from "../public/assets/images/plus.svg"
import "../styles/Home.module.css"
import { useRouter } from "next/router"
import { useState } from "react"

function ManageProfiles() {
  const profilesData = [];
  const [isProfile, setIsProfile] = useState(profilesData);
  const router = useRouter();
  return (
    <div className='flex flex-col sm:p-0 py-10 items-center justify-center sm:h-[100vh] h-full w-[100vw]'>
      <h1 className="mb-14 font-bold text-2xl">Manage Profiles</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 sm:gap-8 items-center'>
        <div className="flex flex-col cursor-pointer text-center">
          <div className="manCont">
            <Image src={profile} height={160} width={160} alt="profile photo" className="manCont" />
          </div>
          <h1 className="font-bold pt-3">Obiabo</h1>
        </div>
        <div className="text-center flex flex-col cursor-pointer ">
          <div className="manCont">
            <Image src={profileTwo} height={160} width={160} alt="profile photo" />
          </div>
          <h1 className="font-bold pt-3">Disu</h1>
        </div>
        <div className="text-center items-center sm:p-0 p-8 rounded-lg border-[1px]">
          <Image onClick={() => router.push('/newprofile')} src={plus} height={20} alt="profile photo" className="cursor-pointer" />
          <h1 className="font-bold text-sm pt-3">Add new profile</h1>
        </div>

      </div>
    </div>
  )
}

export default ManageProfiles;