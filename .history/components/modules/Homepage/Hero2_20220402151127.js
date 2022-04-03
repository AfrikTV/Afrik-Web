import React from "react";
import Image from "next/image";
import Hero2Image from "../../../public/hero2.png";
import AfterHeroImage from '../../../public/after hero.png'
import Button from '../../'
const Hero2 = () => {
  return (
    <section className="py-20 px-10">
      <div className=" mb-20">
        <div>
          <h1 className=" text-center font-black text-4xl text-primary">
            Get Unlimited access to African <br />
            movies
          </h1>
        </div>

        <div className="image-row py-16 flex lg:flex-row space-y-10 lg:space-y-0 flex-col  justify-between mx-auto">
          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>

          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>
          <div className="div">
            <Image src={Hero2Image} unoptimized alt="hero-image" />
          </div>
        </div>
      </div>
      <div className="discover  grid grid-cols-1  lg:grid-cols-3 gap-32 items-center">
        <div className="discover-text col-span-2">
          <h2 className="text-5xl font-black  text-primary">
            Discover the Best Entertainment
          </h2>
          <p className="font-semibold text-xl">
            Whether you want to stream live TV or catch up on your <br/> missed shows,
            binge watch your favourite series with <br/> AfrikTV. Catch up with the
            fun in african movies and feel the <br/> passion of blacks in the
            industries
          </p>

          <div className="discover-button">


          </div>
        </div>

        <div className="discover-image">
          <Image src={AfterHeroImage} alt="hero-image" unoptimized />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
