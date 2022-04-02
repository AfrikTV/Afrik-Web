import React from 'react'
import Image from 'next/image'
import Hero2Image from '../../../public/hero2.png'
const Hero2 = () => {
    return (
      <section className="py-20 px-10">
        <div>
          <h1 className=" text-center font-black text-4xl">
            Get Unlimited access to African movies
          </h1>
        </div>

        <div className="image-row">
          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>
          <Image src={Hero2Image} alt="hero-image" unselectable />
          <Image src={Hero2Image} alt="hero-image" />
        </div>
      </section>
    );
}

export default Hero2