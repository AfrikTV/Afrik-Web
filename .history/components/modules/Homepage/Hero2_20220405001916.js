import React from "react";
import Image from "next/image";
import UserImg from "../../../public/user.png";

import Hero2Image from "../../../public/hero2.png";
import AfterHeroImage from "../../../public/afterhero.png";
import PhotoGridOne from "../../../public/photogrid1.png";
import PhotoGridTwo from "../../../public/photogrid2.png";
import PhotoGridThree from "../../../public/photogrid3.png";
import AmapianoImage from "../../../public/amapainoImage.png";

import Button from "../../elements/Button";
const Hero2 = () => {
  return (
    <section className="py-20 px-10 font-inter ">
      <div className=" mb-20">
        <div>
          <h1 className=" text-center font-black text-4xl  text-primary">
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
      <div className="discover  grid grid-cols-1  lg:grid-cols-3 gap-1 lg:gap-32 items-center">
        <div className="discover-text col-span-2">
          <h2 className="text-5xl font-black  text-primary ">
            Discover the Best Entertainment
          </h2>
          <p className="font-semibold text-xl py-5">
            Whether you want to stream live TV or catch up on your <br /> missed
            shows, binge watch your favourite series with <br /> AfrikTV. Catch
            up with the fun in african movies and feel the <br /> passion of
            blacks in the industries
          </p>
        </div>

        <div className="discover-image mx-auto">
          <Image src={AfterHeroImage} alt="hero-image" />
        </div>
      </div>

      <div className="discover-button py-10">
        <Button>Watch Online</Button>
      </div>

      <div className="your-favourite-movies my-16">
        <h1 className=" text-center text-primary font-black text-5xl">
          Your Favourite Afrik <br /> Movies
        </h1>

        <div className="discover my-10  grid grid-cols-1  lg:grid-cols-3 gap-1 lg:gap-32 items-center py-10">
          <div className="discover-text col-span-2">
            <h2 className="text-5xl font-black  text-primary ">
              Discover the Best Entertainment
            </h2>
            <p className="font-semibold text-xl py-5">
              Whether you want to stream live TV or catch up on your <br />{" "}
              missed shows, binge watch your favourite series with <br />{" "}
              AfrikTV. Catch up with the fun in african movies and feel the{" "}
              <br /> passion of blacks in the industries
            </p>
          </div>

          <div className="discover-image mx-auto grid grid-cols-2 items-center gap-6">
            <div className="photo-grid self-center">
              <Image src={PhotoGridOne} alt="hero-image" />
            </div>
            <div className="photo-grid">
              <Image src={PhotoGridTwo} alt="hero-image" />
            </div>
            <div className="photo-grid">
              <Image
                src={PhotoGridThree}
                alt="hero-image"
                width={300}
                height={350}
              />
            </div>
            <div className="photo-grid">
              <Image src={PhotoGridOne} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="best-loca font-inter">
        <h1 className=" text-primary font-black text-5xl my-20">
          Best of Local
        </h1>

        <div className="movie-row">
          <div className="movie-card">
            <div className="movie-image">
              <Image src={UserImg} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="amapiano">
        <h1 className=" text-primary font-black text-5xl my-20 font-inter">
          The Amapiano
        </h1>

        <div className="discover grid grid-cols-1  lg:grid-cols-2 gap-1 lg:gap-32 items-center">
          <div className="discover-image   ">
            <Image src={AmapianoImage} alt="hero-image" />
          </div>

          <div className="discover-text col-span-2 ">
            <h2 className="text-5xl font-black  text-primary ">
              Hot Amazing African
              <br/>songs
            </h2>
            <p className="font-semibold text-xl py-5">
              Whether you want to stream live TV or catch up on your <br />{" "}
              missed shows, binge watch your favourite series with <br />{" "}
              AfrikTV. Catch up with the fun in african movies and feel the{" "}
              <br /> passion of blacks in the industries
            </p>

            <div className="user-image self-center py-5">
              <Image src={UserImg} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
