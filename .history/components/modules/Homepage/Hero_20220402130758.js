import React from "react";
import HeroImage from "../../../public/heroimage1.png";
import HeroImage2 from "../../../public/heroimage2.png";
import Image from "next/image";
import DownloadFromAppstore from "../../../public/download-from-appstore.png";
import DownloadFrom
const Hero = () => {
  return (
    <section className="py-20 px-10">
      <div className="hero-container flex justify-between items-center lg:flex-row flex-col ">
        <div className="hero-content">
          <h1 className="hero-title text-primary font-extrabold text-6xl leading-tight md:leading-none ">
            AfrikTV the first <br /> African movie
            <br />
            streaming
          </h1>

          <div className="download">
                      <div className="download-from-appstore">
                          
                          <Image
                              src={DownloadFromAppstore}
                              alt="Download from appstore"

                            />
            </div>

                      <div className="download-from-playstore">
                          

            </div>
          </div>
        </div>

        <div className="hero-image lg:flex space-x-10 hidden  ">
          <div>
            <Image
              src={HeroImage}
              alt="hero image"
              unoptimized
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
