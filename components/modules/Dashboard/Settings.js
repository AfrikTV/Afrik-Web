import React from "react";
import arrow from "../../../public/assets/images/arrow.svg"
import Image from "next/image";
import { useRouter } from "next/router";
import contact from "../../../public/assets/images/contact.png"
import arrowRight from "../../../public/assets/images/arrowRight.svg"
import { useState } from "react";
import ChangePasswordModal from "../../elements/Modal/ChangePassword";

const Settings = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-row">

      <div className="pr-5">

        <div className="mb-10 flex flex-row gap-2 items-center ">
          <Image src={arrow} onClick={() => { router.back() }} className="cursor-pointer" alt="arrow" width="25px" height="25px" />
          <p className="text-xl font-bold">Settings</p>
        </div>

        <div className="mb-10 w-96 text-white bg-[#07092C] p-8 rounded-lg justify-between align-center">
          <h1 className=" mb-5 font-bold text-lg"> Premium Subscribtion</h1>
          <p className="mb-8 font-thin">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <div className="w-full bg-white rounded-lg text-[#07092C] py-3 cursor-pointer text-center font-bold text-lg">Change Plan</div>
        </div>

        {/* Account settings link */}
        <div className="mb-5 flex flex-row  flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>


      </div>
      {/* Account Settings */}

      <div className="pl-8 border-l-2">
        <h1 className="font-bold text-xl pb-3 border-b-2 w-[300px]">Account Settings</h1>

        <div className="flex flex-row mb-8 items-center mt-10 gap-10">

          <div className="flex flex-col">
            <label className="font-medium mb-3 text-[#292D32]">First Name</label>
            <input type="text" placeholder="Opemipo" className="text-[#050729] text-lg font-medium px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729] font-medium" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-3 text-[#292D32]">Last Name</label>
            <input type="text" placeholder="Disu" className="text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" />
          </div>

        </div>

        <div className="flex flex-col mb-8">
          <label className="font-medium mb-3 text-[#292D32]">Email</label>
          <input type="email" placeholder="opedisu@email.com" className="font-medium text-lg text-[#050729] px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg" />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-3 text-[#292D32]">Phone Number</label>
          <input type="number" placeholder="+234 788888" className="font-medium text-lg text-[#050729] px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg" />
        </div>

        <h1 onClick={() => setOpen(isOpen => !isOpen)} className="font-medium w-fit text-md mt-8 text-[#07092C] cursor-pointer underline">Change Password</h1>

        <div className="w-[100%] grid mt-10 ">
          <h1 className="text-white w-fit p-2 hover:shadow-lg rounded-lg justify-self-end px-5 py-3 font-medium cursor-pointer bg-[#060825]">Save Changes</h1>
        </div>

        {isOpen ? <ChangePasswordModal setOpen={setOpen} /> : null}

      </div>
    </div>
  );
};

export default Settings;
