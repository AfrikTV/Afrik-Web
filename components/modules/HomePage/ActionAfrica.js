import Image from 'next/image'
import local1 from "../../../public/local1.png"
import local2 from "../../../public/local2.png"
import local3 from "../../../public/local3.png"


function ActionAfricaMovies({genres}) {
    return (
        <div className='flex flex-col mb-24 justify-center'>
            <h1 className='text-xl font-extrabold text-[#492406] mb-10 '>{genres}</h1>

            <div className='flex flex-row cursor-pointer gap-1 sm:gap-10'>
                <div>
                    <Image src={local1} alt="movies" width={140} height={200} />
                </div>
                <div>
                    <Image src={local2} alt="movies" width={140} height={200} />
                </div>
                <div>
                    <Image src={local1} alt="movies" width={140} height={200} />
                </div>
                <div>
                    <Image src={local2} alt="movies" width={140} height={200} />
                </div>
                <div>
                    <Image src={local3} alt="movies" width={140} height={200} />
                </div>
            </div>
        </div>
    )
}

export default ActionAfricaMovies