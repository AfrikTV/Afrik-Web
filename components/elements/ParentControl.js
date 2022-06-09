import arrowRight from "../../public/assets/images/arrowRight.svg"
import Image from "next/image";
import parental from "../../public/parental.svg"
import ParentalControlDropDown from "./Accordion/parentalsettings";
import { useState } from "react";

const ParentalControl = () => {
    const [isDropDown, setIsDropDown] = useState(false);

    return (
        <>
            <div className="pl-8 border-l-2 w-[500px]">
                <h1 className="font-bold text-xl mb-10 w-max pb-3 border-b-2 ">Parental Control</h1>

                {/* {Parental Control Personal Card} */}
                <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-2 items-center">

                    <div className="flex flex-row items-center gap-8">

                        <div>
                            <Image src={parental} width="70px" height="90px" alt="contact" />
                        </div>

                        <div>
                            <h1 className="font-bold mb-2">Open Settings</h1>
                            <p className="font-thin text-[#757984] text-sm">All maturity rating</p>
                        </div>

                    </div>

                    <div className="">
                        <Image src={arrowRight} className={isDropDown ? "rotate-90" : ""} width="20px" height="20px" alt="arrow right" />
                    </div>
                </div>


                {/* {Parental Control Personal Card} */}
                <div className="mb-5 flex flex-col border-b-2 pb-2">

                    <div className="flex flex-row flex-nowrap cursor-pointer justify-between items-center">

                        <div className="flex flex-row items-center gap-8" onClick={() => setIsDropDown(isDropDown => !isDropDown)}>

                            <div>
                                <Image src={parental} width="70px" height="90px" alt="contact" />
                            </div>

                            <div>
                                <h1 className="font-bold mb-2">Opemipo Disu</h1>
                                <p className="font-thin text-[#757984] text-sm">All maturity rating</p>
                            </div>

                        </div>

                        <div>
                            <Image src={arrowRight} width="20px" height="20px" className={isDropDown ? "rotate-90 ease duration-100" : "ease-in-out duration-200"} alt="arrow right" onClick={() => setIsDropDown(isDropDown => !isDropDown)} />
                        </div>
                    </div>
                    {isDropDown ? <ParentalControlDropDown /> : null}
                </div>


            </div>
        </>
    )
}

export default ParentalControl;


