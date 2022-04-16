const ParentalControlDropDown = () => {
    return (
        <div className="ease-in-out transition-display duration-500">
            <div className="flex flex-row justify-between ">
                <div>
                    <p className="text-md text-[#07092C]">Language used</p>
                    <p className="text-sm text-[#757984]">English</p>
                </div>

                <div className="boder-[1px] ">
                    <p className="text-md text-[#07092C]">Change</p>
                </div>
            </div>

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
    )
}


export default ParentalControlDropDown;