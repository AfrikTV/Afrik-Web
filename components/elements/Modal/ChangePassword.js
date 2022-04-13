import Image from "next/image";
import closeBtn from "../../../public/assets/images/close.svg"
import { useRouter } from "next/router";


function ChangePasswordModal({ isOpen, setOpen }) {
    const router = useRouter();
    return (
        <div className='block w-[100%] h-[100%] fixed top-0 left-0 flex justify-center items-center z-40 bg-[rgba(0,0,0,0.36458333333333337)]' >
            <div className='w-[60%] py-6 px-20 rounded-lg h-[90%] bg-white'>
                <div className="inline-block w-[100%] text-right">
                    <Image src={closeBtn} width="30px" className="cursor-pointer" onClick={() => setOpen(isOpen => !isOpen)} height="30px" alt="closeBtn" />
                </div>

                <h1 className="mb-3 font-bold text-xl">Change Password</h1>
                <p className="mb-5">You’re required to share your old password for additional security. <span className="font-medium underline hover:cursor-pointer" onClick={() => router.push("/forgetpassword")}>Forgotten your password? </span></p>
                <div className="flex mb-5 flex-col">
                    <label className="font-medium mb-2 text-[#292D32]">Old Password</label>
                    <input type="text" placeholder="Your Old Password" className="text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" />
                </div>

                <div className="mb-5 flex flex-col">
                    <label className="font-medium mb-2 text-[#292D32]">New Paswword</label>
                    <input type="text" placeholder="Your New Password" className="text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" />
                </div>

                <div className="flex flex-col">
                    <label className="font-medium mb-2 text-[#292D32]">Confirm Passowrd</label>
                    <input type="text" placeholder="Confirm Password" className="text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" />
                </div>

                <div className="w-[100%]  grid">
                    <h1 className="text-white justify-self-center w-max px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">
                        Save Changes
                    </h1>
                </div>


            </div>
        </div>
    )
}

export default ChangePasswordModal;