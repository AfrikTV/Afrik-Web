import Image from "next/image"
import profile from "../public/assets/images/profiletwo.png";
import { useRouter } from "next/router";
import { useState } from "react";
import AddImageModal from "../components/elements/Modal/AddImage";

function NewProfile() {
  const [isAddImage ,setIsAddImage] = useState(false);
  
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw]'>
      <h1 className="mb-14 font-bold text-3xl">New profile</h1>

      <div className="">

        <div className='flex mb-5 items-center gap-10 flex-row'>
          <div className="manCont cursor-pointer"  onClick={() => setIsAddImage(isAddImage => !isAddImage)}>
          <Image src={profile} width={120} height={120} />
          </div>
          <input type="text" placeholder="Name" className="border-[#E3E0E0] bg-[#FAFAFA] placeholder:text-[#757984] w-[100%] border-2 font-medium p-3 rounded-lg" />
        </div>

        <div className="flex flex-row justify-start pb-10 border-b-2 items-center gap-5">
          <input type="checkbox" className="cursor-pointer" />
          <p>This is a child's profile</p>
        </div>

        <div className="w-[100%] justify-center gap-10 items-center flex flex-row">
          <div>
            <h1 className="text-white w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">
              Add Profile
            </h1>
          </div>

          <div onClick={() => router.back()}>
            <h1 className="text-[#060825] border-2 border-[#060825] w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-white hover:shadow-lg">
              Cancel
            </h1>
          </div>
        </div>
      </div>

      {isAddImage ? <AddImageModal isAddImage setIsAddImage={setIsAddImage} /> : null}
    </div>

  )
}

export default NewProfile