import { Player } from 'video-react';
import { useState } from 'react';
import videoData from './data';
import Image from 'next/image';
import local from "../../../public/local1.png"


function VideoPlayer() {
    return (
        <div className='flex flex-col mb-28 pl-5 items-center justify-center w-[100%]'>
            <div className='sm:w-[96vw] mb-28 h-screen'>
                <Player
                    poster="../../../public/amapainoImage.png"
                    playsInline
                    src="https://www.youtube.com/watch?v=wwQeSdCyL6c"
                    height={300}
                    width={300}
                />

            </div>

        </div>
    )
}

export default VideoPlayer;