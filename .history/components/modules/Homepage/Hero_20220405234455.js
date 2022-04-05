import React from "react";
import HeroImage from "../../../public/heroimage1.png";
import HeroImage2 from "../../../public/heroimage2.png";
import Image from "next/image";
import DownloadFromAppstore from "../../../public/download-from-appstore.png";
import DownloadFromPlaystore from "../../../public/download-from-playstore.png";
const Hero = () => {
  return (
    <section className="py-20 lg:px-10 px-4 font-inter hero-container hero-pattern">
      <div className="hero-container flex justify-between items-start lg:items-center lg:flex-row flex-col ">
        <div className="hero-content">
          <h1 className="hero-title   text-4xl text-primary font-extrabold lg:text-6xl leading-tight md:leading-none ">
            AfrikTV the first <br /> African movie
            <br />
            streaming
          </h1>

          <div className="download flex py-16 space-x-4 mx-auto">
            <div className="download-from-appstore">
              <Image src={DownloadFromAppstore}
              
                blurDataURL={HeroImage}
                alt="Download from appstore" />
            </div>

            <div className="download-from-playstore">
              <Image
                src={DownloadFromPlaystore}
                alt="Download from playstore"
              />
            </div>
          </div>
        </div>

        <div className="hero-image lg:flex space-x-10 hidden  ">
          <div>
            <Image
              src={HeroImage}
              alt="hero image"
              blurDataURL={HeroImage}
              lazyRoot
              className="self-end"
            />
          </div>

          <div className="-mt-24">
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
