import ChangePasswordModal from "./elements/Modal/ChangePassword";



const AccountSettings = ({ isOpen, setIsOpen }) => {
    return (
      <>
        <div className="pl-8 border-l-2">
          <h1 className="font-bold text-xl pb-3 border-b-2 w-[300px]">Account Settings</h1>
  
          <div className="flex flex-row mb-8 items-center mt-10 gap-10">
  
            <div className="flex flex-col">
              <label className="font-medium mb-3 text-[#292D32]">First Name</label>
              <input type="text" placeholder="Opemipo" className="text-[#050729] text-lg font-medium px-5 py-3 border-[1px] bg-[#FAFAFA] rounded-lg text-[#050729] font-medium" />
            </div>
  
            <div className="flex flex-col">
              <label className="font-medium mb-3 text-[#292D32]">Last Name</label>
              <input type="text" placeholder="Disu" className="text-[#050729] font-medium text-lg px-5 py-3 border-[1px] bg-[#FAFAFA] rounded-lg text-[#050729]" />
            </div>
  
          </div>
  
          <div className="flex flex-col mb-8">
            <label className="font-medium mb-3 text-[#292D32]">Email</label>
            <input type="email" placeholder="opedisu@email.com" className="font-medium text-lg text-[#050729] px-5 py-3 border-[1px] bg-[#FAFAFA] rounded-lg" />
          </div>
  
          <div className="flex flex-col">
            <label className="font-medium mb-3 text-[#292D32]">Phone Number</label>
            <input type="number" placeholder="+234 788888" className="font-medium text-lg text-[#050729] px-5 py-3 border-[1px] bg-[#FAFAFA] rounded-lg" />
          </div>
  
          <h1 onClick={() => setIsOpen(isOpen => !isOpen)} className="font-medium w-fit text-md mt-8 text-[#07092C] cursor-pointer underline">Change Password</h1>
  
          <div className="w-[100%] grid mt-10 ">
            <h1 className="text-white w-fit p-2 hover:shadow-lg rounded-lg justify-self-end px-5 py-3 font-medium cursor-pointer bg-[#060825]">Save Changes</h1>
          </div>
  
          {isOpen ? <ChangePasswordModal setOpen={setOpen} /> : null}
  
        </div>
      </>
    )
  }

  export default AccountSettings;