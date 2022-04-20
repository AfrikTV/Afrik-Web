import Image from "next/image";
import closeBtn from "../../../public/assets/images/close.svg"

function SignOutModal({ isSignOut, setIsSignOut }) {
    return (
        <div className='block ease duration-100 w-[100%] h-[100%] fixed top-0 left-0 flex justify-center items-center z-40 bg-[rgba(0,0,0,0.36458333333333337)]' >
            <div className='ease-in-ot duration-300 flex flex-col min-w-[550px] sm:w-[40%] justify-center items-center w-[30%] h-[50%] py-7 px-20 rounded-lg bg-white'>

                <h1 className="mb-3 font-bold text-2xl w-max">Sign out of AfrikTv</h1>
                <h1 className="mb-3 font-medium font-2xl">Are you sure about signing out?</h1>
                <div className="grid w-[100%]" onClick={() => setIsSignOut(isSignOut => !isSignOut)}>
                    <h1 className="px-10 text-white w-max justify-self-center text-center cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">
                        Yes, Sign me out
                    </h1>
                </div>

                <div onClick={() => setIsSignOut(isSignOut => !isSignOut)} className="w-[100%] grid">
                    <h1 className="text-[#060825] w-max border-2 border-[#060825] justify-self-center text-center px-10 cursor-pointer py-2 font-medium rounded-lg mt-5 bg-white hover:shadow-lg">
                        Cancel
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SignOutModal;