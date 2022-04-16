import Image from "next/image";
import closeBtn from "../../../public/assets/images/close.svg"

function AddImageModal({ isAddImage, setIsAddImage }) {
    return (
        <div className='ease duration-100 block w-[100%] h-[100%] fixed top-0 left-0 flex justify-center items-center z-40 bg-[rgba(0,0,0,0.36458333333333337)]' >
            <div className='flex flex-col justify-center items-center w-[30%] h-[50%] py-7 px-20 rounded-lg bg-white'>

                <h1 className="mb-3 font-bold text-2xl ">Update profile icon</h1>
                <h1 className="mb-3 w-max  font-2xl">Choose an image form your device</h1>
                <div className="w-[100%] grid" onClick={() => setIsSignOut(isSignOut => !isSignOut)}>
                    <h1 className="px-10 text-white justify-self-center text-center w-[100%] cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">
                        Upload an image
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AddImageModal;