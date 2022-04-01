import React from "react";
import HeroImage from "../../../public/heroimage1.png";
import HeroImage2 from "../../../public/heroimage2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="hero-container grid grid-cols-2 jus">
        <div className="hero-content">
          <h1 className="hero-title text-primary font-extrabold text-6xl leading-tight md:leading-none">
            AfrikTV the first African movie streaming
          </h1>
        </div>

        <div className="hero-image flex w-full space-x-10 ">
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