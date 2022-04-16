import Image from "next/image";
import closeBtn from "../../../public/assets/images/close.svg"

function AddNewCardModal({ isOpen, setOpen }) {
    return (
        <div className='block w-[100%] h-[100%] fixed top-0 left-0 flex justify-center items-center z-40 bg-[rgba(0,0,0,0.36458333333333337)]' >
            <div className='ease duration-100 w-[60%] py-7 px-20 rounded-lg h-[90%] bg-white'>
                <div className="inline-block w-[100%] text-right">
                    <Image src={closeBtn} width="25px" className="cursor-pointer" onClick={() => setOpen(isOpen => !isOpen)} height="25px" alt="closeBtn" />
                </div>

                <h1 className="mb-3 pb-3 border-b-2 font-bold text-xl">Add New Card</h1>
                <div className="flex mb-5 mt-5 flex-col">
                    <label className="font-medium mb-2 text-[#292D32]">Card holder`s name</label>
                    <input type="text" placeholder="Opemipo Disu" className="placeholder:text-[#757984] text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" required />
                </div>

                <div className="mb-5 flex flex-col">
                    <label className="font-medium mb-2 text-[#292D32]">Card number</label>
                    <input type="number" placeholder="0000 0000 0000 0000" pattern="[0-9]*" inputMode="numeric" className="text-[#050729] placeholder:text-[#757984] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" required />
                </div>

                <div className="flex flex-row mb-6 items-center w-[100%] mt-5 gap-10">

                    <div className="flex flex-col w-[100%]">
                        <label className="font-medium mb-3 text-[#292D32]">Expiry date</label>
                        <input type="month" placeholder="MM/YY" className="text-[#050729] text-lg font-medium px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729] font-medium" required />
                    </div>

                    <div className="flex flex-col w-[100%]">
                        <label className="font-medium mb-3 text-[#292D32]">CVV</label>
                        <input type="password" minLength="3" pattern="[0-9]*" inputMode="numeric" maxLength="4" placeholder="****" className="text-[#050729] font-medium text-lg px-5 py-3 border-2 bg-[#FAFAFA] rounded-lg text-[#050729]" required />
                    </div>

                </div>

                <div className="w-[100%] justify-center gap-10 items-center flex flex-row">
                    <div>
                        <h1 className="text-white w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-[#060825] hover:shadow-lg">
                            Add Card
                        </h1>
                    </div>

                    <div onClick={() => setOpen(isOpen => !isOpen)}>
                        <h1 className="text-[#060825] border-2 border-[#060825] w-[150px] text-center px-5 cursor-pointer py-3 font-medium rounded-lg mt-5 bg-white hover:shadow-lg">
                            Cancel
                        </h1>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AddNewCardModal;