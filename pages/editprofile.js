import Image from "next/image"
import profile from "../public/assets/images/profiletwo.png";
import { useRouter } from "next/router";
import { useState } from "react";

function NewProfile() {
    const [isAddImage, setIsAddImage] = useState(false);

    const router = useRouter();
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] w-[100vw]'>
            <h1 className="mb-14 font-bold text-3xl">Edit profile</h1>

            <div className="">

                <div className='flex mb-5 items-center gap-10 flex-row'>
                    <div className="flex flex-col cursor-pointer">
                        <Image src={profile} width={120} height={120} className='mb-3' alt="profile" />
                        <p className="text-[#07092C] text-center rounded-md w-100% border-[1px] mt-3 p-2 text-sm">Update icon</p>
                    </div>

                    <div className="flex flex-col justify-start cursor-pointer">
                        <input type="text" placeholder="Name" className="mb-12 border-[#E3E0E0] border-[1px] bg-[#FAFAFA] placeholder:text-[#757984] w-ma border-[1px] font-medium p-3 rounded-lg" />
                        <p className="text-sm mb-2">Language:</p>
                        <select className="text-[#07092C] px-2 py-1 border-[1px]">
                            <option className="text-[#07092C]">English</option>
                            <option className="text-[#07092C]">Spanish</option>
                            <option className="text-[#07092C]">French</option>
                        </select>
                    </div>
                </div>

                <div className="mt-14">
                    <h1 className="text-xl font-bold pb-3 border-b-[1px]">Maturity Settings</h1>

                    <div className="mt-10">

                        <div className="">

                            <div className="flex flex-row justify-between">

                                <div className="flex flex-row justify-start pb-10 items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p>All maturity Rating</p>
                                </div>

                                <div className="flex flex-row justify-start pb-10 items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p>Autoplay Episodes</p>
                                </div>
                            </div>


                            <div className="flex flex-row justify-between">

                                <div className="flex flex-row justify-start pb-10 items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p>Autoplay Previews on all devices</p>
                                </div>

                                <div className="flex flex-row justify-start pb-10 items-center gap-2">
                                    <input type="checkbox" className="cursor-pointer" />
                                    <p>All Maturing Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[100%] justify-center gap-10 items-center flex flex-row">
                    <div>
                        <h1 className="text-white w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">Save changes</h1>
                    </div>

                    <div onClick={() => router.back()}>
                        <h1 className="text-[#060825] border-[1px] border-[#060825] w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-white hover:shadow-lg">Cancel</h1>
                    </div>
                    <div>
                        <h1 className="text-[#060825] border-[1px] border-[#060825] w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-white hover:shadow-lg">Delete Profile</h1>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default NewProfile;