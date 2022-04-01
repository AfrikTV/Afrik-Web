import React from "react";
import HeroImage from "../../../public/heroimage1.png";
import HeroImage2 from "../../../public/heroimage2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      <div className="hero-container flex justify-between items-center ">
        <div className="hero-content">
          <h1 className="hero-title text-primary font-extrabold text-6xl leading-tight md:leading-none ">
            AfrikTV the first <br /> African movie
            <br />
            streaming
          </h1>
        </div>

        <div className="hero-image flex space-x-10  ">
          <div>
            <Image
              src={HeroImage}
              alt="hero image"
              unoptimized
              className="self-end"
            />
          </div>

          <div>
            <Image
              src={HeroImage2}
              alt="hero image"
              unoptimized
              className="self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
